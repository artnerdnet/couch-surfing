import { IReview } from "./interfaces";

export type TReviewData = {
  count: number;
  latestReview: IReview;
};

export type TGalleryImage = {
  original: string;
  alt: string;
  thumbnail?: string;
};
