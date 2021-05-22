import { Container } from "inversify";
import { TYPES } from "../constants/types";

import RoleRepository from "../modules/role/domain/RoleRepository";
import RoleMongoRepository from "../modules/role/infra/RoleMongoRepository";
import CreateRole from "../modules/role/app/create-role";
import { RoleResolver } from "../interfaces/resolvers/role-resolver";

import GetRoles from "../modules/role/app/get-roles";
import CreateUser from "../modules/user/app/create-user";
import GetUser from "../modules/user/app/get-user";
import UserRepository from "../modules/user/domain/UserRepository";
import UserMongoRepository from "../modules/user/infra/UserMongoRepository";
import { UserResolver } from "../interfaces/resolvers/user-resolver";

import { BusinessCategoryResolver } from "../interfaces/resolvers/business-category-resolver";
import BusinessCategoryRepository from "../modules/bussiness-category/domain/BusinessCategoryRepository";
import BusinessCategoryMongoRepository from "../modules/bussiness-category/infra/BusinessCategoryMongoRepository";
import CreateBusinessCategory from "../modules/bussiness-category/app/create-business-category";
import GetBusinessCategories from "../modules/bussiness-category/app/get-business-categories";
import UpdateBusinessCategoryImage from "../modules/bussiness-category/app/update-business-category-image";

import { StateResolver } from "../interfaces/resolvers/state-resolver";
import StateRepository from "../modules/state/domain/StateRepository";
import StateMongoRepository from "../modules/state/infra/StateMongoRepository";
import GetStates from "../modules/state/app/get-states";

import { CityResolver } from "../interfaces/resolvers/city-resolver";
import CityRepository from "../modules/city/domain/CityRepository";
import CityMongoRepository from "../modules/city/infra/CityMongoRepository";
import GetCities from "../modules/city/app/get-cities";
import CreateCity from "../modules/city/app/create-city";

import { BusinessResolver } from "../interfaces/resolvers/business-resolver";
import BusinessRepository from "../modules/bussiness/domain/BusinessRepository";
import BusinessMongoRepository from "../modules/bussiness/infra/BusinessMongoRepository";
import CreateBusiness from "../modules/bussiness/app/create-business";
import GetBusiness from "../modules/bussiness/app/get-business";

import { SubcategoryResolver } from "../interfaces/resolvers/subcategory-resolver";
import SubcategoryRepository from "../modules/subcategory/domain/SubcategoryRepository";
import SubcategoryMongoRepository from "../modules/subcategory/infra/SubcategoryMongoRepository";
import CreateSubcategory from "../modules/subcategory/app/create-subcategory";
import GetSubcategories from "../modules/subcategory/app/get-subcategories";
import UpdateSubcategoryImage from "../modules/subcategory/app/update-subcategory-image";

import { CategoryResolver } from "../interfaces/resolvers/category-resolver";
import CategoryRepository from "../modules/category/domain/CategoryRepository";
import CategoryMongoRepository from "../modules/category/infra/CategoryMongoRepository";
import CreateCategory from "../modules/category/app/create-category";
import GetCategories from "../modules/category/app/get-categories";
import AssociateCategoriesToBusiness from "../modules/bussiness/app/associate-categories-to-business";
import UpdateCategoryImage from "../modules/category/app/update-category-image";

import { HeadquarterResolver } from "../interfaces/resolvers/headquarter-resolver";
import HeadquarterRepository from "../modules/headquarter/domain/HeadquarterRepository";
import HeadquarterMongoRepository from "../modules/headquarter/infra/HeadquarterMongoRepository";
import CreateHeadquarter from "../modules/headquarter/app/create-headquarter";
import GetHeadquarters from "../modules/headquarter/app/get-headquarter";
import GetHeadquartersWithProductsByCriteria from "../modules/headquarter/app/get-headquarters-with-products-by-criteria";
import GetHeadquartersWithProductsBySubcategory from "../modules/headquarter/app/get-headquarters-with-products-by-subcategory";

import { ProductCategoryResolver } from "../interfaces/resolvers/product-category-resolver";
import ProductCategoryRepository from "../modules/product-category/domain/ProductCategoryRepository";
import ProductCategoryMongoRepository from "../modules/product-category/infra/ProductCategoryMongoRepository";
import CreateProductCategory from "../modules/product-category/app/create-product-category";
import GetProductCategories from "../modules/product-category/app/get-product-categories";

import { ProductResolver } from "../interfaces/resolvers/product-resolver";
import ProductRepository from "../modules/product/domain/ProductRepository";
import ProductMongoRepository from "../modules/product/infra/ProductMongoRepository";
import CreateProduct from "../modules/product/app/create-product";
import GetProductsByHeadquarter from "../modules/product/app/get-products-by-headquarter";

import CreateBlob from "../modules/blob/app/create-blob";
import BlobRepository from "../modules/blob/domain/BlobRepository";
import BlobMongoRepository from "../modules/blob/infra/BlobMongoRepository";
import GetBlob from "../modules/blob/app/get-blob";

import GetRoadTypes from "../modules/road-types/app/get-road-types";
import { RoadTypeResolver } from "../interfaces/resolvers/road-type-resolver";
import RoadTypeRepository from "../modules/road-types/domain/RoadTypeRepository";
import RoadTypeMongoRepository from "../modules/road-types/infra/RoadTypeMongoRepository";

import { CustomerResolver } from "../interfaces/resolvers/customer-resolver";
import CustomerRepository from "../modules/customer/domain/CustomerRepository";
import CustomerMongoRepository from "../modules/customer/infra/CustomerMongoRepository";
import CreateCustomer from "../modules/customer/app/create-customer";

import { BusinessCategoryGroupResolver } from "../interfaces/resolvers/business-category-group-resolver";
import BusinessCategoryGroupMongoRepository from "../modules/business-category-group/infra/BusinessCategoryGroupMongoRepository";
import CreateBusinessCategoryGroup from "../modules/business-category-group/app/create-business-category-group";
import GetBusinessCategoriesGroup from "../modules/business-category-group/app/get-business-categories-group";
import UpdateBusinessCategoryGroupImage from "../modules/business-category-group/app/update-business-category-group-image";
import BusinessCategoryGroupRepository from "../modules/business-category-group/domain/BusinessCategoryGroupRepository";

import { AuthResolver } from "../interfaces/resolvers/auth-resolver";
import AuthenticateUser from "../modules/auth/app/AuthenticateUser";
import { PingResolver } from "../interfaces/resolvers/ping";

import { SignupBusinessOwnerResolver } from "../interfaces/resolvers/signup-business-owner";
import RegisterBusinessOwner from "../modules/signup-owner/app/register-business-owner";

const myContainer = new Container();

/* Resolvers */
myContainer.bind<RoleResolver>(RoleResolver).toSelf();
myContainer.bind<UserResolver>(UserResolver).toSelf();
myContainer.bind<BusinessCategoryResolver>(BusinessCategoryResolver).toSelf();
myContainer.bind<StateResolver>(StateResolver).toSelf();
myContainer.bind<CityResolver>(CityResolver).toSelf();
myContainer.bind<BusinessResolver>(BusinessResolver).toSelf();
myContainer.bind<SubcategoryResolver>(SubcategoryResolver).toSelf();
myContainer.bind<CategoryResolver>(CategoryResolver).toSelf();
myContainer.bind<HeadquarterResolver>(HeadquarterResolver).toSelf();
myContainer.bind<ProductCategoryResolver>(ProductCategoryResolver).toSelf();
myContainer.bind<ProductResolver>(ProductResolver).toSelf();
myContainer.bind<RoadTypeResolver>(RoadTypeResolver).toSelf();
myContainer.bind<CustomerResolver>(CustomerResolver).toSelf();
myContainer
  .bind<BusinessCategoryGroupResolver>(BusinessCategoryGroupResolver)
  .toSelf();
myContainer.bind<AuthResolver>(AuthResolver).toSelf();
myContainer.bind<PingResolver>(PingResolver).toSelf();
myContainer
  .bind<SignupBusinessOwnerResolver>(SignupBusinessOwnerResolver)
  .toSelf();

/* Roles */
myContainer.bind<RoleRepository>(TYPES.RoleRepository).to(RoleMongoRepository);
myContainer.bind<CreateRole>(CreateRole).to(CreateRole).inSingletonScope();
myContainer.bind<GetRoles>(GetRoles).to(GetRoles).inSingletonScope();

/* Users */
myContainer.bind<UserRepository>(TYPES.UserRepository).to(UserMongoRepository);
myContainer.bind<CreateUser>(CreateUser).to(CreateUser).inSingletonScope();
myContainer.bind<GetUser>(GetUser).to(GetUser).inSingletonScope();

/* Business Categories */
myContainer
  .bind<BusinessCategoryRepository>(TYPES.BusinessCategoryRepository)
  .to(BusinessCategoryMongoRepository);

myContainer
  .bind<CreateBusinessCategory>(CreateBusinessCategory)
  .to(CreateBusinessCategory)
  .inSingletonScope();

myContainer
  .bind<GetBusinessCategories>(GetBusinessCategories)
  .to(GetBusinessCategories)
  .inSingletonScope();

myContainer
  .bind<UpdateBusinessCategoryImage>(UpdateBusinessCategoryImage)
  .to(UpdateBusinessCategoryImage)
  .inSingletonScope();

/* States */
myContainer
  .bind<StateRepository>(TYPES.StateRepository)
  .to(StateMongoRepository);

myContainer.bind<GetStates>(GetStates).to(GetStates).inSingletonScope();

/* Cities */
myContainer.bind<CityRepository>(TYPES.CityRepository).to(CityMongoRepository);
myContainer.bind<CreateCity>(CreateCity).to(CreateCity).inSingletonScope();
myContainer.bind<GetCities>(GetCities).to(GetCities).inSingletonScope();

/* Businness */
myContainer
  .bind<BusinessRepository>(TYPES.BusinessRepository)
  .to(BusinessMongoRepository);
myContainer
  .bind<CreateBusiness>(CreateBusiness)
  .to(CreateBusiness)
  .inSingletonScope();
myContainer.bind<GetBusiness>(GetBusiness).to(GetBusiness).inSingletonScope();

/* Subcategories */
myContainer
  .bind<SubcategoryRepository>(TYPES.SubcategoryRepository)
  .to(SubcategoryMongoRepository);
myContainer
  .bind<CreateSubcategory>(CreateSubcategory)
  .to(CreateSubcategory)
  .inSingletonScope();
myContainer
  .bind<GetSubcategories>(GetSubcategories)
  .to(GetSubcategories)
  .inSingletonScope();
myContainer
  .bind<UpdateSubcategoryImage>(UpdateSubcategoryImage)
  .to(UpdateSubcategoryImage)
  .inSingletonScope();

/* Categories */
myContainer
  .bind<CategoryRepository>(TYPES.CategoryRepository)
  .to(CategoryMongoRepository);
myContainer
  .bind<CreateCategory>(CreateCategory)
  .to(CreateCategory)
  .inSingletonScope();
myContainer
  .bind<GetCategories>(GetCategories)
  .to(GetCategories)
  .inSingletonScope();
myContainer
  .bind<AssociateCategoriesToBusiness>(AssociateCategoriesToBusiness)
  .to(AssociateCategoriesToBusiness)
  .inSingletonScope();
myContainer
  .bind<UpdateCategoryImage>(UpdateCategoryImage)
  .to(UpdateCategoryImage)
  .inSingletonScope();

/* Headquarters */
myContainer
  .bind<HeadquarterRepository>(TYPES.HeadquarterRepository)
  .to(HeadquarterMongoRepository);
myContainer
  .bind<CreateHeadquarter>(CreateHeadquarter)
  .to(CreateHeadquarter)
  .inSingletonScope();
myContainer
  .bind<GetHeadquarters>(GetHeadquarters)
  .to(GetHeadquarters)
  .inSingletonScope();
myContainer
  .bind<GetHeadquartersWithProductsByCriteria>(
    GetHeadquartersWithProductsByCriteria
  )
  .to(GetHeadquartersWithProductsByCriteria)
  .inSingletonScope();
myContainer
  .bind<GetHeadquartersWithProductsBySubcategory>(
    GetHeadquartersWithProductsBySubcategory
  )
  .to(GetHeadquartersWithProductsBySubcategory)
  .inSingletonScope();

/* Product Categories */
myContainer
  .bind<ProductCategoryRepository>(TYPES.ProductCategoryRepository)
  .to(ProductCategoryMongoRepository);
myContainer
  .bind<CreateProductCategory>(CreateProductCategory)
  .to(CreateProductCategory)
  .inSingletonScope();
myContainer
  .bind<GetProductCategories>(GetProductCategories)
  .to(GetProductCategories)
  .inSingletonScope();

/* Products */
myContainer
  .bind<ProductRepository>(TYPES.ProductRepository)
  .to(ProductMongoRepository);
myContainer
  .bind<CreateProduct>(CreateProduct)
  .to(CreateProduct)
  .inSingletonScope();
myContainer
  .bind<GetProductsByHeadquarter>(GetProductsByHeadquarter)
  .to(GetProductsByHeadquarter)
  .inSingletonScope();

/* Blob */
myContainer.bind<BlobRepository>(TYPES.BlobRepository).to(BlobMongoRepository);
myContainer.bind<CreateBlob>(CreateBlob).to(CreateBlob).inSingletonScope();
myContainer.bind<GetBlob>(GetBlob).to(GetBlob).inSingletonScope();

/* Road Types */
myContainer
  .bind<RoadTypeRepository>(TYPES.RoadTypeRepository)
  .to(RoadTypeMongoRepository);
myContainer
  .bind<GetRoadTypes>(GetRoadTypes)
  .to(GetRoadTypes)
  .inSingletonScope();

/* Customer */
myContainer
  .bind<CustomerRepository>(TYPES.CustomerRepository)
  .to(CustomerMongoRepository);
myContainer
  .bind<CreateCustomer>(CreateCustomer)
  .to(CreateCustomer)
  .inSingletonScope();

/* Subcategories */
myContainer
  .bind<BusinessCategoryGroupRepository>(TYPES.BusinessCategoryGroupRepository)
  .to(BusinessCategoryGroupMongoRepository);
myContainer
  .bind<CreateBusinessCategoryGroup>(CreateBusinessCategoryGroup)
  .to(CreateBusinessCategoryGroup)
  .inSingletonScope();
myContainer
  .bind<GetBusinessCategoriesGroup>(GetBusinessCategoriesGroup)
  .to(GetBusinessCategoriesGroup)
  .inSingletonScope();
myContainer
  .bind<UpdateBusinessCategoryGroupImage>(UpdateBusinessCategoryGroupImage)
  .to(UpdateBusinessCategoryGroupImage)
  .inSingletonScope();

/* Auth */
myContainer
  .bind<AuthenticateUser>(AuthenticateUser)
  .to(AuthenticateUser)
  .inSingletonScope();

/* Business Owner */
myContainer
  .bind<RegisterBusinessOwner>(RegisterBusinessOwner)
  .to(RegisterBusinessOwner)
  .inSingletonScope();

export default myContainer;
