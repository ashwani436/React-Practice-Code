// App.js
import React, { Suspense } from 'react';

// 🔀 Lazy load Dashboard
const Dashboard = React.lazy(() => import('../Higherorder/Dashboard'));

function LazyLoading() {
  return (
    <div>
      <h1>My App</h1>
      {/* 👇 Suspense will show fallback while Dashboard is loading */}
      <Suspense fallback={<p>Loading Dashboard...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default LazyLoading;
