import { Checkbox, FormControlLabel } from "@mui/material"
import { green, yellow, red } from "@mui/material/colors"
import dayjs from "dayjs"
import { useState } from "react"

interface Props {
  day: number
  isSelected: boolean
}

export const DayCard: React.FC<Props> = ({ day, isSelected }) => {
  const todaysDate = dayjs()
  const dateOffsetValue = day - 50
  const offsetTileDate = todaysDate.add(dateOffsetValue, "day")
  const prettyDate = offsetTileDate.format("MMMM D, YYYY")

  const [am, setAm] = useState(false)
  const [pm, setPm] = useState(false)

  return (
    <div className="flex w-96 justify-between overflow-clip whitespace-nowrap rounded-md border border-yellow-600 bg-red-900 p-6 text-2xl font-semibold text-yellow-50">
      <div>{prettyDate}</div>
      <div>
        <FormControlLabel
          checked={am}
          control={
            <Checkbox
              disabled={!isSelected}
              size="medium"
              sx={{
                color: yellow[800],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
          }
          label="AM"
        />
        <FormControlLabel
          checked={pm}
          control={
            <Checkbox
              disabled={!isSelected}
              size="medium"
              sx={{
                color: red[600],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
          }
          label="PM"
        />
      </div>
    </div>
  )
}
