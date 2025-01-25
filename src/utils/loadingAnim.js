export const slideFromRightLoading = {
  initial: {
    x: "100%",
  },
  open: (i) => ({
    x: 0,
    transition: { duration: 0.75, delay: 0.75 * i },
  }),
  closed: {
    x: "100%",
  },
};

export const widthLoadingAnim = {
  initial: {
    width: 0,
  },
  open: (i) => ({
    width: "auto",
    transition: { duration: 0.75, delay: 0.1 * i },
  }),
  closed: {
    width: 0,
  },
};

export const scaleLoadingAnim = {
  initial: {
    width: "auto",
    height: "auto",
  },
  open: (i) => ({
    width: 0,
    height: 0,
    transition: { duration: 0.75, delay: 0.1 * i },
  }),
  closed: {
    width: "auto",
    height: "auto",
  },
};

export const slideUpLoading = {
  initial: {
    y: "-100%",
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.75, delay: 0.75 * i },
  }),
  closed: {
    y: "-100%",
  },
};

export const opacityLoading = {
  initial: {
    opacity: 1,
  },
  open: (i) => ({
    width: 0,
    opacity: 0,
    height: 0,
    transition: { duration: 0.75, delay: 0.75 * i },
  }),
  closed: {
    width: 0,
    height: 0,
    opacity: 0,
  },
};

export const logoLoading = {
  initial: {
    width: 18,
    height: 18,
    marginTop: "0px",
  },
  open: (i) => ({
    width: 37,
    height: 37,
    marginTop: "-9px",
    transition: { duration: 0.5, delay: 0.75 * i },
  }),
  closed: {
    width: 37,
    height: 37,
    marginTop: "-9px",
  },
};
