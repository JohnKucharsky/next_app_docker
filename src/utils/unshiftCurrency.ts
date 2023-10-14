import { type Currency } from '@/types/currency'

export const unshiftCurrency = (_cur: Currency[], filterArr: string[]) => {
  const cur = [..._cur]
  const filteredArr = cur.filter((c) => {
    return filterArr.filter((second) => second === c.nameCode).length === 0
  })
  filterArr.forEach((item) => {
    const curr = cur.find((c) => c.nameCode === item)
    if (curr) {
      filteredArr.unshift(curr)
    }
  })
  return filteredArr
}
