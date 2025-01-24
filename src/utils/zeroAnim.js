export const zeroAnim = {
  initial: { borderRadius: "95px", aspectRatio: 1 },
  open: (i) => ({
    borderRadius: "95px",
    aspectRatio: 288 / 95,
    transition: { duration: 1.25, ease: [0.76, 0, 0.24, 1], delay: 0.35 * i },
  }),
  closed: {
    aspectRatio: 1,
    transition: { duration: 1.25, ease: [0.32, 0, 0.67, 0] },
  },
};
