import { IReview } from "../types/interfaces";
import { TReviewData } from "../types/types";

export const getReviewsData = (reviews: IReview[]): TReviewData => {
  const latestReview = getLatestReview(reviews);
  return {
    count: reviews.length,
    latestReview,
  };
};

export const getLatestReview = (reviews: IReview[]): IReview => {
  return reviews.reduce((a, b) => (a.date > b.date ? a : b));
};

export const calculateAverage = (numbers: number[]): number => {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = Math.round((sum / numbers.length || 0) * 100) / 100;
  return average;
};

export const getRandomItemsFromArray = (
  arr: string[] | number[],
  count: number
): string[] | number[] => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
