// src/pages/docs/ButtonDoc.jsx
import React from "react"
import Button from "../../components/ui/Button"
import InstallHint from "../../components/docs/InstallHint"
import CodeBlock from "../../components/docs/CodeBlock"
import { ArrowRight, Sun } from "lucide-react"
import { Link } from "react-router-dom"

export default function ButtonDoc() {
  // Kodsträngar för CodeBlock
  const installCode = `npm install clsx`
  const importCode = `import Button from "../../components/ui/Button"`
  const variants = [
    { name: "Primary", code: `<Button variant="primary">Primary</Button>` },
    { name: "Secondary", code: `<Button variant="secondary">Secondary</Button>` },
    { name: "Outline", code: `<Button variant="outline">Outline</Button>` },
    { name: "Ghost", code: `<Button variant="ghost">Ghost</Button>` },
    { name: "Transparent", code: `<Button variant="transparent">Transparent</Button>` },
  ]
  const iconCode = `<Button variant="primary"><ArrowRight className="w-4 h-4 mr-2" />Continue</Button>`
  const internalLinkCode = `<Link to="/about"><Button>About Us</Button></Link>`
  const externalLinkCode = `<a href="https://example.com" target="_blank" rel="noopener noreferrer">\n  <Button>Visit Site</Button>\n</a>`

  return (
    <div className="space-y-12">

      {/* 1. Title */}
      <header>
        <h1 className="text-3xl font-bold">Button</h1>
        <p className="text-muted">Reusable and customizable button component</p>
      </header>

      {/* 2. Installation */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Installation</h2>
        <InstallHint name="Button.jsx" path="/components/ui" />
        <CodeBlock language="bash" code={installCode} />
        <CodeBlock language="jsx" code={importCode} />
      </section>

      {/* 3. Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {variants.map(v => (
            <Button key={v.name.toLowerCase()} variant={v.name.toLowerCase()}>
              {v.name}
            </Button>
          ))}
        </div>
        {variants.map(v => (
          <div key={v.name} className="space-y-1">
            <h3 className="font-medium">{v.name}</h3>
            <CodeBlock language="jsx" code={v.code} />
          </div>
        ))}
      </section>

      {/* 4. With Icon */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">With Icon</h2>
        <p className="text-muted">Find Icons on Lucide React. Import them and add it where you call the Component</p>
        {/* renderat exempel */}
        <Button variant="primary">
          <ArrowRight className="w-4 h-4 mr-2" />
          Continue
        </Button>
        <CodeBlock language="jsx" code={iconCode} />
      </section>

      {/* 5. Linking */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Linking</h2>
        <div className="space-y-1">
          <h3 className="font-medium">Internal</h3>
          <Link to="/about">
            <Button>About Us</Button>
          </Link>
          <CodeBlock language="jsx" code={internalLinkCode} />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium">External</h3>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Visit Site</Button>
          </a>
          <CodeBlock language="jsx" code={externalLinkCode} />
        </div>
      </section>
    </div>
  )
}
