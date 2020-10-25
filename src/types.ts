export interface IItem {
  key: string;
  displayName: string;
}

export interface ISortEvent {
  oldIndex: number;
  newIndex: number;
}

export interface ISortableListParams {
  items: IItem[];
  onSortEnd: (evt: ISortEvent) => void;
}
