import { TEvent } from "@/types/TEvent"

export type TDay = {
  date: Date
  tEvents: TEvent[]
}

export interface TDayProps {
  tDay: TDay
}

export interface TDayListProps {
  tDays: TDay[]
}
