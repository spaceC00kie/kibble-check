import { Auth } from "../../containers/Auth"

interface Props {}

export const SignOutButton: React.FC<Props> = ({}) => {
  const { signOutWithGoogle, user } = Auth.useContainer()

  return (
    <>
      {user && (
        <div className="mx-2 flex flex-col justify-center">
          <button
            onClick={signOutWithGoogle}
            className="clickable color-shift grid h-9 place-content-center rounded-md border border-yellow-600 p-2 text-xs text-stone-50 hover:border-red-400 sm:text-sm"
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  )
}
