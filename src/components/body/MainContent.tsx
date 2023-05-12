import { LayoutGroup } from "framer-motion"
import "../../index.scss"
import { Auth } from "../../containers/Auth"
import { AuthedTilesGroup } from "./tiles/AuthedTilesGroup"
import { LoadingSpinner } from "./LoadingSpinner"
import { UnauthedTilesGroup } from "./tiles/unauthed/UnauthedTilesGroup"

export const MainContent: React.FC = () => {
  const { auth, user, isLoading } = Auth.useContainer()
  const paddingAtTop = auth?.currentUser ? "" : "pt-4"

  return (
    <div className="flex h-full justify-center">
      <div
        className={`${paddingAtTop} flex max-w-[52em] grow flex-col gap-3 px-3`}
      >
        <LayoutGroup>
          {isLoading ? (
            <LoadingSpinner />
          ) : user ? (
            <AuthedTilesGroup />
          ) : (
            <UnauthedTilesGroup />
          )}
        </LayoutGroup>
      </div>
    </div>
  )
}
