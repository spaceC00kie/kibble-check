import { createContainer } from "unstated-next"
import dayjs from "dayjs"
import { useState } from "react"

const useDate = () => {
  const [selectedTileDate, setSelectedTileDate] = useState(dayjs())

  return {
    selectedTileDate,
    setSelectedTileDate,
  }
}

export const Date = createContainer(useDate)
