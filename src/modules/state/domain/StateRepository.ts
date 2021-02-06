import State from "./State";

export default interface StateRepository {
  getList(): Promise<State[]>;
}
