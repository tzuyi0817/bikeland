export function onImageInView(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const imageSrc = element.getAttribute('data-src');

    element.removeAttribute('data-src');
    imageSrc && element.setAttribute('src', imageSrc);

    observer.unobserve(element);
  });
}
