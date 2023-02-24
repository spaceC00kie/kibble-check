import { Auth } from "../containers/Auth"
import { HeadingTile } from "../components/tiles/heading/HeadingTile"
import { Encouragement } from "../components/tiles/form/Encouragement"
import { InfoSection } from "../components/tiles/form/InfoSection"
import { MainTile } from "../components/tiles/form/MainTile"

export const UnauthedTiles: React.FC = () => {
  const { user } = Auth.useContainer()
  const layoutTransition = {
    duration: 0.28,
  }

  return (
    <>
      {!user && (
        <>
          <HeadingTile />
          <MainTile />
          <InfoSection layoutTransition={layoutTransition} />
          <Encouragement />
        </>
      )}
    </>
  )
}
