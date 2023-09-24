import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@/styles/table.styles";

import { useTableSortCustom } from "../hooks/use-table-sort-custom";
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

export const UserTableCustom = () => {
  const { data, getColumnProps } = useTableSortCustom<UserDataA>(initialData);

  const logSort = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
  ) => {
    console.log("logSort", event);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHeaderCell
              key={index}
              id={column.field}
              {...getColumnProps({
                onClick: logSort,
              })}
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
