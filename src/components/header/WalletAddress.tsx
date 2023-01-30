import { motion } from "framer-motion"
import { BsWallet2 } from "react-icons/bs"
import { Auth } from "../../containers/Auth"

interface Props {}

export const WalletAddress: React.FC<Props> = ({}) => {
  const { walletAddress, isWalletConnected } = Auth.useContainer()
  return (
    <>
      {isWalletConnected && (
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 40,
          }}
          className="color-shift mx-2 rounded-full border border-stone-700 bg-slate-600 bg-opacity-90 py-1 px-2 text-xs hover:border-slate-300 hover:text-slate-300 hover:underline"
          title={"View Wallet on Snowtrace"}
          href={"https://snowtrace.io/address/" + walletAddress}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex gap-1">
            <div className="mt-0.5">
              <BsWallet2 />
            </div>
            {walletAddress?.substring(0, 6)}...
            {walletAddress?.substring(
              walletAddress.length - 4,
              walletAddress.length,
            )}
          </div>
        </motion.a>
      )}
    </>
  )
}
