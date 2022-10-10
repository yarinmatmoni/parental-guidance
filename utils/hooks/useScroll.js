import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const useScroll = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 780px)` });

  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) controls.start("show");
  else controls.start("hidden");

  return [element, controls];
};
