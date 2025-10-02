import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Instant position for dot
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("button, a, [role='button']");

      if (isInteractive) {
        cursor.style.transform = `translate(-50%, -50%) scale(1.5)`;
        cursor.style.borderColor = "hsl(var(--secondary))";
      } else {
        cursor.style.transform = `translate(-50%, -50%) scale(1)`;
        cursor.style.borderColor = "hsl(var(--primary))";
      }
    };

    const animateCursor = () => {
      // Smooth follow animation
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200"
        style={{
          left: "-100px",
          top: "-100px",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: "-100px",
          top: "-100px",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
