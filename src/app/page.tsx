"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 xs:pt-16 md:p-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl w-full"
      >
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
          >
            <Image
              src="/myPicture.jpg"
              alt="Oluwamayowa Oladeji"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              Oluwamayowa Oladeji
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 text-center md:text-left max-w-2xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Web Developer | UI/UX Designer | Graphic Designer
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Link href="/projects" className="flex items-center">
                  View Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.instagram.com/s.a.m___u.e.l"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
