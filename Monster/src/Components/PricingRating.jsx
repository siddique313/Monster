import React from 'react';

export default function PricingRating({ pricing, title }) {
  return (
    <>
      <span className="text-xl">{title}</span>
      <span className="text-4xl">{pricing}</span>
      <span className="text-2xl">starting at</span>
    </>
  );
}
