// export default HomePage;
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { TypewriterText } from "@/components/typewriter-text";
import Marquee from "react-fast-marquee";
import { MarqueImg } from "@/components/marquee-img";
import metaLogo from "@/assets/img/logo/meta.png";
import netflixLogo from "@/assets/img/logo/netflix.png";
import androidLogo from "@/assets/img/logo/android.png";
import { USPCard } from "@/components/USPcard";

const HomePage = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white">
      {/* BACKGROUND ANIMATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-20%] top-[-20%] h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -120, 0], y: [0, -80, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-20%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
        />
      </div>

      <Container>
        <div className="relative z-10 grid min-h-[80vh] grid-cols-1 items-center gap-12 py-24 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="inline-block w-fit rounded-full bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400"
            >
              AI-Powered Mock Interviews
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold leading-tight md:text-6xl"
            >
              Ace Interviews with <br />
              {/* <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative inline-block text-emerald-400"
              >
                AI-Driven Mock Sessions
                <span className="absolute inset-0 -z-10 rounded-lg bg-emerald-400/20 blur-xl" />
              </motion.span> */}
              <span className="relative inline-block text-emerald-400">
                <TypewriterText
                  words={[
                    "AI-Driven Sessions",
                    "Real Interview Practice",
                    "Instant AI Feedback",
                  ]}
                />
                <span className="absolute inset-0 -z-10 rounded-lg bg-emerald-400/20 blur-xl" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="max-w-xl text-lg text-gray-400"
            >
              Build the confidence to ace your interviews with realistic
              practice sessions and personalized AI feedback.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 30px rgba(16,185,129,0.7)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-black"
              >
                Start Mock Interview
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-lg border border-white/20 px-6 py-3 text-white"
              >
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-xl bg-emerald-500/20 blur-2xl" />
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <img
                src="/mock-dashboard.png"
                alt="Mock interview dashboard"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />

          <MarqueImg img={metaLogo} />
          <MarqueImg img={androidLogo} />
          <MarqueImg img={netflixLogo} />
        </Marquee>
      </div>
      <Container>
        <div className="my-24">
          <h2 className="mb-12 text-center text-3xl font-bold">
            How We Help Freshers Crack Interviews
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <USPCard
              title="Easy AI Mock Interviews"
              points={[
                "Instantly start mock interviews without complex setup",
                "Designed specifically for freshers and entry-level roles",
                "Practice anytime, anywhere at your own pace",
              ]}
            />

            <USPCard
              title="Actionable AI Feedback"
              points={[
                "Get detailed feedback on answers and communication",
                "Identify weak areas and improve with every attempt",
                "Clear suggestions instead of generic scores",
              ]}
            />

            <USPCard
              title="Save Important Questions"
              points={[
                "Bookmark frequently asked interview questions",
                "Revisit tough questions before real interviews",
                "Build your own personalized interview prep listout",
              ]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;



