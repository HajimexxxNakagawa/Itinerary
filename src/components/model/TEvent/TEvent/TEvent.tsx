import { VFC } from "react"

import { TEventProps } from "@/types/TEvent"

export const TEvent: VFC<TEventProps> = ({ tEvent }) => {
  const { title, startAt, url } = tEvent

  // 「時間：分」という表示に直す ex.19:05
  const hour = startAt.getHours()
  const minute =
    startAt.getMinutes() > 9 ? startAt.getMinutes() : "0" + startAt.getMinutes()
  const time = `${hour}:${minute}`

  return (
    <div>
      <div>
        <time>{time}</time>
        <span>{title}</span>
      </div>
      <p>{url}</p>
    </div>
  )
}
