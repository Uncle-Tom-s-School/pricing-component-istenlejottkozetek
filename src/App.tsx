import { createContext, useEffect, useState } from "react"
import PriceCard from "./components/PriceCard"
import ToggleSwitch from "./components/ToggleSwitch"

export type PricePlan = {
  id: number
  name: string
  pricePerMonth: number
  features: string[]
  highlighted: boolean
}

export type PricingMode = "monthly" | "yearly"

export const PricingContext = createContext<PricingMode>("monthly")

function App() {
  const [plans, setPlans] = useState<PricePlan[]>([])
  const [mode, setMode] = useState<PricingMode>("monthly")

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setPlans(data))
  }, [])

  return (
    <PricingContext.Provider value={mode}>
      <div className="container">
        <ToggleSwitch mode={mode} setMode={setMode} />

        <div className="cards">
          {plans.map(plan => (
            <PriceCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </PricingContext.Provider>
  )
}

export default App
