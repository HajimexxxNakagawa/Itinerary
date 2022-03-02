import { Travel } from "@/types/Travel"

import { mockTDayList } from "./TDay"

export const mockTravel: Travel = {
  title: "よっしゃ、九州に行こう！",
  tDays: mockTDayList,
}

export const mockTravelList = [mockTravel, mockTravel, mockTravel]
