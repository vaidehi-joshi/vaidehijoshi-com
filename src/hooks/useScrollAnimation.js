import { useRef, useState } from "react";
import { useScrollPosition } from "./useScrollPosition";

export const useScrollAnimation = (threshold = 0.1, delay = 0) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      if (!elementRef.current || hasAnimated) return;

      const element = elementRef.current;
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate when element should become visible
      const triggerPoint = windowHeight * (1 - threshold);
      
      if (elementTop < triggerPoint) {
        setTimeout(() => {
          setIsVisible(true);
          setHasAnimated(true);
        }, delay);
      }
    },
    [threshold, delay, hasAnimated],
    elementRef
  );

  return { elementRef, isVisible };
}; 