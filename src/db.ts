import {Auction} from "./AuctionPage/AuctionPage.types";

const date = Date.UTC(2023, 0, 5, 10, 0, 0);

const templateName = 'Тестовые торги на аппарат ЛОТОС №22334234';
const templateStartTime = date;

export const AuctionTemplate: Auction = {
  name: templateName,
  startTime: templateStartTime,
  members: [
    {
      isOnline: true,
      name: 'ООО рога и копыта',
      project: {
        quality: true,
        timingDays: 23,
        guaranteeMonths: 36,
        firstPayment: 56,
        price: {
          max: 3600000,
          min: 2400000,
          step: 250000,
        }
      }
    },
    {
      isOnline: false,
      name: 'ООО рога но не копыта',
      project: {
        quality: false,
        timingDays: 43,
        guaranteeMonths: 60,
        firstPayment: 99,
        price: {
          max: 3900000,
          min: 2100000,
          step: 250000,
        }
      }
    },
    {
      isOnline: true,
      name: 'ООО рога и только копыта',
      project: {
        quality: false,
        timingDays: 3,
        guaranteeMonths: 0,
        firstPayment: 5,
        price: {
          max: 3100000,
          min: 2600000,
          step: 250000,
        }
      }
    },

  ],
}
