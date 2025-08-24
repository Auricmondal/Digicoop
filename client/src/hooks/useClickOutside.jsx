import { useEffect } from "react";

export function useClickOutside(ref, handler, enabled = true) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    if (enabled) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, handler, enabled]);
}
