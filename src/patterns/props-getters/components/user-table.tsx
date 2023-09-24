import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@/styles/table.styles";

import { useTableSort } from "../hooks/use-table-sort";
import { Column } from "../interfaces/table.interfaces";

interface UserDataA {
  name: string;
  age: number;
}

const columns: Column<UserDataA>[] = [
  { field: "name", name: "Name" },
  { field: "age", name: "Age" },
];

const initialData: UserDataA[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Cara", age: 22 },
  { name: "John", age: 33 },
];

export const UserTable = () => {
  const { data, handleSort } = useTableSort<UserDataA>(initialData);

  const myHandleSortCustom = (
    event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>,
    handleSort: (
      event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>,
    ) => void,
  ) => {
    const { id } = event.currentTarget;
    console.log("myHandleSortCustom", id);
    handleSort(event);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHeaderCell
              key={index}
              id={column.field}
              onClick={(event) => myHandleSortCustom(event, handleSort)}
            >
              {column.name}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
