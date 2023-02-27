// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
  Expect<Equal<Push<[], 2>, [2]>>,
  Expect<Equal<Push<[1], 2>, [1, 2]>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[1, 2]>, [2]>>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Unshift<[], 2>, [2]>>,
  Expect<Equal<Unshift<[1], 2>, [2, 1]>>,
]


// ============= Your Code Here =============
type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : T extends [] ? T : never

type Push<T extends any[], V = any> = [...T, V]

type Shift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : T extends [] ? T : never

type Unshift<T extends any[], V = any> = [V, ...T]