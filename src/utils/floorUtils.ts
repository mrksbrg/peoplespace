
export const extractFloor = (location: string): string => {
  if (!location) return '2nd Floor'
  
  const floorMatch = location.match(/(\d+(?:st|nd|rd|th)\s+Floor)/i)
  return floorMatch ? floorMatch[1] : '2nd Floor'
}
