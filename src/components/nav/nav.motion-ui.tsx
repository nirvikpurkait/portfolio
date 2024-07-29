"use client";

import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

export function MotionNav(props: React.ComponentProps<typeof motion.nav>) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const screenSize = window.innerWidth;

    if (screenSize <= 640) {
      setIsSmallScreen(true);
    }
  }, []);

  return isSmallScreen ? (
    <SmallNav {...props}>{props.children}</SmallNav>
  ) : (
    <LargeNav {...props}>{props.children}</LargeNav>
  );
}

function LargeNav(props: React.ComponentProps<typeof motion.nav>) {
  return (
    <motion.nav
      {...props}
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {props.children}
    </motion.nav>
  );
}

function SmallNav(props: React.ComponentProps<typeof motion.nav>) {
  return (
    <motion.nav
      {...props}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {props.children}
    </motion.nav>
  );
}
