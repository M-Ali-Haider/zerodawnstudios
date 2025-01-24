export const slideFromRightLoading = {
  initial: {
    x: "100%",
  },
  open: (i) => ({
    x: 0,
    transition: { duration: 0.75, delay: 0.1 * i },
  }),
  closed: {
    x: "100%",
  },
};
