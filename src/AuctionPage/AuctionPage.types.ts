export interface AuctionPageProps {
  auction: Auction
}

export interface Auction {
  name: string
  startTime: number
  members: IMember[]
}

export interface IMember {
  isOnline: boolean
  name: string
  project: IProject
}

export interface IProject {
  quality: boolean
  timingDays: number
  guaranteeMonths: number
  firstPayment: number
  price: {
    min: number
    max: number
    step: number
  }
}