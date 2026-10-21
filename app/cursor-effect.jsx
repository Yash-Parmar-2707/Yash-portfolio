"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    const target = { x: -100, y: -100 };
    const follower = { x: -100, y: -100 };
    let animationFrame = 0;

    const animateTrail = () => {
      follower.x += (target.x - follower.x) * 0.16;
      follower.y += (target.y - follower.y) * 0.16;
      trail.style.transform = `translate3d(${follower.x}px, ${follower.y}px, 0) translate(-50%, -50%)`;

      if (Math.abs(target.x - follower.x) > 0.2 || Math.abs(target.y - follower.y) > 0.2) {
        animationFrame = window.requestAnimationFrame(animateTrail);
      } else {
        animationFrame = 0;
      }
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;
      document.body.classList.add("has-custom-cursor");
      target.x = event.clientX;
      target.y = event.clientY;
      cursor.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      cursor.classList.add("is-visible");
      trail.classList.add("is-visible");

      const isInteractive = event.target instanceof Element && Boolean(event.target.closest("a, button"));
      cursor.classList.toggle("is-interactive", isInteractive);
      trail.classList.toggle("is-interactive", isInteractive);

      if (!animationFrame) animationFrame = window.requestAnimationFrame(animateTrail);
    };

    const hideCursor = () => {
      document.body.classList.remove("has-custom-cursor");
      cursor.classList.remove("is-visible", "is-interactive", "is-pressed");
      trail.classList.remove("is-visible", "is-interactive");
    };

    const handlePointerDown = () => cursor.classList.add("is-pressed");
    const handlePointerUp = () => cursor.classList.remove("is-pressed");
    const handleKeyDown = () => hideCursor();

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("pointerleave", hideCursor);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("blur", hideCursor);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointerleave", hideCursor);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("blur", hideCursor);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <span className="cursor-trail" ref={trailRef} aria-hidden="true" />
      <span className="cursor-orb" ref={cursorRef} aria-hidden="true" />
    </>
  );
}
