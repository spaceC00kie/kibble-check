import { motion } from "framer-motion"
import { Auth } from "../../containers/Auth"

export const LoadingSpinner: React.FC = () => {
  const { isLoading } = Auth.useContainer()
  return (
    <>
      {isLoading && (
        <motion.div
          className="flex h-full items-center justify-center"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-48 w-48 animate-spin rounded-full border-t-4 border-b-4 border-yellow-600"></div>
        </motion.div>
      )}
    </>
  )
}
