import { useEffect, useRef, useState } from "react";
import carImage from "@/assets/car-divider.png";

interface CarDividerProps {
  direction?: "left" | "right";
}

const CarDivider = ({ direction = "left" }: CarDividerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={dividerRef}
      className="relative w-full h-32 overflow-hidden my-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-64 h-32 ${
          isVisible ? "animate-slide-" + direction : "opacity-0"
        }`}
        style={{
          left: direction === "left" ? "-256px" : "auto",
          right: direction === "right" ? "-256px" : "auto",
        }}
      >
        <img
          src={carImage}
          alt="Car divider"
          className={`w-full h-full object-contain ${
            direction === "right" ? "scale-x-[-1]" : ""
          }`}
          style={{
            filter: "drop-shadow(0 0 20px hsl(var(--primary)))",
          }}
        />
      </div>
    </div>
  );
};

export default CarDivider;
