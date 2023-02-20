import { MainTile } from "./tiles/form/MainTile"
import { HeadingTile } from "./tiles/heading/HeadingTile"
import { Footer } from "./footer/Footer"
import { LayoutGroup } from "framer-motion"
import "../index.scss"
import { InfoSection } from "./tiles/form/InfoSection"
import { Encouragement } from "./tiles/form/Encouragement"
import { Auth } from "../containers/Auth"
import { MainTileAuthed } from "./tiles/form/MainTileAuthed"

export const MainContent: React.FC = () => {
  const { user } = Auth.useContainer()
  const layoutTransition = {
    duration: 0.28,
  }

  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[52em] flex-col gap-3 px-3 pt-4">
        <LayoutGroup>
          {!user && (
            <>
              <HeadingTile />
              <MainTile />
              <InfoSection layoutTransition={layoutTransition} />
              <Encouragement />
            </>
          )}
          <MainTileAuthed />
          <Footer />
        </LayoutGroup>
      </div>
    </div>
  )
}
