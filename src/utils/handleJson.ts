import { isObject } from 'lodash-es';

export function safeJsonParse(value: any, defaultValue = {}) {
  if (isObject(value)) {
    return value;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}

export function prettyJsonString(value: string | object) {
  return JSON.stringify(safeJsonParse(value), null, 2);
}
