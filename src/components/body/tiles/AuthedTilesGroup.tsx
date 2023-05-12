import { motion } from "framer-motion"
import { Calendar } from "./Calendar"
import { Auth } from "../../../containers/Auth"
import { Date } from "../../../containers/Date"

export const AuthedTilesGroup: React.FC = () => {
  const { user, isLoading } = Auth.useContainer()
  const { selectedTileDate } = Date.useContainer()

  return (
    <div className="relative top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform">
      {user && !isLoading && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex w-full justify-center font-semibold text-yellow-50">
            <div className="text-5xl">{selectedTileDate.format("MMMM")}</div>
            <div className="absolute top-14 text-sm text-yellow-100">
              {selectedTileDate.format("YYYY")}
            </div>
          </div>
          <Calendar />
        </motion.div>
      )}
    </div>
  )
}
