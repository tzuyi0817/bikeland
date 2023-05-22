export function bikeAvailableColor(available?: number) {
  if (available === undefined) return '';
  if (available > 5) return 'text-primary-500 bg-primary-100';
  if (available === 0) return 'text-grey-300 bg-grey-200';
  return 'text-alert-600 bg-alert-100';
}

export function bikeMarkerColor(available?: number) {
  if (available === undefined) return '';
  if (available > 5) return 'text-primary-400';
  if (available === 0) return 'text-grey-400';
  return 'text-alert-400';
}

export function bikeMarkerHoleColor(available?: number) {
  if (available === undefined) return '';
  if (available > 5) return 'bg-primary-300';
  if (available === 0) return 'bg-grey-300';
  return 'bg-alert-300';
}
