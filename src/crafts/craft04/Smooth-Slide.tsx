import { MouseEvent, useRef, useState } from "react";

type TPos = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function SmoothSlide() {
  const [pos, setPos] = useState<TPos>({ x: 0, y: 0, width: 0, height: 0 });
  const [visible, setVisible] = useState(false);
  console.log(pos);
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseEnter(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const childRect = e.currentTarget.getBoundingClientRect();
    const parentRect = ref.current.getBoundingClientRect();

    setPos({
      x: childRect.left - parentRect.left,
      y: childRect.top - parentRect.top,
      width: childRect.width,
      height: childRect.height,
    });
  }

  function handleMouseLeave() {
    setVisible(false);
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center">
      <div
        className="flex relative"
        ref={ref}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setVisible(true)}>
        <div
          className={`absolute rounded-md bg-amber-100 left-0 top-0 -z-10 ${
            !visible ? "opacity-0" : "opacity-100"
          }`}
          style={{
            transform: `translate(${pos.x}px,${pos.y}px)`,
            width: `${pos.width}px`,
            height: `${pos.height}px`,
            willChange: "transform",
            transition: "transform 0.3s cubic-bezier(0.2, 0.6, 0.2, 1)",
          }}
        />
        <div
          className="px-4 py-1.5 cursor-pointer"
          onMouseEnter={handleMouseEnter}>
          John
        </div>
        <div
          className="px-4 py-1.5 cursor-pointer"
          onMouseEnter={handleMouseEnter}>
          Emiley
        </div>
        <div
          className="px-4 py-1.5 cursor-pointer"
          onMouseEnter={handleMouseEnter}>
          Dave
        </div>
        <div
          className="px-4 py-1.5 cursor-pointer"
          onMouseEnter={handleMouseEnter}>
          Miller
        </div>
      </div>
    </div>
  );
}
export default SmoothSlide;
