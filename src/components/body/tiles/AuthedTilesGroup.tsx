import { motion } from "framer-motion"
import { Calendar } from "./Calendar"
import { Auth } from "../../../containers/Auth"
import { Date } from "../../../containers/Date"

export const AuthedTilesGroup: React.FC = () => {
  const { user, isLoading } = Auth.useContainer()
  const { selectedTileDate } = Date.useContainer()

  return (
    <div className="relative grid place-content-center">
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
          <Calendar />
        </motion.div>
      )}
    </div>
  )
}
