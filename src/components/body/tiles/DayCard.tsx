interface Props {
  day: number
}

export const DayCard: React.FC<Props> = ({ day }) => {
  return (
    <div className="w-96 place-content-center rounded-md border border-yellow-600 bg-red-900 p-6 text-2xl font-semibold text-yellow-50">
      Date:___{day}___ AM__ PM__
    </div>
  )
}
