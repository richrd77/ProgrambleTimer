import { TableColType } from './enums/tableColumnTypes.enum';

export class TableInputs<TableType> {
  Items: Array<TableType>;
  Keys: Array<TableKey>;
}

export class TableKey {
  Key: string;
  DisplayText: string;
  Type: TableColType;
  CanDelete: boolean;
  constructor(key: string, text: string, colType: TableColType = null, canDelete: boolean = false) {
    this.Key = key;
    this.DisplayText = text;
    if (colType === null) {
      this.Type = TableColType.Normal;
    } else {
      this.Type = colType;
    }
    this.CanDelete = canDelete;
  }
}
