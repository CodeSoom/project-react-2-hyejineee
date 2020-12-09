import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <header>home</header>
      <div>
        {children}
      </div>
    </div>
  );
}
