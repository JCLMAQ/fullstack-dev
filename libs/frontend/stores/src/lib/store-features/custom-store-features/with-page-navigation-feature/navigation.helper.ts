/**
 * Restreint une position dans les limites valides [0, last]
 * @param current - Position courante à valider
 * @param last - Position maximale autorisée
 * @returns Positions sécurisées et normalisées
 */
export function clampPosition(current: number, last: number) {
  const safeLast = Math.max(last, 0);
  const safeCurrent = Math.min(Math.max(current, 0), safeLast);
  return { current: safeCurrent, last: safeLast };
}

/**
 * Calcule les indicateurs de navigation basés sur la position actuelle
 * @param current - Position actuelle
 * @param last - Dernière position
 * @returns Objet avec les indicateurs hasNext, hasPrevious, isFirst, isLast
 */
export function computeNavigation(current: number, last: number) {
  return {
    hasNext: current < last,
    hasPrevious: current > 0,
    isFirst: current === 0,
    isLast: current === last,
  };
}
