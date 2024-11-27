import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//This component is when we change route we it the scroll to the top everytime route change

const Scroll = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default Scroll;
