"use client"

import {getBigJsonValue} from './big'

const LazyComponents = () => {
  const str = getBigJsonValue()
  return <p>{str}</p>
}
export default LazyComponents