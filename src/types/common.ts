export interface TimeStampsAndId {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type ElementType<T extends readonly unknown[]> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;
