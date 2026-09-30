import type Lenis from "lenis";

/** The one Lenis instance of the site (owned by SmoothScroll), shared with the demo frames. */
let instance: Lenis | null = null;
export const setLenis = (l: Lenis | null) => {
  instance = l;
};
export const getLenis = () => instance;
