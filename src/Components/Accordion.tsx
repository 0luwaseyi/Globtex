"use client"

import { useState } from 'react';

// Define the type for the accordion items
interface AccordionItem {
  title: string;
  content: string;
}

// Define the props type for the Accordion component
interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-md">
          <button
            onClick={() => handleClick(index)}
            className="w-full text-left py-4 px-6"
          >
            <div className="flex justify-between items-center">
              <span className='text-[#868591] font-semibold text-sm'>{item.title}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
          </button>
          {activeIndex === index && (
            <div className="px-6 py-4 pb-[2.5vw] border-l-2 border-[#627EEA] bg-gray-100 text-[#868591] rounded-l-lg text-xs">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
