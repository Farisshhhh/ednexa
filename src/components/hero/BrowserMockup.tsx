"use client";

import { motion } from "framer-motion";

export default function BrowserMockup() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative mx-auto w-full max-w-3xl"
    >
      {/* Floating Card Top */}

      <div className="absolute -left-10 top-10 z-20 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-xl">
        <p className="text-3xl font-semibold text-[#111111]">
          Quality
        </p>

        <p className="text-sm text-neutral-500">
          Over Quantity
        </p>
      </div>

      {/* Floating Card Bottom */}

      <div className="absolute -right-8 bottom-8 z-20 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-xl">
        <p className="text-3xl font-semibold text-[#111111]">
          Built
        </p>

        <p className="text-sm text-neutral-500">
          For Growth
        </p>
      </div>

      {/* Browser */}

      <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-2xl">
        {/* Browser Header */}

        <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400" />

          <span className="h-3 w-3 rounded-full bg-yellow-400" />

          <span className="h-3 w-3 rounded-full bg-green-400" />

          <div className="ml-6 rounded-full bg-neutral-100 px-4 py-1 text-sm text-neutral-500">
            www.ednexa.com
          </div>
        </div>

        {/* Preview */}

        <div className="bg-[#F8F7F4] p-10">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C7A86D]">
              Featured Project
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#111111]">
              Ridha Aluminium
            </h2>

            <p className="mt-4 max-w-md text-neutral-600">
              Premium website experience designed to generate
              enquiries and build trust with modern customers.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="h-28 rounded-2xl bg-neutral-100" />

              <div className="h-28 rounded-2xl bg-neutral-200" />

              <div className="h-28 rounded-2xl bg-[#C7A86D]/20" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}







// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function BrowserMockup() {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         scale: 0.96,
//         y: 30,
//       }}
//       animate={{
//         opacity: 1,
//         scale: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 0.8,
//       }}
//       whileHover={{
//         y: -8,
//       }}
//       className="relative mx-auto w-full max-w-4xl"
//     >
//       {/* Floating Label - Top */}

//       <motion.div
//         whileHover={{
//           y: -4,
//         }}
//         className="
//           absolute
//           -left-10
//           top-14
//           z-20
//           rounded-2xl
//           border
//           border-[#ECE7DF]
//           bg-white/95
//           px-6
//           py-5
//           shadow-[0_20px_60px_rgba(15,23,42,0.08)]
//           backdrop-blur
//         "
//       >
//         <p className="text-xs uppercase tracking-[0.28em] text-[#C7A86D]">
//           Strategy
//         </p>

//         <p className="mt-2 text-lg font-semibold text-[#111111]">
//           Business First
//         </p>
//       </motion.div>

//       {/* Floating Label - Bottom */}

//       <motion.div
//         whileHover={{
//           y: -4,
//         }}
//         className="
//           absolute
//           -right-10
//           bottom-10
//           z-20
//           rounded-2xl
//           border
//           border-[#ECE7DF]
//           bg-white/95
//           px-6
//           py-5
//           shadow-[0_20px_60px_rgba(15,23,42,0.08)]
//           backdrop-blur
//         "
//       >
//         <p className="text-xs uppercase tracking-[0.28em] text-[#C7A86D]">
//           Performance
//         </p>

//         <p className="mt-2 text-lg font-semibold text-[#111111]">
//           Engineered for Speed
//         </p>
//       </motion.div>

//       {/* Browser */}

//       <motion.div
//         whileHover={{
//           scale: 1.015,
//         }}
//         transition={{
//           duration: 0.35,
//         }}
//         className="
//           overflow-hidden
//           rounded-[34px]
//           border
//           border-[#ECE7DF]
//           bg-white
//           shadow-[0_40px_120px_rgba(15,23,42,0.12)]
//         "
//       >
//         {/* Browser Header */}

//         <div className="flex items-center gap-3 border-b border-[#ECE7DF] bg-[#FCFCFB] px-7 py-5">
//           {/* Traffic Lights */}

//           <span className="h-3.5 w-3.5 rounded-full bg-[#FF605C]" />

//           <span className="h-3.5 w-3.5 rounded-full bg-[#FFBD44]" />

//           <span className="h-3.5 w-3.5 rounded-full bg-[#00CA4E]" />

//           {/* Address */}

//           <div className="ml-6 flex-1">
//             <div className="mx-auto w-fit rounded-full bg-[#F5F5F3] px-6 py-2 text-sm font-medium text-neutral-500">
//               www.ednexa.in
//             </div>
//           </div>
//         </div>

//         {/* Website Screenshot */}

//         <div className="group overflow-hidden bg-white">
//           <Image
//             src="/portfolio/ridha-hero.png"
//             alt="Ridha Aluminium Website"
//             width={1600}
//             height={900}
//             priority
//             className="w-full transition duration-700 group-hover:scale-[1.02]"
//           />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }