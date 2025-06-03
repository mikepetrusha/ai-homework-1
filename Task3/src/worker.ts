// This is a Web Worker file that runs in a separate thread
// It performs the heavy computation without blocking the main UI thread

// Listen for messages from the main thread
self.onmessage = (event) => {
  if (event.data === 'start') {
    // Perform the heavy computation
    let t = 0;
    for (let i = 0; i < 1e8; i++) {
      t += i;
    }
    
    // Send the result back to the main thread
    self.postMessage(t);
  }
};

// TypeScript needs this to recognize this file as a module
export {};
