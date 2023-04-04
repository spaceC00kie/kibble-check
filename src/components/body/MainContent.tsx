import { Footer } from "../footer/Footer"
import { LayoutGroup } from "framer-motion"
import "../../index.scss"
import { Auth } from "../../containers/Auth"
import { AuthedTilesGroup } from "./tiles/AuthedTilesGroup"
import { LoadingSpinner } from "./LoadingSpinner"
import { UnauthedTilesGroup } from "./tiles/unauthed/UnauthedTilesGroup"

export const MainContent: React.FC = () => {
  const { user, isLoading } = Auth.useContainer()

  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[52em] grow flex-col gap-3 px-3 pt-4">
        <LayoutGroup>
          {isLoading ? (
            <LoadingSpinner />
          ) : user ? (
            <AuthedTilesGroup />
          ) : (
            <UnauthedTilesGroup />
          )}
          <Footer />
        </LayoutGroup>
      </div>
    </div>
  )
}
