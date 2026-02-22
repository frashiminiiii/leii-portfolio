import React, { useEffect, useRef } from "react";

export const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    let frameId = null;
    let nextX = 0;
    let nextY = 0;

    const updateGlow = () => {
      frameId = null;
      if (!glowRef.current) return;
      glowRef.current.style.background = `radial-gradient(760px at ${nextX}px ${nextY}px, rgba(41,182,197,0.16), transparent 70%)`;
    };

    const handleMouseMove = (e) => {
      nextX = e.clientX;
      nextY = e.clientY;

      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateGlow);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(760px at 0px 0px, rgba(41,182,197,0.16), transparent 70%)",
      }}
    />
  );
};
