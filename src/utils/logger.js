// This can re-use from logging-middleware if you copy it here
export function logEvent(type, message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${type}] ${message}`;
  console.log(logMessage);
}

