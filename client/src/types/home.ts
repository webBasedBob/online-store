export interface filterData {
  name: string;
  quantity: number;
  isChecked: boolean;
}
export interface filter {
  name: string;
  data: filterData[];
}
