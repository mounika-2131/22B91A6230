// logging-middleware/logger.js

export function logEvent(type, message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${type}] ${message}`;
  
  // Here you can send it to a backend API or store in localStorage
  console.log(logMessage); // No console.log directly in app; use this only
}
