import { Github } from "lucide-react"

export default function GithubIcon() {
  return (
    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
      title="GitHub"
      className="hover:text-primary transition"
    >
      <Github className="w-5 h-5" />
    </a>
  )
}
