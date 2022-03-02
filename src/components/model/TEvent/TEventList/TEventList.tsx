import { VFC } from "react"

import { TEventListProps } from "@/types/TEvent"

import { TEvent } from "@/components/model/TEvent/TEvent"

import { Spacer } from "@/components/ui/Spacer"

export const TEventList: VFC<TEventListProps> = ({ tEvents }) => {
  return (
    <div>
      {tEvents.map((tEvent) => (
        <>
          <TEvent tEvent={tEvent} key={tEvent.startAt.toString()} />
          <Spacer size={8} />
        </>
      ))}
    </div>
  )
}
