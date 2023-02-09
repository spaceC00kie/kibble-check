import { FormTile } from "./tiles/form/FormTile"
import { HeadingTile } from "./tiles/heading/HeadingTile"
import { Footer } from "./footer/Footer"
import { LayoutGroup } from "framer-motion"
import "../index.scss"
import { InfoSection } from "./tiles/form/InfoSection"

export const MainContent: React.FC = () => {
  const layoutTransition = {
    duration: 0.28,
  }

  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[52em] flex-col gap-3 px-3 pt-4">
        <LayoutGroup>
          <HeadingTile />
          <FormTile />
          <InfoSection layoutTransition={layoutTransition} />
          <Footer />
        </LayoutGroup>
      </div>
    </div>
  )
}
