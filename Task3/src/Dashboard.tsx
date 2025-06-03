import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Create a new worker instance
    const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
    
    // Listen for messages from the worker
    worker.onmessage = (event) => {
      // Update state with the result from the worker
      setD(event.data);
      setIsLoading(false);
    };
    
    // Start the worker
    worker.postMessage('start');
    
    // Clean up the worker when the component unmounts
    return () => {
      worker.terminate();
    };
  }, []);
  
  return (
    <div className="dashboard">
      {isLoading ? (
        <div className="loading">Calculating...</div>
      ) : (
        <div className="result">Result: {d}</div>
      )}
    </div>
  );
}
