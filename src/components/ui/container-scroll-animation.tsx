"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 1] : [0.75, 1];
  };

  // Viel dynamischere Rotation mit stärkerem Effekt
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [25, 10, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 5, 0]);
  
  // Dynamischer Scale-Effekt
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [scaleDimensions()[0], 0.9, scaleDimensions()[1]]
  );
  
  // Stärkere Y-Translation für dramatischeren Effekt
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 70, 0]);
  
  // Zusätzliche X-Translation für Bewegung
  const translateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);
  
  // Opacity-Fade für smooth appearance
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.5, 0.8, 1]);

  return (
    <div
      ref={containerRef}
      className="relative h-[80vh] flex items-center justify-center p-2 md:p-20"
      style={{
        perspective: "1500px",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateZ: rotate,
          scale,
          y: translateY,
          x: translateX,
          opacity,
        }}
        className="w-full max-w-5xl"
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            rotateX: 5,
            transition: { duration: 0.3 },
          }}
          className="rounded-2xl shadow-2xl"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
