import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DayTile } from "./DayTile"

export const MainTileAuthed: React.FC = () => {
  const visibleTiles = 9

  const [selectedTileIndex, setSelectedTileIndex] = useState(50)

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()

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
      event.preventDefault()

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

  const calculateStyleValues = (index: number, selectedTileIndex: number) => {
    const distanceFromSelected = Math.abs(index - selectedTileIndex)
    const scale = 1 - distanceFromSelected / 8
    const opacity = 1 - distanceFromSelected / 4
    const zIndex = visibleTiles - Math.abs(index - selectedTileIndex)
    const translateYDirection = index < selectedTileIndex ? 1 : -1
    const translateY =
      distanceFromSelected *
      10 *
      translateYDirection *
      (distanceFromSelected * 1.3)
    const rotateZ = distanceFromSelected * 6

    return {
      scale: scale,
      y: translateY,
      rotate: rotateZ,
      opacity: opacity,
      zIndex: zIndex,
    }
  }

  const allTiles = Array.from({ length: 100 }).map((_, index) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={calculateStyleValues(index, selectedTileIndex)}
      key={index}
      className=""
      transition={{ type: "spring", mass: 0.3 }}
    >
      <DayTile key={index} day={index} />
    </motion.div>
  ))

  return (
    <div className="flex h-[36em] shrink-0 flex-col items-center justify-center overflow-hidden rounded-md border border-yellow-600 bg-red-900 bg-opacity-50 p-2">
      {allTiles.slice(selectedTileIndex - 4, selectedTileIndex + 5)}
    </div>
  )
}
