import type { PricingMode } from "../App"

interface Props {
  mode: PricingMode
  setMode: (mode: PricingMode) => void
}

const ToggleSwitch = ({ mode, setMode }: Props) => {
  return (
    <div className="toggle">
      <span className={mode === "monthly" ? "active" : ""}>Monthly</span>

      <label className="switch">
        <input
          type="checkbox"
          checked={mode === "yearly"}
          onChange={() =>
            setMode(mode === "monthly" ? "yearly" : "monthly")
          }
        />
        <span className="slider" />
      </label>

      <span className={mode === "yearly" ? "active" : ""}>Yearly</span>
    </div>
  )
}

export default ToggleSwitch
