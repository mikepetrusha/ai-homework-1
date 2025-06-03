import React from 'react';
import clsx from 'clsx';

interface PricingCardProps {
  plan: string;         // The plan name (e.g., "Standard", "Pro", "Expert")
  price: string;        // The price value (e.g., "$100", "$200", "$500")
  features: string[];   // Array of feature descriptions
  isFeatured?: boolean; // Optional flag to highlight a specific card
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div 
      className={clsx(
        'flex flex-col h-full rounded-md',
        'transition-shadow duration-300 hover:shadow-xl',
        'focus-within:ring-2 focus-within:ring-blue-500',
        isFeatured ? 'bg-slate-600 text-white' : 'bg-white text-slate-700'
      )}
    >
      <div className="p-6 text-center">
        <h3 className="text-lg font-medium mb-2">{plan}</h3>
        <p className="text-5xl font-bold mb-6">{price}</p>
      </div>
      
      <div className="flex-grow">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={clsx(
              'py-4 px-6 text-center border-t',
              isFeatured ? 'border-slate-500' : 'border-gray-200'
            )}
          >
            {feature}
          </div>
        ))}
      </div>
      
      <div className="p-6 text-center">
        <button
          className={clsx(
            'uppercase font-medium py-2 px-6 rounded-md',
            'transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            isFeatured
              ? 'bg-white text-slate-700 hover:bg-gray-100 focus:ring-white'
              : 'bg-slate-700 text-white hover:bg-slate-800 focus:ring-slate-700'
          )}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
