import { TDay } from "@/types/TDay"

import { mockTEventList } from "./TEvent"

export const mockTDay: TDay = {
  date: new Date("26 January 2022 UTC"),
  tEvents: mockTEventList,
}

export const mockTDayList = [mockTDay, mockTDay, mockTDay]
