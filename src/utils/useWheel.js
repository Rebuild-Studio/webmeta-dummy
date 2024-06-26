import { useEffect, useState } from "react";
import PageManager from "./PageManager";

const useWheel = (ref) => {
  const [pageManager] = useState(new PageManager());
  useEffect(() => {
    console.log(pageManager, ref.current)
    ref.current.addEventListener("wheel", pageManager.wheel.bind(pageManager));
  }, [ref, pageManager]);

  return ;
}

export default useWheel;