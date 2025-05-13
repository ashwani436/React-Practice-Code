import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceTimeout = useRef(null);
  const lastThrottleCall = useRef(0);

  // -------------------------------------
  // ✅ Debounce Function: Wait after input
  // -------------------------------------
  const handleDebouncedInput = (value) => {
    // Clear previous timer
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    // Set new timer: only logs after 500ms of no typing
    debounceTimeout.current = setTimeout(() => {
      console.log('Debounced input:', value);
    }, 500);
  };

  // Called when user types
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleDebouncedInput(value);
  };

  // -------------------------------------
  // ✅ Throttle Function: Limit scroll rate
  // -------------------------------------
  const handleThrottleScroll = () => {
    const now = Date.now();

    if (now - lastThrottleCall.current >= 1000) {
      console.log('Throttled scroll at', new Date().toLocaleTimeString());
      lastThrottleCall.current = now;
    }
  };

  // Attach throttled scroll listener once
  useEffect(() => {
    window.addEventListener('scroll', handleThrottleScroll);

    return () => {
      window.removeEventListener('scroll', handleThrottleScroll);
    };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔁 Debounce Example (Search Input)</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      <h2 style={{ marginTop: '2rem' }}>⏱ Throttle Example (Scroll Down)</h2>
      <div style={{ height: '1500px', background: '#f0f0f0' }} />
    </div>
  );
}

export default App;

// 🧠 What's Happening Here?
// 🔁 Debounce
// The handleDebouncedInput waits for 500ms after the user stops typing.

// If the user keeps typing, the timer resets — only the final input is logged.

// ⏱ Throttle
// The handleThrottleScroll logs scroll info at most once every 1000ms, even if scroll fires many times per second.

// Prevents performance issues from too many scroll calls.
