import { motion } from "framer-motion"
import { Header } from "./components/header/Header"
import { MainContent } from "./components/body/MainContent"
import { Auth } from "./containers/Auth"

export const App: React.FC = () => {
  const { auth } = Auth.useContainer()
  const overflow = auth?.currentUser ? "overflow-clip" : "overflow-y-scroll"
  return (
    <motion.div
      id="app"
      layoutScroll
      className={`${overflow} scrollbar flex h-screen flex-col`}
    >
      <Header />
      <MainContent />
    </motion.div>
  )
}
