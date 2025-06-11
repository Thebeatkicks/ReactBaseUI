import { HandCoins } from "lucide-react"

export default function DonateIcon() {
  return (
    <a
      href="https://buymeacoffee.com/"
      target="_blank"
      rel="noreferrer"
      title="Donate"
      className="hover:text-primary transition"
    >
      <HandCoins className="w-5 h-5" />
    </a>
  )
}
