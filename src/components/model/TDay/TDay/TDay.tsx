import { VFC } from "react"

import { TDayProps } from "@/types/TDay"

import { TEventList } from "@/components/model/TEvent/TEventList"

const DAY_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export const TDay: VFC<TDayProps> = ({ tDay }) => {
  const { date, tEvents } = tDay

  // 「月/日 曜日（英語）」という表示に直す ex. 2/26 Sat
  const dayOfWeekIndex = date.getDay() // 曜日(数値)
  const dayOfWeekStr = DAY_OF_WEEK[dayOfWeekIndex]
  const day = `${date.getMonth() + 1}/${date.getDate()} ${dayOfWeekStr}`

  return (
    <div className="max-w-3xl">
      <h2 className="py-8 text-2xl text-center">{day}</h2>
      <TEventList tEvents={tEvents} />
    </div>
  )
}
