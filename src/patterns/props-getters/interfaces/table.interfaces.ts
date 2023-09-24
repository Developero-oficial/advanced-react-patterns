export interface Column<T> {
  field: keyof T;
  name?: string;
}
