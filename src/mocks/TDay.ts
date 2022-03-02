import { TDay } from "@/types/TDay"

import { mockTEventList, mockTEventList1, mockTEventList2 } from "./TEvent"

export const mockTDay: TDay = {
  date: new Date("26 January 2022 UTC"),
  tEvents: mockTEventList,
}

export const mockTDay1: TDay = {
  date: new Date("27 January 2022 UTC"),
  tEvents: mockTEventList1,
}

export const mockTDay2: TDay = {
  date: new Date("28 January 2022 UTC"),
  tEvents: mockTEventList2,
}

export const mockTDayList = [mockTDay, mockTDay1, mockTDay2]
