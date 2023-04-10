import dayjs from "dayjs"

interface Props {
  day: number
}

export const DayCard: React.FC<Props> = ({ day }) => {
  const todaysDate = dayjs()
  const dateOffsetValue = day - 50
  const offsetTileDate = todaysDate.add(dateOffsetValue, "day")
  const prettyDate = offsetTileDate.format("MMMM D, YYYY")

  return (
    <div className="w-96 whitespace-nowrap overflow-clip place-content-center rounded-md border border-yellow-600 bg-red-900 p-6 text-2xl font-semibold text-yellow-50">
      {prettyDate}: __ AM __ PM
    </div>
  )
}
