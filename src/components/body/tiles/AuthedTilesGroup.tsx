import { motion } from "framer-motion"
import { Calendar } from "./Calendar"
import { Auth } from "../../../containers/Auth"

export const AuthedTilesGroup: React.FC = () => {
  const { user, isLoading } = Auth.useContainer()

  return (
    <div className="grid place-content-center h-full">
      {user && !isLoading && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Calendar />
        </motion.div>
      )}
    </div>
  )
}
