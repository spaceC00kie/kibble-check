import { Footer } from "./footer/Footer"
import { LayoutGroup } from "framer-motion"
import "../index.scss"
import { AuthedTiles } from "./tiles/AuthedTiles"
import { LoadingPage } from "./LoadingPage"
import { Auth } from "../containers/Auth"
import { UnauthedTiles } from "./tiles/UnauthedTiles"

export const MainContent: React.FC = () => {
  const { user, isLoading } = Auth.useContainer()

  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[52em] grow flex-col gap-3 px-3 pt-4">
        <LayoutGroup>
          {isLoading ? (
            <LoadingPage />
          ) : user ? (
            <AuthedTiles />
          ) : (
            <UnauthedTiles />
          )}
          <Footer />
        </LayoutGroup>
      </div>
    </div>
  )
}
