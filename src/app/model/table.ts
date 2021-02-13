import { TableColType } from './enums/tableColumnTypes.enum';

export class TableInputs<TableType> {
  Items: Array<TableType>;
  Keys: Array<TableKey>;
}

export class TableKey {
  Key: string;
  DisplayText: string;
  Type: TableColType;
  constructor(key: string, text: string, colType: TableColType = null) {
    this.Key = key;
    this.DisplayText = text;
    if (colType === null) {
      this.Type = TableColType.Normal;
    } else {
      this.Type = colType;
    }
  }
}
