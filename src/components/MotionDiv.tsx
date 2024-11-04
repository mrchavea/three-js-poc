"use client";

import React from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type MotionDivProps = HTMLMotionProps<"div">;

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(function MotionH1({ children, ...props }, ref) {
  return (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  );
});

export { MotionDiv };
