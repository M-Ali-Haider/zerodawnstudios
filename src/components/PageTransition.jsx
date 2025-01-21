import gsap from "gsap";
const customEase = "custom,0.76,0,0.24,1";
const customEase2 = "custom,0.33, 1, 0.68, 1";

export const animatePageIn = (width, height) => {
  const bannerTwo = document.getElementById("banner-2");
  //this is the svg id
  const bannerOne = document.getElementById("banner-1");
  //this is the id of the path inside svg
  const bannerThree = document.getElementById("banner-3");

  if (bannerOne && bannerTwo && bannerThree) {
    const tl = gsap.timeline();
    tl.set(bannerOne, {
      top: "-300px",
    })
      .set(bannerThree, {
        attr: {
          d: `M0 300 Q${width / 2} 0 ${width} 300 L${width} ${height + 300} Q${
            width / 2
          } ${height + 600} 0 ${height + 300} L0 0`,
        },
      })
      .to(bannerOne, {
        delay: 0.5,
        top: "-100vh",
        duration: 0.9,
        ease: customEase,
      })
      .to(bannerTwo, {
        delay: -0.9,
        opacity: 0,
        top: -100,
        duration: 0.75,
        ease: customEase,
      })
      .to(bannerThree, {
        delay: -0.9,
        attr: {
          d: `M0 300 Q${width / 2} 0 ${width} 300 L${width} ${height} Q${
            width / 2
          } ${height} 0 ${height} L0 0`,
        },
        duration: 0.75,
        ease: customEase,
        onComplete: () => {
          tl.set(bannerThree, {
            attr: {
              d: `M0 300 Q${width / 2} 0 ${width} 300 L${width} ${height} Q${
                width / 2
              } ${height} 0 ${height} L0 0`,
            },
          });
          tl.set([bannerOne, bannerTwo], {
            top: "100vh",
          });
        },
      });
  }
};

export const animatePageOut = (href, router, width, height) => {
  const bannerTwo = document.getElementById("banner-2");
  const bannerOne = document.getElementById("banner-1");
  const bannerThree = document.getElementById("banner-3");

  if (bannerOne && bannerTwo && bannerThree) {
    const tl = gsap.timeline();
    tl.set(bannerTwo, {
      opacity: 0,
      top: "40%",
    })
      .to(bannerOne, {
        top: "-300px",
        duration: 0.75,
        ease: customEase,
      })
      .to(bannerTwo, {
        opacity: 1,
        delay: -0.5,
        yPercent: 0,
        duration: 0.5,
        ease: customEase,
      })
      .to(bannerThree, {
        delay: -0.9,
        attr: {
          d: `M0 300 Q${width / 2} 0 ${width} 300 L${width} ${height + 300} Q${
            width / 2
          } ${height + 600} 0 ${height + 300} L0 0`,
        },
        duration: 0.75,
        ease: customEase,
        onComplete: () => {
          router.push(href);
        },
      });
  }
};
