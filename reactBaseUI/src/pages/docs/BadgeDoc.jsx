// src/pages/docs/BadgeDoc.jsx
import React from "react"
import Badge from "../../components/ui/Badge"
import InstallHint from "../../components/docs/InstallHint"
import CodeBlock from "../../components/docs/CodeBlock"

export default function BadgeDoc() {
  const installCode = `npm install clsx`
  const importCode  = `import Badge from "../../components/ui/Badge"`

  // Definiera dina varianter med namn och kod­sträng
  const variants = [
    { name: "Default",   code: `<Badge>New</Badge>` },
    { name: "Primary",   code: `<Badge variant="primary">Primary</Badge>` },
    { name: "Secondary", code: `<Badge variant="secondary">Secondary</Badge>` },
    { name: "Success",   code: `<Badge variant="success">Success</Badge>` },
    { name: "Warning",   code: `<Badge variant="warning">Warning</Badge>` },
    { name: "Danger",    code: `<Badge variant="danger">Error</Badge>` },
  ]

  return (
    <div className="space-y-12">

      {/* 1. Title */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Badge</h1>
        <p className="text-muted">Pill-style label for statuses and tags</p>
      </header>

      {/* 2. Installation */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Installation</h2>
        <InstallHint name="Badge.jsx" path="/components/ui" />
        <CodeBlock language="bash" code={installCode} />
        <CodeBlock language="jsx"  code={importCode} />
      </section>

      {/* 3. Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>

        {/* A) Rendera alla badges i en rad */}
        <div className="flex flex-wrap gap-4 items-center">
          {variants.map(v => (
            <Badge key={v.name} variant={v.name.toLowerCase()}>
              {v.name}
            </Badge>
          ))}
        </div>

        {/* B) Visa kod­exempel för varje variant */}
        {variants.map(v => (
          <div key={v.name} className="space-y-1">
            <h3 className="font-medium">{v.name}</h3>
            <CodeBlock language="jsx" code={v.code} />
          </div>
        ))}
      </section>

 {/* 4. Styling Tips */}
<section className="space-y-6">
  <h2 className="text-xl font-semibold">Styling Tips</h2>

  {/* 4a. Extra padding */}
  <div className="space-y-1">
    <h3 className="font-medium">Extra Padding</h3>
    {/* Renderat exempel */}
    <Badge className="px-4 py-2">Padded Badge</Badge>
    {/* Kod */}
    <CodeBlock language="jsx" code={`<Badge className="px-4 py-2">Padded Badge</Badge>`} />
  </div>

  {/* 4b. Ändrad textstorlek */}
  <div className="space-y-1">
    <h3 className="font-medium">Text Size</h3>
    <Badge className="text-xs">Small Text</Badge>
    <Badge className="text-lg">Large Text</Badge>
    <CodeBlock
      language="jsx"
      code={`<>
  <Badge className="text-xs">Small Text</Badge>
  <Badge className="text-lg">Large Text</Badge>
</>`}
    />
  </div>

  {/* 4c. Ring för kontrast */}
  <div className="space-y-1">
    <h3 className="font-medium">With Ring</h3>
    <Badge className="ring-1 ring-primary">Outlined</Badge>
    <CodeBlock
      language="jsx"
      code={`<Badge className="ring-1 ring-primary">Outlined</Badge>`}
    />
  </div>

  {/* 4d. Anpassad opacitet */}
  <div className="space-y-1">
    <h3 className="font-medium">Custom Opacity</h3>
    <Badge variant="success" className="bg-success/50">50% Success</Badge>
    <CodeBlock
      language="jsx"
      code={`<Badge variant="success" className="bg-success/50">50% Success</Badge>`}
    />
  </div>

  {/* 4e. Rundade hörn */}
  <div className="space-y-1">
    <h3 className="font-medium">Rounded Corners</h3>
    <Badge className="rounded-full">Rounded Full</Badge>
    <Badge className="rounded-lg">Rounded Large</Badge>
    <CodeBlock
      language="jsx"
      code={`<>
  <Badge className="rounded-full">Rounded Full</Badge>
  <Badge className="rounded-lg">Rounded Large</Badge>
</>`}
    />
  </div>
</section>



    </div>
  )
}
