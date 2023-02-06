import hyphenateWords from './hyphenateWords'
import { merch } from "../data/merch"

function findMerch (str) {
  const title = str.replace('/merch/', '')

  const foundMerch = merch.find(merch => {
    const thisTitle = hyphenateWords(merch.title)
    return thisTitle === title
  })
  
  return foundMerch
}

export default findMerch