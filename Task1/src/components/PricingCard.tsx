import clsx from "clsx";

interface PricingCardProps {
  plan: string; // The plan name (e.g., "Standard", "Pro", "Expert")
  price: string; // The price value (e.g., "$100", "$200", "$500")
  features: string[]; // Array of feature descriptions
  isFeatured?: boolean; // Optional flag to highlight a specific card and make it larger
}

export const PricingCard = ({
  plan,
  price,
  features,
  isFeatured = false,
}: PricingCardProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col h-full w-full md:max-w-[25rem]",
        "transition-shadow hover:shadow-xl",
        "focus-within:outline focus-within:outline-blue-400 focus-within:outline-offset-2",
        {
          "bg-white text-slate-700 px-8": !isFeatured,
          "bg-slate-700 text-white": isFeatured,
          "z-10": isFeatured,
          "md:scale-110 md:translate-y-[-0.3rem]": isFeatured, // Makes featured card larger
        }
      )}
    >
      {/* Plan Name */}
      <div className="text-center pt-8 pb-2">
        <h3 className="text-lg font-medium">{plan}</h3>
      </div>

      {/* Price */}
      <div className="text-center px-6 pb-6">
        <p
          className={clsx("text-5xl font-bold", {
            "text-slate-800": !isFeatured,
            "text-white": isFeatured,
          })}
        >
          {price}
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-col flex-grow">
        {features.map((feature, index) => (
          <div
            key={index}
            className={clsx("py-4 px-4 text-center border-t", {
              "border-slate-200": !isFeatured,
              "border-slate-600": isFeatured,
            })}
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Subscribe Button */}
      <div className="p-8 text-center">
        <button
          className={clsx(
            "w-full py-2 uppercase text-sm font-medium tracking-wider",
            "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ",
            {
              "bg-transparent text-slate-700 border-slate-700 hover:bg-slate-50 focus:ring-slate-500":
                !isFeatured,
              "bg-transparent text-white border-white hover:bg-slate-600 focus:ring-white":
                isFeatured,
            }
          )}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};
