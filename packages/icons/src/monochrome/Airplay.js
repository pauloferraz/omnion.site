import React from 'react';

export default function Airplay(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <rect width={20} height={15} x={2} y={3} className="uim-tertiary" rx={3} />
      <path className="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z" />
    </svg>
  );
}
