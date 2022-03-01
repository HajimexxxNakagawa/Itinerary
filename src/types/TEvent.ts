export type TEvent = {
  title: string
  startAt: Date
  url: string
}
export interface TEventProps {
  tEvent: TEvent
}

export interface TEventListProps {
  tEvents: TEvent[]
}
