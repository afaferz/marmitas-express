// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace TypescriptUtils {
    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
    type RemovePartial<T> = { [P in keyof T]-?: T[P] };
    type RemovePartialOne<T, K extends keyof T> = { [P in keyof T]-?: T[K] };
    type Partial<T> = { [P in keyof T]?: T[P] | undefined };
    type PartialOne<T, K extends keyof T> = { [P in keyof T]?: T[K] };
    type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
    type PartialAll<T> = { [P in keyof T]?: T[P] };
    type Normalize<T> = T extends (...args: infer A) => infer R
        ? (...args: Normalize<A>) => Normalize<R>
        : [T] extends [unknown]
        ? { [K in keyof T]: Normalize<T[K]> }
        : never;
    type InsensitiveCase<T extends string> = string extends T
        ? string
        : T extends `${infer F1}${infer F2}${infer R}`
        ? `${Uppercase<F1> | Lowercase<F1>}${
              | Uppercase<F2>
              | Lowercase<F2>}${InsensitiveCase<R>}`
        : T extends `${infer F}${infer R}`
        ? `${Uppercase<F> | Lowercase<F>}${InsensitiveCase<R>}`
        : "";
    type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
        T
    >() => T extends Y ? 1 : 2
        ? true
        : false;
    type Includes<T extends readonly unknown[], U> = T["length"] extends 0
        ? false
        : T extends [infer V, ...infer X]
        ? Equals<V, U> extends true
            ? true
            : Includes<X, U>
        : never;
    type Conditional<T extends boolean, U, V> = T extends true ? U : V;
    type Concat<T extends readonly unknown[]> = [...T];
    type Constructor<T> = { new (...args: unknown[]): T };
}
