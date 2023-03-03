// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]


// ============= Your Code Here =============
type Replace<S extends string, From extends string, To extends string> = S extends `${infer L}${From extends '' ? never : From}${infer R}` ? `${L}${To}${R}`: S


type S = ''

type A = 'esdfoo' extends `${infer L}${S}${infer R}` ? L : never 

/**
 * 字符串模式匹配
 * 
 * S为空字符串可以匹配任意字符串，匹配如上模式时，会尽量让L先匹配，然后匹配S。
 */