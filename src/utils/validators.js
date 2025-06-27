export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

export function isValidShortcode(code) {
  return /^[a-zA-Z0-9_-]{3,20}$/.test(code);
}
