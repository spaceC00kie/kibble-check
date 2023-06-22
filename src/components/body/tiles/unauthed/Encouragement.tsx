import { motion } from "framer-motion"
import { SignInButton } from "../../../header/SignInButton"
import { default as walk } from "/src/assets/undraw_dog_walking2.svg"

export const Encouragement = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
      }}
      className="flex shrink-0 flex-col overflow-hidden rounded-md border border-yellow-700 bg-red-900 bg-opacity-50 sm:flex-row-reverse"
      style={{
        backdropFilter: "blur(16px)",
      }}
      role="complementary"
      aria-label="Encouragement to use KibbleCheck"
    >
      <div className="grid place-content-center p-12">
        <img
          src={walk}
          alt="Simple drawing of a man in a yellow shirt walking a small dog with a yellow tree nearby"
          className="drop-shadow-xl"
        />
        {/*img accent color is amber-500*/}
      </div>
      <div className="m-5 flex flex-col justify-evenly gap-2 rounded-md border border-yellow-500 border-opacity-50 bg-red-900 bg-opacity-70 p-6 text-stone-50">
        <div className="text-2xl font-bold">Get in step with your dog!</div>
        <div className="text-base font-normal text-stone-100">
          KibbleCheck keeps you connected with your dog's meal schedule. Take a
          walk around our calendar to trace your dog's feeding footsteps!
        </div>
        <div className="mt-3 flex items-center justify-end">
          <SignInButton
            text="Get Started"
            aria-label="Sign in button"
          />
        </div>
      </div>
      <div className="absolute -z-50 h-[22em] w-[22em] -translate-y-56 translate-x-44 rounded-full bg-yellow-600 opacity-90 blur-lg" />
    </motion.div>
  )
}
