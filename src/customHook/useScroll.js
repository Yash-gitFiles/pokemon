import { useEffect, useState } from "react";

function useScroll() {
  const [scroll, setScroll] = useState(window.scrollY);

  function moveToTop() {
    window.scroll(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return { scroll, moveToTop };
}

export default useScroll;
