import { TimeStampsAndId } from "@/types/common";

export interface Address extends TimeStampsAndId {
  company: number;
  country: string;
  city: string;
  street: string | null;
  houseNumber: string | null;
  apartmentNumber: string | null;
  postalCode: string | null;
}

export interface EditAddress {
  country: string;
  city: string;
  street: string | null;
  houseNumber: string | null;
  apartmentNumber: string | null;
  postalCode: string | null;
}
