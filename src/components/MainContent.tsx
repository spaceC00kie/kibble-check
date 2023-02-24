import { Footer } from "./footer/Footer"
import { LayoutGroup } from "framer-motion"
import "../index.scss"
import { UnauthedTiles } from "../containers/UnauthedTiles"
import { AuthedTiles } from "../containers/AuthedTiles"

export const MainContent: React.FC = () => {
  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[52em] flex-col gap-3 px-3 pt-4">
        <LayoutGroup>
          <UnauthedTiles />
          <AuthedTiles />
          <Footer />
        </LayoutGroup>
      </div>
    </div>
  )
}
