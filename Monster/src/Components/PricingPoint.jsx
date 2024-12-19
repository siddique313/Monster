import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export default function PricingPoint({ colorIcon, color, point }) {
  return (
    <div>
      <span className="text-xl flex items-center gap-3">
        <span
          className={`text-sm ${
            colorIcon === '' ? 'text-blue-900' : 'text-gray-700'
          } text-blue-800`}
        >
          <FaCheck />
        </span>
        <span className={`${color ? color : 'text-white'}`}>{point}</span>
      </span>
    </div>
  );
}
