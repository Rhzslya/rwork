import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
type Props = {
  children: React.ReactNode;
};
import { motion } from "framer-motion";

const CoolMarqueeBox = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [multiplier, setMultiplier] = useState(1);

  const calculateMultiplier = useCallback(() => {
    if (!containerRef.current || !marqueeRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const marqueeRect = marqueeRef.current.getBoundingClientRect();

    const containerWidth = containerRect.width;
    const marqueeWidth = marqueeRect.width;

    if (marqueeWidth < containerWidth) {
      setMultiplier(Math.ceil(containerWidth / marqueeWidth));
    } else {
      setMultiplier(1);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    calculateMultiplier();
    if (marqueeRef.current && containerRef.current) {
      const resizeObserver = new ResizeObserver(() => calculateMultiplier());
      resizeObserver.observe(marqueeRef.current);
      resizeObserver.observe(containerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [calculateMultiplier, isMounted]);

  const multipyChildren = useCallback(
    (multiplier: number) => {
      const arraySize =
        Number.isFinite(multiplier) && multiplier > 0
          ? Math.floor(multiplier)
          : 0;
      return arraySize > 0
        ? Array.from({ length: arraySize }, (_, i) => (
            <Fragment key={i}>{children}</Fragment>
          ))
        : null;
    },
    [children]
  );

  const marqueeAnimation = {
    x: ["0%", "-100%"],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  };

  if (!isMounted) return false;
  return (
    <div className="container-marque" ref={containerRef}>
      <motion.div animate={marqueeAnimation} className="marquee">
        <div className="first-marquee" ref={marqueeRef}>
          {children}
        </div>
        {multiplier > 1 ? multipyChildren(multiplier - 1) : null}
      </motion.div>
      <motion.div animate={marqueeAnimation} className="marquee">
        {multiplier > 0 ? multipyChildren(multiplier) : null}
      </motion.div>
    </div>
  );
};

export default CoolMarqueeBox;
