import React, { useRef, useEffect } from 'react';

const ClickOutside = ({
  children,
  exceptionRef,
  onClick,
  className,
}: any) => {
  const wrapperRef = useRef(null);

  // useEffect(() => {
  //   const handleClickListener = (event: any) => {
  //     let clickedInside = false;
  //     if (exceptionRef) {
  //       clickedInside =
  //         (wrapperRef.current &&
  //           wrapperRef.current.contains(event.target)) ||
  //         (exceptionRef.current && exceptionRef.current === event.target) ||
  //         (exceptionRef.current &&
  //           exceptionRef.current.contains(event.target));
  //     } else {
  //       clickedInside =
  //         wrapperRef.current &&
  //         wrapperRef.current.contains(event.target);
  //     }

  //     if (!clickedInside) onClick();
  //   };

  //   document.addEventListener('mousedown', handleClickListener);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickListener);
  //   };
  // }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={`${className || ''}`}>
      {children}
    </div>
  );
};

export default ClickOutside;
