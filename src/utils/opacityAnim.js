export const opacityAnim = {
  initial: { opacity: 0 },
  open: (i) => ({
    opacity: 1,
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.35 * i },
  }),
  closed: {
    opacity: 0,
    transition: { duration: 1.5, ease: [0.32, 0, 0.67, 0] },
  },
};
