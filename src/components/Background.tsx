import { createEffect, createSignal, on, onCleanup, onMount } from "solid-js";
import "./Background.css";

export default function Background() {
  let mouseBlob!: HTMLDivElement;

  const [pos, setPos] = createSignal({ x: 0, y: 0 });
  function handle_mouse(event: any) {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });

    mouseBlob.animate(
      {
        left: `${event.clientX}px`,
        top: `${event.clientY}px`,
      },
      { duration: 300, fill: "forwards" }
    );
  }

  return (
    <section onMouseMove={handle_mouse} class="background">
      <div class="mouse-circle" ref={mouseBlob}></div>
    </section>
  );
}
