import { VFC } from "react"

import { TEventProps } from "@/types/TEvent"

import { LinkCard } from "@/components/model/TEvent/TEvent/LinkCard"

import { Spacer } from "@/components/ui/Spacer"

export const TEvent: VFC<TEventProps> = ({ tEvent }) => {
  const { title, startAt, url } = tEvent

  // 「時間：分」という表示に直す ex.19:05
  const hour = startAt.getHours()
  const minute =
    startAt.getMinutes() > 9 ? startAt.getMinutes() : "0" + startAt.getMinutes()
  const time = `${hour}:${minute}`

  return (
    <div className="flex flex-col">
      <div className="flex items-center px-2 text-xl font-bold">
        <time>{time}</time>
        <Spacer size={4} />
        <span className="truncate">{title}</span>
      </div>
      <Spacer size={2} />
      <LinkCard url={url} />
    </div>
  )
}
