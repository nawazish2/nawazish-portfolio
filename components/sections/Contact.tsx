"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex min-h-0 flex-col gap-y-3"
      >
        <div className="space-y-8 w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all soliciting.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}