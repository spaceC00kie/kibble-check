import { motion } from "framer-motion"
import { default as calendar } from "/src/assets/calendar.png"

export const MainTileUnauthed = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
      }}
      className="flex min-h-[32em] shrink-0 flex-col gap-2 overflow-clip rounded-md border border-yellow-600 bg-red-900 bg-opacity-50 p-2 sm:flex-row"
      style={{
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="grid h-full place-content-center sm:w-1/2">
        <div className="rounded-md border border-yellow-600 bg-red-800 bg-opacity-50 p-4 text-3xl font-bold text-yellow-50">
          Effortless Meal Tracking
          <div className="pb-2 text-xl font-semibold">
            Sign in with Google, check "am" or "pm" on the custom-built calendar rolodex when your pet dines,
            and easily review their feeding history.
          </div>
          <div className="rounded-md border border-yellow-700 bg-red-900 p-2 text-base font-normal">
            Upcoming Feature:
            <div className="text-sm">
              Soon, you'll be able to welcome all hands on deck - from your life
              partner to your trusted dog walker - into your dog's unique 'Care
              Network.' Added members will be able to check off feedings,
              ensuring a synced team and a healthily nourished canine companion.
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-content-center sm:w-1/2">
        <img
          src={calendar}
          alt="calendar"
          className="rounded-md border border-yellow-500"
        />
      </div>
    </motion.div>
  )
}
