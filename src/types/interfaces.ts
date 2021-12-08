import { EUserPermissions } from "./enums";

export interface IReview {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}

export interface IContactDetails {
  name: string;
  address: string;
  phone: number;
  areaCode: number;
  email: string;
}
export interface IProperty {
  title: string;
  images: string[];
  price: number;
  publicAddress: string;
  city: string;
  postcode: string;
  country: string;
  contactDetails: IContactDetails;
  available: boolean;
  reviews: IReview[];
}

export interface IUser {
  user: {
    firstName: string;
    lastName: string;
  };
  isReturning: boolean;
  permissions: EUserPermissions.ADMIN | EUserPermissions.READ_ONLY;
}
