"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20 p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          About Me
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
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

          <div className="flex-1">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold mb-4"
            >
              Oluwamayowa Oladeji
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-300 mb-4"
            >
              Web Developer | UI/UX Designer | Graphic Designer
            </motion.p>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-400 mb-6"
            >
              I&apos;m passionate about creating beautiful, intuitive, and
              performant user interfaces. With a keen eye for design and a love
              for clean code, I strive to bridge the gap between aesthetics and
              functionality.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">My Expertise</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "React",
              "Next.js",
              "Wordpress",
              "UI/UX Design",
              "Graphic Design",
              "Responsive Web Design",
            ].map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="bg-gray-800 p-3 rounded-lg shadow-md"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Austinsahm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/oluwamayowa-oladeji-9a749a221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://x.com/austinsamuel733"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="h-8 w-8" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/s.a.m___u.e.l"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-8 w-8" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:austinsamuel733@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
