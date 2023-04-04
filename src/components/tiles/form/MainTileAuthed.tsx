import React, { useState } from "react"
import {
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  motion,
} from "framer-motion"
import { DayTile } from "./DayTile"
import { useTileNavigation } from "./UseTileNavigation"

export const MainTileAuthed: React.FC = () => {
  const [selectedTileIndex, setSelectedTileIndex] = useState(50)

  useTileNavigation(selectedTileIndex, setSelectedTileIndex)

  const animate = (
    index: number,
    selectedTileIndex: number,
  ):
    | boolean
    | VariantLabels
    | AnimationControls
    | TargetAndTransition
    | undefined => {
    const distanceFromSelected = Math.abs(index - selectedTileIndex)
    const scale = 1 - distanceFromSelected / 8
    const opacity = 1 - distanceFromSelected / 4
    const visibleTiles = 9
    const zIndex = visibleTiles - Math.abs(index - selectedTileIndex)
    const translateYDirection = index < selectedTileIndex ? 1 : -1
    const y =
      distanceFromSelected *
      10 *
      translateYDirection *
      (distanceFromSelected * 1.3)
    const rotate = distanceFromSelected * 6

    return {
      scale,
      y,
      rotate,
      opacity,
      zIndex,
    }
  }

  const allTiles = Array.from({ length: 100 }).map((_, index) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={animate(index, selectedTileIndex)}
      key={index}
      className=""
      transition={{ type: "spring", bounce: 1, mass: 0.3, restDelta: 0 }}
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
