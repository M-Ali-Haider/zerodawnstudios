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

export const widthLoadingAnim = {
  initial: {
    width: 0,
  },
  open: {
    width: "89px",
    transition: { duration: 0.75 },
  },
  closed: {
    width: 0,
  },
};

export const opacityLoading = {
  initial: {
    opacity: 1,
  },
  open: {
    width: 0,
    opacity: 0,
    height: 0,
    transition: { duration: 0.75 },
  },
  closed: {
    opacity: 1,
  },
};

export const logoLoading = {
  initial: {
    width: 15,
    height: 15,
    marginTop: "3px",
    marginRight: "1px",
    marginLeft: "1px",
    rotate: -90,
  },
  open: {
    width: 37,
    height: 37,
    marginTop: "-11.5px",
    transition: { duration: 0.5 },
    rotate: 0,
  },
  closed: {
    width: 15,
    height: 15,
    marginTop: "3px",
    marginRight: "1px",
    marginLeft: "1px",
    rotate: 0,
  },
};
