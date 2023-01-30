import { motion } from "framer-motion"
import { Auth } from "../../containers/Auth"

interface Props {}

export const ConnectWallet: React.FC<Props> = ({}) => {
  const {
    isWalletConnected,
    connectWallet,
    disconnectWallet,
    isWalletConnecting,
  } = Auth.useContainer()
  return (
    <div className="grid place-content-center">
      {!isWalletConnected && (
        <button
          disabled={isWalletConnecting}
          onClick={() => {
            connectWallet()
          }}
          className="color-shift clickable grid h-9 place-content-center rounded-md border border-stone-400 p-2 text-xs text-stone-800 hover:border-black hover:bg-stone-300 hover:text-black dark:border-stone-500 dark:text-stone-300 dark:hover:border-white dark:hover:bg-stone-900 dark:hover:text-white sm:text-sm"
        >
          {isWalletConnecting ? (
            <div>
              <>Waiting for Wallet</>
              <motion.div
                className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-400"
                animate={{
                  scale: [1, 4.3],
                  opacity: [1, 0],
                }}
                transition={{
                  delay: 0.4,
                  duration: 2.2,
                  ease: "easeOut",
                  times: [0, 0.5],
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -top-1 -right-1 h-3 w-3 rounded-full border border-blue-400 bg-sky-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  delay: 0.4,
                  duration: 2.2,
                  times: [0, 0.03, 0.21],
                  repeat: Infinity,
                }}
              />
            </div>
          ) : (
            "Connect Your Wallet"
          )}
        </button>
      )}
      {isWalletConnected && (
        <button
          onClick={() => {
            disconnectWallet()
          }}
          className="color-shift clickable grid h-9 place-content-center rounded-md border border-stone-400 p-2 text-xs text-stone-800 hover:border-black hover:bg-stone-300 hover:text-black dark:border-stone-500 dark:text-stone-300 dark:hover:border-white dark:hover:bg-stone-900 dark:hover:text-white sm:text-sm"
        >
          Disconnect Wallet
        </button>
      )}
    </div>
  )
}
