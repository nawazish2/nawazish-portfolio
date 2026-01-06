"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export function Education() {
  return (
    <section id="education" className="space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex min-h-0 flex-col gap-y-3"
      >
        <h2 className="text-xl font-bold">Education</h2>
        <div className="space-y-8">
          {DATA.education.map((education, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
            >
              <Link
                href={education.href}
                target="_blank"
                className="flex flex-col space-y-1.5"
              >
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <div className="flex items-center gap-x-2">
                    {education.logoUrl && (
                      <Image
                        src={education.logoUrl}
                        alt={education.school}
                        width={28}
                        height={28}
                        className="size-7 rounded-full"
                      />
                    )}
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                    {education.start} - {education.end}
                  </div>
                </div>
                <div className="font-sans text-xs">{education.degree}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}