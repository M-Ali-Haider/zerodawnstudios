export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
  },
};

export const slideUpLanding = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.75, delay: 0.35 * i },
  }),
  closed: {
    y: "100%",
  },
};

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.75, delay: 0.1 * i },
  }),
  closed: {
    y: "100%",
  },
};

export const slideUpFooter = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.75, delay: 0.2 * i },
  }),
  closed: {
    y: "100%",
  },
};

export const slideUpFooterLink = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.75, delay: 0.3 * i },
  }),
  closed: {
    y: "100%",
  },
};

export const slideUpDescription = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.75, delay: 0.05 * i },
  }),
  closed: {
    y: "100%",
  },
};
