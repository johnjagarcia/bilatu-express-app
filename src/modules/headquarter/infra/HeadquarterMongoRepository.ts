import { injectable } from "inversify";
import HeadquarterRepository from "../domain/HeadquarterRepository";
import HeadquarterDocument from "../../shared/infra/orm/mongoose/schemas/Headquarter";
import Headquarter from "../domain/Headquarter";
import ProductCategoryDocument from "../../shared/infra/orm/mongoose/schemas/ProductCategory";

@injectable()
export default class HeadquarterMongoRepository
  implements HeadquarterRepository {
  async save(headquarter: Headquarter): Promise<Headquarter> {
    const headquarterDocument = new HeadquarterDocument(headquarter);
    if (headquarter.main) {
      await HeadquarterDocument.updateMany(
        { businessId: headquarterDocument.businessId },
        { main: false }
      );
    }
    return (await headquarterDocument.save())
      .populate("businessId")
      .populate("cityId")
      .execPopulate();
  }

  async getList(businessId: string): Promise<Headquarter[]> {
    return await HeadquarterDocument.find({ businessId, active: true })
      .populate("cityId")
      .populate("coverageCities")
      .populate("businessId")
      .exec();
  }

  async getListWithProductsByCriteria(
    criteria: string
  ): Promise<Headquarter[]> {
    return await HeadquarterDocument.aggregate([
      {
        $lookup: {
          from: "products",
          let: { headquarter_id: "$_id" },
          pipeline: [
            {
              $match: {
                $text: {
                  $search: criteria,
                },
                $expr: {
                  $and: [{ $eq: ["$headquarterId", "$$headquarter_id"] }],
                },
              },
            },
          ],
          as: "products",
        },
      },
      {
        $match: {
          $expr: {
            $gte: [{ $size: "$products" }, 1],
          },
        },
      },
    ]);
  }

  async getListWithProductsBySubcategory(
    subcategoryId: string
  ): Promise<Headquarter[]> {
    const productCategories = await ProductCategoryDocument.find({
      subcategoryId,
    }).exec();

    return await HeadquarterDocument.aggregate([
      {
        $lookup: {
          from: "products",
          let: { headquarter_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$headquarterId", "$$headquarter_id"] },
                    {
                      $in: [
                        "$productCategoryId",
                        productCategories.map((pc) => pc._id),
                      ],
                    },
                  ],
                },
              },
            },
          ],
          as: "products",
        },
      },
      {
        $match: {
          $expr: {
            $gte: [{ $size: "$products" }, 1],
          },
        },
      },
    ]);
  }
}
