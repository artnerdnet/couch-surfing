export type TReview = {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
};

export type TReviewData = {
  count: number;
  latestReview: TReview;
};

export type TProperty = {
  title: string;
  images: string[];
  price: number;
  publicAddress: string;
  city: string;
  postcode: string;
  country: string;
  contactDetails: {
    name: string;
    address: string;
    phone: number;
    areaCode: number;
    email: string;
  };
  available: boolean;
  reviews: TReview[];
};

export type TGalleryImage = {
  original: string;
  alt: string;
  thumbnail?: string;
};

export type TUser = {
  user: {
    firstName: string;
    lastName: string;
  };
  isReturning: boolean;
};
