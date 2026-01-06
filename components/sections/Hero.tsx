"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="flex justify-between gap-4">
        <div className="flex flex-1 flex-col space-y-1.5">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
          >
            Hi, I'm {DATA.name.split(" ")[0]} 👋
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[600px] text-muted-foreground md:text-xl"
          >
            {DATA.description}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Image
            src={DATA.avatarUrl}
            alt={DATA.name}
            width={100}
            height={100}
            className="size-24 sm:size-28 rounded-full border object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}