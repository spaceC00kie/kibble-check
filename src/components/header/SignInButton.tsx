import { Auth } from "../../containers/Auth"

interface Props {
  text?: string
}

export const SignInButton: React.FC<Props> = ({ text }) => {
  const { signInWithGoogle, user } = Auth.useContainer()

  return (
    <>
      {!user && (
        <div className="flex flex-col justify-center">
          <button
            onClick={signInWithGoogle}
            className="clickable color-shift grid h-9 place-content-center rounded-md border border-yellow-600 p-2 text-xs text-stone-50 hover:border-red-400 sm:text-sm"
          >
            {text ?? "Sign in with Google"}
          </button>
        </div>
      )}
    </>
  )
}
