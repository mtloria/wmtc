const DISTANCE_ORDER = [
  '800m',
  '1 mile',
  '3K',
  '5K',
  '8K',
  '10K',
  '10 mile',
  'Half Marathon',
  'Marathon',
  '50K',
  '50 mile',
  '100K',
  '100 Mile'
];

export const normalizeDistance = value => (value || '')
  .replace(/\s+/g, '')
  .replace(/mile(s)?/gi, 'mile')
  .replace(/k/gi, 'k')
  .replace(/\./g, '')
  .toLowerCase();

const distanceIndexMap = Object.fromEntries(
  DISTANCE_ORDER.map((distance, index) => [normalizeDistance(distance), index])
);

export const compareDistances = (first, second) => {
  const firstIndex = distanceIndexMap[normalizeDistance(first)] ?? Infinity;
  const secondIndex = distanceIndexMap[normalizeDistance(second)] ?? Infinity;
  if (firstIndex !== secondIndex) return firstIndex - secondIndex;
  return (first || '').localeCompare(second || '', undefined, { numeric: true, sensitivity: 'base' });
};
