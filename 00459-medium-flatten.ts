// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]

type cases2 = [
  Expect<Equal<Flatten1<[]>, []>>,
  Expect<Equal<Flatten1<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten1<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten1<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten1<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]


// ============= Your Code Here =============
type Flatten<T extends any[]> = T extends [infer F, ...infer Rest] ? F extends any[] ? [...Flatten<F>, ...Flatten<Rest>] : [F, ...Flatten<Rest>] : T

type Flatten1<Arr extends any[], Res extends any[] = []> = Arr extends [infer First, ...infer Rest]
  ? First extends any[]
    ? // First 仍然是数组 -- 展开一层并继续
      Flatten1<[...First, ...Rest], Res>
    : // First 不是数组 -- 更新结果
      Flatten1<Rest, [...Res, First]>
  : Res