export const scaleAnimation = {
  initial: { scale: 0 },
  open: (i) => ({
    scale: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.35 * i },
  }),
  closed: {
    scale: 0,
    transition: { duration: 0.75, ease: [0.32, 0, 0.67, 0] },
  },
};

export const scaleAnimationButton = {
  initial: { scale: 0 },
  open: (i) => ({
    scale: 1,
    transition: { duration: i, ease: [0.76, 0, 0.24, 1] },
  }),
  closed: (i) => ({
    scale: 0,
    transition: { duration: i, ease: [0.32, 0, 0.67, 0] },
  }),
};
