import { Auth } from "../../containers/Auth"

interface Props {}

export const SignOutButton: React.FC<Props> = ({}) => {
  const { signOutWithGoogle, user } = Auth.useContainer()

  return (
    <>
      {user && (
        <div className="mx-2 flex flex-col justify-center">
          <button
            id="header-sign-in-button"
            onClick={signOutWithGoogle}
            className="color-shift clickable grid h-9 place-content-center rounded-md border border-stone-400 p-2 text-xs text-stone-800 hover:border-black hover:bg-stone-300 hover:text-black dark:border-stone-500 dark:text-stone-300 dark:hover:border-white dark:hover:bg-stone-900 dark:hover:text-white sm:text-sm"
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  )
}
