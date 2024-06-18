import { createEffect, createSignal, on, onCleanup, onMount } from "solid-js";
import "./Background.css";

export default function Background() {
  let mouseBlob!: HTMLDivElement;

  const [pos, setPos] = createSignal({ x: 0, y: 0 });
  function handle_mouse(event: any) {
    mouseBlob.animate(
      {
        left: `${event.clientX}px`,
        top: `${event.clientY}px`,
      },
      { duration: 700, fill: "forwards" }
    );
  }

  onMount(() => {
    window.addEventListener("mousemove", handle_mouse);
  });

  onCleanup(() => {
    window.removeEventListener("mousemove", handle_mouse);
  });

  return (
    <section class="background">
      <div class="mouse-circle" ref={mouseBlob}></div>
    </section>
  );
}
