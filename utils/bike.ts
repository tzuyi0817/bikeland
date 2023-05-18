export function bikeAvailableColor(available?: number) {
  if (available === void 0) return '';
  if (available > 5) return 'text-primary-500 bg-primary-100';
  if (available === 0) return 'text-grey-300 bg-grey-200';
  return 'text-alert-600 bg-alert-100';
}
