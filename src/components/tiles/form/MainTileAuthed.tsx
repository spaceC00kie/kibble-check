import { DayTile } from "./DayTile"

export const MainTileAuthed = () => {
  const tiles = Array.from({ length: 9 }).map((_, index) => (
    <DayTile key={index} />
  ))

  return (
    <div className="flex h-[36em] shrink-0 flex-col place-content-center gap-2 overflow-hidden rounded-md border border-yellow-600 bg-red-900 bg-opacity-50 p-2 sm:flex-row">
      <div className="container grid h-full place-content-center overflow-y-auto p-2 sm:w-1/2">
        <div className="grid h-full gap-2 p-2">{tiles}</div>
      </div>
    </div>
  )
}
