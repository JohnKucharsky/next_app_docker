export const slicePhoneNumber = (phone?: string) => {
  let slicedPhone = phone
  if (!phone) return

  if (phone.includes('+7')) {
    slicedPhone = phone.slice(2)
  }
  if (phone[0] === '8') {
    slicedPhone = phone.slice(1)
  }
  return slicedPhone
}
