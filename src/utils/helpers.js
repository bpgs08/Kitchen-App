import { sizes } from "./theme";

export const NumberFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export const responsive = (callback, easyResponse = false) => {
  const checkViewPort = () => {
    if (window.innerWidth >= sizes.ultrawide[1]) return "ultrawide";
    if (window.innerWidth >= sizes.fullHd[1]) return "fullHd";
    if (window.innerWidth >= sizes.large[1]) return "large";
    if (window.innerWidth >= sizes.desktop[1]) return "desktop";
    if (window.innerWidth >= sizes.tablet[1]) return "tablet";
    if (window.innerWidth >= sizes.phoneLandscape[1]) return "phoneLandscape";
    return "mobile";
  };
  let viewPort = checkViewPort();
  if (easyResponse) {
    callback(easyResponsive(viewPort));
  } else {
    callback(viewPort);
  }

  window.addEventListener(
    "resize",
    () => {
      const currentViewPort = checkViewPort();
      if (easyResponse) {
        callback && callback(easyResponsive(currentViewPort));
      } else {
        callback && callback(currentViewPort);
      }
    },
    false
  );
};

const easyResponsive = (viewport) => {
  switch (viewport) {
    case "mobile":
    case "phoneLandscape": {
      return "mobile";
    }
    case "tablet":
    case "desktop":
    case "ultrawide":
    case "fullHd":
    case "large": {
      return "desktop";
    }

    default:
      return viewport;
  }
};
