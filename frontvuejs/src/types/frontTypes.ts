import { OneEvent, Band, Member } from "./backTypes";
import { StatementType } from "./enumTypes";

export interface Example {
  accountId: string;
  tabName: string;
  trans: Band[];
  type: StatementType;
}
