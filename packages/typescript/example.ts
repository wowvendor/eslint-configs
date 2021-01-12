export enum SomeEnum {
  zero = 0,
  one = 1,
}

export type SomeDiff<T, U> = T extends U ? never : T;
export type SomeProp<D, K = undefined> = K extends string ? { [key in K]: D } : never;

export interface SomeStatus {
  isLoaded: boolean;
  isFetched: boolean;
  error: string | null;
}

interface SomeExtendedStatus<D> extends SomeStatus {
  data: D;
  name: string[];
  meta: {
    time?: {
      min: string;
      hour: string;
    };
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SomeType = SomeExtendedStatus<unknown> & { year: any };

declare const someExtendedStatus: SomeExtendedStatus<unknown>;

export const minutes = someExtendedStatus.meta.time?.min;
