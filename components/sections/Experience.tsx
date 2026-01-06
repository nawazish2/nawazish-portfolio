"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export function Experience() {
  return (
    <section id="work" className="space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex min-h-0 flex-col gap-y-3"
      >
        <h2 className="text-xl font-bold">Work Experience</h2>
        {DATA.work.length === 0 ? (
          <p className="text-muted-foreground">
            Currently looking for internship and full-time opportunities.
          </p>
        ) : (
          <div className="space-y-8">
            {DATA.work.map((work, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
              >
                <Link
                  href={work.href}
                  target="_blank"
                  className="flex flex-col space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <div className="flex items-center gap-x-2">
                      {work.logoUrl && (
                        <Image
                          src={work.logoUrl}
                          alt={work.company}
                          width={28}
                          height={28}
                          className="size-7 rounded-full"
                        />
                      )}
                      <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                        {work.company}
                      </h3>
                    </div>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {work.start} - {work.end}
                    </div>
                  </div>
                  <div className="font-sans text-xs">{work.title}</div>
                  {work.description && (
                    <div className="text-xs text-muted-foreground">
                      {work.description}
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}