// v-reveal — fades + rises an element as it scrolls into view, once.
//
// Calm by design: gentle, single-shot, and fully disabled when the visitor
// has asked their OS to reduce motion. Degrades gracefully — if there is no
// IntersectionObserver (or JS is otherwise unhappy), the element is simply
// shown. The hidden base state is added in `beforeMount`, before the element
// is painted, so there is never a flash of shifted content.
//
// Usage:
//   <div v-reveal>            once visible, fades up
//   <div v-reveal="index">    same, staggered by index * 80ms (for lists)

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const show = (el) => el.classList.add("is-visible");

// One shared observer for the whole app — cheaper than one per element.
let observer;
const getObserver = () => {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          show(entry.target);
          obs.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
  );
  return observer;
};

export default {
  beforeMount(el, binding) {
    el.classList.add("reveal");
    // Optional stagger for lists: v-reveal="i" delays each item a little more.
    const index = Number(binding.value);
    if (Number.isFinite(index) && index > 0) {
      el.style.setProperty("--reveal-delay", `${index * 80}ms`);
    }
  },
  mounted(el) {
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      show(el);
      return;
    }
    getObserver().observe(el);
  },
  unmounted(el) {
    if (observer) observer.unobserve(el);
  },
};
