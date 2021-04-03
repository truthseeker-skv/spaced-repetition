import { useState, useEffect } from 'react';

export function useIsRendered() {
  const [isRendered, setIsRendered] = useState(false);

  let timeout = 0;

  useEffect(() => {
    timeout = window.setTimeout(() => {
      setIsRendered(true);
    }, 200);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return isRendered;
}

