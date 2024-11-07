"use client";
import { useLoading } from "@/app/loading-context";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-white"
        />
      )}
    </AnimatePresence>
  );
}
