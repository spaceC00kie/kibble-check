import { SignInButton } from "./SignInButton"
import { SignOutButton } from "./SignOutButton"

export const HeaderRight: React.FC = () => {
  return (
    <div className="mx-1 flex flex-auto items-center justify-end gap-1.5 px-2 align-middle">
      <SignInButton />
      <SignOutButton />
    </div>
  )
}
