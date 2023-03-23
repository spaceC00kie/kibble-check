import { MainTileAuthed } from "../components/tiles/form/MainTileAuthed"
import { Auth } from "./Auth"

export const AuthedTiles: React.FC = () => {
  const { user } = Auth.useContainer()

  return (
    <>
      {user && (
        <>
          <MainTileAuthed />
        </>
      )}
    </>
  )
}
