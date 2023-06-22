import { ref } from 'vue';

function useIntersectionObserver(
  onElementInView: IntersectionObserverCallback,
  {
    threshold = 0,
    root = null,
    rootMargin = '0px',
  }: IntersectionObserverInit,
) {
  const observerInstance = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport) return;
    const options = { threshold, root, rootMargin };

    observerInstance.value = new IntersectionObserver(onElementInView, options);
  });

  onBeforeUnmount(() => {
    observerInstance.value?.disconnect();
    observerInstance.value = null;
  });

  return observerInstance;
}

export default useIntersectionObserver;
