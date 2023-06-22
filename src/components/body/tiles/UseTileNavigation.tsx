import { useEffect, useState } from "react"

export const useTileNavigation = () => {
  const tileLength = 10000
  const [selectedTileIndex, setSelectedTileIndex] = useState(tileLength / 2)
  const [startY, setStartY] = useState<number>(0)
  const resetToToday = () => {
    setSelectedTileIndex(tileLength / 2)
  }

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        // Scroll down
        setSelectedTileIndex(selectedTileIndex - 1)
      } else {
        // Scroll up
        setSelectedTileIndex(selectedTileIndex + 1)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "ArrowUp" ||
        event.key === "w" ||
        event.key === "W" ||
        event.key === "PageUp"
      ) {
        // Scroll down
        setSelectedTileIndex(selectedTileIndex - 1)
      } else if (
        event.key === "ArrowDown" ||
        event.key === "s" ||
        event.key === "S" ||
        event.key === "PageDown"
      ) {
        // Scroll up
        setSelectedTileIndex(selectedTileIndex + 1)
      }
    }

    const handleTouchStart = (event: TouchEvent) => {
      setStartY(event.touches[0].clientY)
    }

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0].clientY
      const threshold = 10

      if (currentY - startY > threshold) {
        // Scroll down
        setStartY(currentY)
        setSelectedTileIndex(selectedTileIndex - 1)
      } else if (startY - currentY > threshold) {
        // Scroll up
        setStartY(currentY)
        setSelectedTileIndex(selectedTileIndex + 1)
      }
    }

    window.addEventListener("wheel", handleWheel)
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [selectedTileIndex, startY])

  return {
    selectedTileIndex,
    tileLength,
    resetToToday,
  }
}
