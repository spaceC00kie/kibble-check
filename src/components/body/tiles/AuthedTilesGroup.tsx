import { motion } from "framer-motion"
import { Auth } from "../../../containers/Auth"
import { Date } from "../../../containers/Date"
import { Calendar } from "./Calendar"
import { useTileNavigation } from "./UseTileNavigation"
import { BiHomeHeart } from "react-icons/bi"

export const AuthedTilesGroup: React.FC = () => {
  const { user, isLoading } = Auth.useContainer()
  const { selectedTileDate } = Date.useContainer()
  const { selectedTileIndex, tileLength, resetToToday } = useTileNavigation()

  return (
    <>
      <button
        title="Reset to Today"
        onClick={resetToToday}
        className="clickable color-shift absolute top-12 left-2 grid place-content-center rounded-md border border-yellow-500 bg-red-800 bg-opacity-50 p-2.5 text-stone-50 filter hover:bg-opacity-30"
      >
        <BiHomeHeart size={30} />
      </button>
      {/* translation is necessary for dynamic resizing of tiles */}
      <div className="relative left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 transform">
        {user && !isLoading && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex w-full flex-col items-center justify-center gap-3 font-semibold text-stone-50">
              <div className="text-5xl">{selectedTileDate.format("MMMM")}</div>
              <div className="text-sm text-stone-100">
                {selectedTileDate.format("YYYY")}
              </div>
            </div>
            <Calendar
              selectedTileIndex={selectedTileIndex}
              tileLength={tileLength}
            />
          </motion.div>
        )}
      </div>
    </>
  )
}
