import firstImage from "../assets/pexels-photo-265004.jpeg";
import secondImage from "../assets/pexels-photo-415687.jpeg";
import thirdImage from "../assets/pexels-photo-1918291.jpeg";
import forthImage from "../assets/pexels-photo-1918291.jpeg";
import fifthImage from "../assets/pexels-photo-275484.jpeg";
import seventhImage from "../assets/pexels-photo-1571468.jpeg";
import eighthImage from "../assets/pexels-photo-1743227.jpeg";

import Faker from "faker";
import { getRandomItemsFromArray } from "../utils/helpers";
import { EUserPermissions } from "../types/types";

export const you = {
  user: { firstName: Faker.name.firstName(), lastName: Faker.name.lastName() },
  isReturning: Math.random() < 0.5,
  permissions:
    Math.random() < 0.5 ? EUserPermissions.ADMIN : EUserPermissions.READ_ONLY,
};

const images = [
  firstImage,
  secondImage,
  thirdImage,
  forthImage,
  fifthImage,
  seventhImage,
  eighthImage,
];

export const propertiesList = [1, 2, 3, 4].map(() => ({
  title: Faker.lorem.sentence(4),
  images: getRandomItemsFromArray(images, 2) as string[],
  price: Number(Faker.commerce.price(10, 40)),
  publicAddress: Faker.address.streetName(),
  city: Faker.address.city(),
  postcode: Faker.address.zipCode(),
  country: Faker.address.country(),
  contactDetails: {
    name: Faker.name.firstName(),
    address: Faker.address.streetAddress(),
    phone: Number(Faker.phone.phoneNumber()),
    areaCode: Number(Faker.address.countryCode()),
    email: Faker.internet.email(),
  },
  reviews: [1, 2, 3].map(() => ({
    name: Faker.name.firstName(),
    stars: Math.floor(Math.random() * 5) + 1,
    loyaltyUser: Math.random() < 0.5,
    date: Faker.date.past().toString(),
  })),
  available: Math.random() < 0.5,
}));
