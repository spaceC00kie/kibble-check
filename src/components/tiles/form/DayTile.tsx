interface Props {
  index: number
}

export const DayTile: React.FC<Props> = ({ index }) => {
  return (
    <div className="place-content-center rounded-md border border-yellow-600 bg-red-900 p-6 text-2xl font-semibold text-yellow-50">
      Date:___{index}___ AM__ PM__
    </div>
  )
}
