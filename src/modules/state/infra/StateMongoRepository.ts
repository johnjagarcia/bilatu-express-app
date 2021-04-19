import { injectable } from "inversify";
import State from "../domain/State";
import StateRepository from "../domain/StateRepository";
import StateDocument from "../../shared/infra/orm/mongoose/schemas/State";

@injectable()
export default class StateMongoRepository implements StateRepository {
  async getList(): Promise<State[]> {
    return await StateDocument.find().sort("name");
  }
}
