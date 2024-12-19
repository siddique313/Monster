import React from 'react';
import PricingItem from './PricingItem';

export default function Pricing() {
  return (
    <div>
      <div className="text-center text-5xl">
        <h1>Pricing</h1>
      </div>
      <div className="flex w-full gap-2 px-9 mt-20">
        <PricingItem
          title={'BASIC'}
          pricing={'$500.00'}
          buttonBGC={'bg-gray-700'}
          colorIcon={''}
        />
        <PricingItem
          title={'Optimal'}
          pricing={'$800.00'}
          buttonBGC={'bg-blue-800'}
          colorIcon={''}
        />
        <PricingItem
          title={'Ultimate'}
          pricing={'$1200.00'}
          buttonBGC={'bg-gray-700'}
          colorIcon={''}
        />
      </div>
    </div>
  );
}
