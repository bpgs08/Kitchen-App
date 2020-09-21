import { useEffect, useState } from "react";
import { responsive } from "../../utils/helpers";

const GetResponsive = () => {
  const [viewPort, setViewPort] = useState(null);
  useEffect(() => {
    responsive(setViewPort, true);
  }, []);
  return viewPort;
};

export default GetResponsive;
