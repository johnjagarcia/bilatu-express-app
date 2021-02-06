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

import { CategoryResolver } from "../interfaces/resolvers/category-resolver";
import CategoryRepository from "../modules/category/domain/CategoryRepository";
import CategoryMongoRepository from "../modules/category/infra/CategoryMongoRepository";
import CreateCategory from "../modules/category/app/create-category";
import GetCategories from "../modules/category/app/get-categories";
import AssociateCategoriesToBusiness from "../modules/bussiness/app/associate-categories-to-business";

import { HeadquarterResolver } from "../interfaces/resolvers/headquarter-resolver";
import HeadquarterRepository from "../modules/headquarter/domain/HeadquarterRepository";
import HeadquarterMongoRepository from "../modules/headquarter/infra/HeadquarterMongoRepository";
import CreateHeadquarter from "../modules/headquarter/app/create-headquarter";
import GetHeadquarters from "../modules/headquarter/app/get-headquarter";

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

/* Product Categories */
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

export default myContainer;
