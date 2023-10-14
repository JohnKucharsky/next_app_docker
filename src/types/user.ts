import { type TimeStampsAndId } from '@/types/common'

export interface User extends TimeStampsAndId {
  login: string
  name: string
  lastName: string
  middleName: string
  email: string
  languageCode: string
  status: activeBlockedType
  password: string
  phone: string
  lastVisit: string
  createByUserId: string
  role: number
  company: number | null
  rolies: {
    name: string
  }
}

export type activeBlockedType = 'active' | 'blocked'

export interface EditUser extends RegisterUser {
  status: activeBlockedType | null
  role: number
}

export interface RegisterUser {
  email: string
  password: string
  login: string
  name: string
  lastName: string
  middleName: string | null
  phone: string | null
  languageCode: string | null
}
