import { useEffect, useState } from "react"
import { createContainer } from "unstated-next"

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [windowWidth])

  const isSmall = windowWidth < 500

  return { windowWidth, isSmall }
}

export const WindowSize = createContainer(useWindowSize)
