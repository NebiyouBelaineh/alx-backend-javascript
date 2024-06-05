/// <reference path="crud.d.ts"
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

let row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow();
const updateRow: RowElement =  {firstName: "Guillaume", lastName: "Salva", age: 23 };

CRUD.updateRow(newRowID, updateRow);

CRUD.deleteRow(newRowID);