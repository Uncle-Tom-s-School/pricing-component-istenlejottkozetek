import { useContext } from "react"
import { PricingContext } from "../App"
import type { PricePlan } from "../App"

interface Props {
  plan: PricePlan
}

const PriceCard = ({ plan }: Props) => {
  const mode = useContext(PricingContext)

  const price =
    mode === "monthly"
      ? plan.pricePerMonth
      : plan.pricePerMonth * 11

  return (
    <div className={`card ${plan.highlighted ? "highlighted" : ""}`}>
      <h3>{plan.name}</h3>

      <p className="price">
        ${price.toFixed(2)}
        {mode === "yearly" && <span className="period"> / year</span>}
      </p>

      <ul>
        {plan.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <button>Try for Free</button>
    </div>
  )
}

export default PriceCard
