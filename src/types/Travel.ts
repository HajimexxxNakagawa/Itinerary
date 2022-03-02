import { TDay } from "@/types/TDay"

export type Travel = {
  title: string
  tDays: TDay[]
}

export interface TravelProps {
  travel: Travel
}

export interface TravelListProps {
  travels: Travel[]
}
