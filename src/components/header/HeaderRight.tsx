import { Auth } from "../../containers/Auth"
import { ConnectWallet } from "./ConnectWallet"
import { SignInButton } from "./SignInButton"
import { SignOutButton } from "./SignOutButton"
import { WalletAddress } from "./WalletAddress"

export const HeaderRight: React.FC = () => {
  return (
    <div className="mx-1 flex flex-auto items-center justify-end gap-1.5 align-middle">
      <WalletAddress />
      <ConnectWallet />
      <SignInButton />
      <SignOutButton />
    </div>
  )
}
