import { useEffect, useRef } from 'react';

const useTimeout = (callback, data, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const callback = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setTimeout(callback, delay);
      return () => clearTimeout(id);
    }
  }, [delay, data]);
};
export default useTimeout;
