// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
]


// ============= Your Code Here =============
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
  [K in keyof T]:  MyAwaited<T[K]> 
}>

/**
 * TS 4.0 Variadic Tuple Types
 * 可变元组类型
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
 */

