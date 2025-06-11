import { LogIn } from "lucide-react"

export default function LoginIcon() {
  return (
    <a
      href="/admin"
      title="Admin/Login"
      className="hover:text-primary transition"
    >
      <LogIn className="w-5 h-5" />
    </a>
  )
}
