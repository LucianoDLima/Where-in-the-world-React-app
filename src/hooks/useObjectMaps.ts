/**
 * Get property from an object within an object
 */
function getDeeperProperty<T, K extends keyof T>(obj: { [key: string]: T }, property: K): T[K][] {
  return Object.keys(obj).map((key) => obj[key][property]);
}

/**
 * Check if target is either an object or array,
 * then get all properties from it if it's one layer deep
 */
function getAllProperties<T>(obj: T[] | { [property: string]: string }): string {
  if (Array.isArray(obj)) {
    return obj.join(', ');
  } else {
    let formattedString = '';

    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        if (formattedString) {
          formattedString += ', ';
        }
        formattedString += obj[property];
      }
    }

    return formattedString;
  }
}

export { getDeeperProperty, getAllProperties };
