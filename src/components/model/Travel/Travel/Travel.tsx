import { useCallback, useState, VFC } from "react"

import { TravelProps } from "@/types/Travel"

import { TDay } from "@/components/model/TDay/TDay"

import { Spacer } from "@/components/ui/Spacer"

export const Travel: VFC<TravelProps> = ({ travel }) => {
  const { title, tDays } = travel
  const [n, setN] = useState(0)

  const isFirstDay = n === 0
  const isLastDay = n === tDays.length - 1
  const leftButtonProp = isFirstDay ? "text-gray-200" : "black"
  const rightButtonProp = isLastDay ? "text-gray-200" : "black"

  const toNextDay = useCallback(() => {
    setN((count) => count + 1)
  }, [])

  const toPrevDay = useCallback(() => {
    setN((count) => count - 1)
  }, [])

  return (
    <>
      <div className="overflow-auto px-2 h-screen bg-yellow-400">
        <main className="z-0 p-4 py-8 mx-auto max-w-screen-md min-h-screen bg-white border-x-8 border-black">
          <h1 className="pt-4 text-2xl font-bold text-center md:text-5xl">
            {title}
          </h1>
          <TDay tDay={tDays[n]} />
          <Spacer size={12} />
        </main>
      </div>
      <footer className="flex fixed bottom-0 left-0 z-10 justify-center p-4 w-full bg-white drop-shadow-2xl">
        <div className="flex justify-around w-full max-w-screen-md text-2xl">
          <button
            onClick={toPrevDay}
            disabled={isFirstDay}
            className={`${leftButtonProp}`}
          >
            {"＜"}
          </button>
          <span>Day{n + 1}</span>
          <button
            onClick={toNextDay}
            disabled={isLastDay}
            className={`${rightButtonProp}`}
          >
            {"＞"}
          </button>
        </div>
      </footer>
    </>
  )
}
