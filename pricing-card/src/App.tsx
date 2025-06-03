import PricingCard from './components/PricingCard'

function App() {
  return (
    <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-white mb-10">Pricing</h1>
      
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6">
        <PricingCard 
          plan="Standard" 
          price="$100" 
          features={[
            "50,000 Requests",
            "4 contributors",
            "Up to 3 GB storage space"
          ]} 
        />
        
        <PricingCard 
          plan="Pro" 
          price="$200" 
          features={[
            "100,000 Requests",
            "7 contributors",
            "Up to 6 GB storage space"
          ]}
          isFeatured={true} 
        />
        
        <PricingCard 
          plan="Expert" 
          price="$500" 
          features={[
            "200,000 Requests",
            "11 contributors",
            "Up to 10 GB storage space"
          ]} 
        />
      </div>
    </div>
  )
}

export default App
