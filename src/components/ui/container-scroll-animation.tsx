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
    return isMobile ? [0.85, 1] : [0.9, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [15, 5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleDimensions()[0], 0.95, scaleDimensions()[1]]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 50, 0]);

  return (
    <div
      className="h-[100vh] flex items-center justify-center relative"
      ref={containerRef}
    >
      <Card rotate={rotate} translateY={translateY} scale={scale}>
        {children}
      </Card>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translateY,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translateY: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
      className="max-w-6xl mx-auto w-full border-4 border-[#6C6C6C] p-3 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  );
};
