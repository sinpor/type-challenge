// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T;


/**
 * refrence https://juejin.cn/book/7047524421182947366/section/7048282387825819687
 * 
 * 条件类型的分布性
 * 
 * 当联合类型作为条件类型的左侧，会将该类型的每个类型执行条件类型，然后合并成新的联合类型。
 */