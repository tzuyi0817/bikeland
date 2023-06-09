import type { Coordinate } from '@/types/common';

export function calculateDistance(coord1: Coordinate, coord2: Coordinate) {
  if (coord1.lat === coord2.lat && coord1.lng === coord2.lng) return 0;
  const rad1 = (Math.PI * coord1.lat) / 180;
  const rad2 = (Math.PI * coord2.lat) / 180;
  const theta = coord1.lng - coord2.lng;
  const radTheta = (Math.PI * theta) / 180;

  let distance =
    Math.sin(rad1) * Math.sin(rad2) +
    Math.cos(rad1) * Math.cos(rad2) * Math.cos(radTheta);

  if (distance > 1) distance = 1;
  distance = Math.acos(distance);
  distance = (distance * 180) / Math.PI;
  distance = distance * 60 * 1.1515;
  distance = distance * 1609.344; // convert miles to m
  return Math.round(distance);
}

export function sleep(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function meterToKilometer(meter: number) {
  return meter / 1000;
}

export function debounce<T>(fun: T, ms = 300) {
  if (typeof fun !== 'function')
    throw new TypeError('The first argument is not a function.');
  let timer: NodeJS.Timeout | null = null;

  return function(this: unknown, ...args: unknown[]) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);
      timer = null;
    }, ms);
  };
}
