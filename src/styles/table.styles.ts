import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #111111;
  cursor: pointer;
`;

export const TableHeaderCell = styled.th`
  border: 1px solid #444;
  padding: 8px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #333;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #444;
  padding: 8px;
  text-align: left;
`;
