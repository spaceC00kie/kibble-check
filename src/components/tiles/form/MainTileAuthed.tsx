import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DayTile } from "./DayTile"

export const MainTileAuthed: React.FC = () => {
  const totalTiles = 47
  const visibleTiles = 7
  const allTiles = Array.from({ length: totalTiles }).map((_, index) => (
    <DayTile key={index} index={index} />
  ))
  const startIndex = Math.floor((totalTiles - visibleTiles) / 2)
  const endIndex = startIndex + visibleTiles

  const tiles = allTiles.slice(startIndex, endIndex)

  const [selectedTileIndex, setSelectedTileIndex] = useState(
    Math.floor(visibleTiles / 2),
  )

  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()

      if (event.deltaY < 0) {
        // Scroll up
        setScrollValue(scrollValue + 1)
        console.log(scrollValue)
      } else {
        // Scroll down
        setScrollValue(scrollValue - 1)
        console.log(scrollValue)
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
        setScrollValue(scrollValue + 1)
        console.log(scrollValue)
      } else if (
        event.key === "ArrowDown" ||
        event.key === "s" ||
        event.key === "S" ||
        event.key === "PageDown"
      ) {
        // Scroll down
        setScrollValue(scrollValue - 1)
        console.log(scrollValue)
      }
    }

    const gridContainer = document.getElementById("grid-container")
    if (gridContainer) {
      gridContainer.addEventListener("wheel", handleWheel)
      gridContainer.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      if (gridContainer) {
        gridContainer.removeEventListener("wheel", handleWheel)
        gridContainer.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [scrollValue])

  return (
    <div className="flex h-[36em] shrink-0 flex-col place-content-center overflow-hidden rounded-md border border-yellow-600 bg-red-900 bg-opacity-50 p-2 sm:flex-row">
      <div className="container grid h-full place-content-center overflow-y-auto p-2 sm:w-1/2">
        <div id="grid-container" className="relative h-full p-2" tabIndex={0}>
          <div className="-gap-2 grid h-full p-2">
            {tiles.map((tile, index) => {
              const distanceFromSelected = Math.abs(index - selectedTileIndex)
              const scale = 1 - distanceFromSelected / 8
              const opacity = 1 - distanceFromSelected / 4
              const zIndex = tiles.length - distanceFromSelected
              const translateYDirection = index < selectedTileIndex ? 1 : -1
              const translateY =
                distanceFromSelected *
                10 *
                translateYDirection *
                (distanceFromSelected * 1.3)
              const rotateZ = distanceFromSelected * 6

              return (
                <motion.div
                  layout
                  key={index}
                  className=""
                  style={{
                    transform: `scale(${scale}) translateY(${translateY}px) rotateZ(${rotateZ}deg)`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                >
                  {tile}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
