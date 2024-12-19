import React from 'react';
import PricingRating from './PricingRating';
import PricingPoint from './PricingPoint';
export default function PricingItem({
  buttonBGC,
  title,
  pricing,
  colorIcon,
  color,
}) {
  return (
    <>
      <div className="bg-[#1b1929] h-[530px]  w-full rounded-2xl">
        <div className=" text-white  flex flex-col justify-between items-center h-full gap-7 mt-9">
          <div className="flex flex-col justify-around text-center gap-3 pt-10">
            <div className="flex flex-col gap-2">
              <PricingRating title={title} pricing={pricing} />
            </div>
            <div className="relative flex items-center justify-center  ">
              <div className="h-px bg-neutral-400 my-3 w-full absolute"></div>
              <span className="text-7xl text-[#ffffff08]">{title}</span>
            </div>

            <PricingPoint colorIcon={colorIcon} point={'Concept development'} />
            <PricingPoint colorIcon={colorIcon} point={'UI design'} />
            <PricingPoint
              colorIcon={colorIcon}
              color={title === 'BASIC' && 'text-gray-700'}
              point={'Configuration management'}
            />
            <PricingPoint
              colorIcon={colorIcon}
              color={title === 'BASIC' && 'text-gray-700'}
              point={'Software quality assurance'}
            />
            <PricingPoint
              colorIcon={colorIcon}
              color={
                (title === 'BASIC' || title === 'Optimal') && 'text-gray-700'
              }
              point={'App integration'}
            />
          </div>
          <div className="w-full">
            <button
              className={`text-white w-full text-base  ${buttonBGC} py-4 hover:bg-black  cursor-pointer bottom-0 mb-0`}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
