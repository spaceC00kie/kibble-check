import { useEffect } from "react"

export const useTileNavigation = (
  selectedTileIndex: number,
  setSelectedTileIndex: (index: number) => void,
) => {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        // Scroll up
        setSelectedTileIndex(selectedTileIndex + 1)
        console.log(selectedTileIndex)
      } else {
        // Scroll down
        setSelectedTileIndex(selectedTileIndex - 1)
        console.log(selectedTileIndex)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "ArrowUp" ||
        event.key === "w" ||
        event.key === "W" ||
        event.key === "PageUp"
      ) {
        // Scroll up
        setSelectedTileIndex(selectedTileIndex + 1)
        console.log(selectedTileIndex)
      } else if (
        event.key === "ArrowDown" ||
        event.key === "s" ||
        event.key === "S" ||
        event.key === "PageDown"
      ) {
        // Scroll down
        setSelectedTileIndex(selectedTileIndex - 1)
        console.log(selectedTileIndex)
      }
    }

    window.addEventListener("wheel", handleWheel)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedTileIndex])
}
