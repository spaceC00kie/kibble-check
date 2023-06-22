import {
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  motion,
} from "framer-motion"
import React, { useMemo } from "react"
import { DayCard } from "./DayCard"

interface Props {
  selectedTileIndex: number
  tileLength: number
}

export const Calendar: React.FC<Props> = ({
  selectedTileIndex,
  tileLength,
}) => {
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

  const visibleTiles = useMemo(() => {
    const start = Math.max(0, selectedTileIndex - 4)
    const end = Math.min(tileLength, selectedTileIndex + 5)
    return Array.from({ length: end - start }, (_, index) => index + start)
  }, [tileLength, selectedTileIndex])

  const tiles = visibleTiles.map((index) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={animate(index, selectedTileIndex)}
      key={index}
      className="flex h-24 w-2/3 min-w-[20rem] max-w-[24rem] shrink-0 items-center justify-between overflow-clip whitespace-nowrap rounded-md border border-yellow-600 bg-red-900 p-6 font-semibold text-stone-50"
      transition={{ type: "spring", bounce: 1, mass: 0.3, restDelta: 0 }}
    >
      <DayCard
        day={index}
        isSelected={selectedTileIndex === index}
        tileLength={tileLength}
      />
    </motion.div>
  ))

  return (
    <div
      aria-label="Rolodex-style calendar that scrolls vertically"
      className="flex h-[36em] shrink-0 flex-col items-center justify-center overflow-hidden"
    >
      {tiles}
    </div>
  )
}
