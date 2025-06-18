// src/pages/docs/ImageDoc.jsx
import React from "react"
import Image from "../../components/ui/Image"
import InstallHint from "../../components/docs/InstallHint"
import CodeBlock from "../../components/docs/CodeBlock"
import first from "../../assets/images/first.png"


export default function ImageDoc() {
  // Kodexempel
  const installCode = `npm install prop-types`
  const importCode  = `import Image from "../../components/ui/Image"`

  const localExampleCode = `import logo from "../../assets/images/logo.png"\n\n<Image src={logo} alt="Logo" className="w-32 h-32" />`
  const urlExampleCode   = `<Image src="https://picsum.photos/2000/1000" alt="Random" className="w-full h-64 object-cover rounded-lg" />`

  return (
    <div className="space-y-12">

      {/* 1. Title */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Image</h1>
        <p className="text-muted">
          A simple wrapper around <code>&lt;img&gt;</code> with Tailwind-styling, lazy loading & future extensions.
        </p>
      </header>

      {/* 2. Installation & import */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Installation</h2>
        <InstallHint name="Image.jsx" path="/components/ui" />
        <CodeBlock language="bash" code={installCode} />
        <CodeBlock language="jsx"  code={importCode} />
      </section>

      {/* 3. Examples */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Examples</h2>

        {/* 3a. Lokal bild */}
        <div className="space-y-1">
          <h3 className="font-medium">Local file</h3>
          <div className="border p-4">
            <Image src={first} alt="Logo" className="w-32 h-32" />
          </div>
          <CodeBlock language="jsx" code={localExampleCode} />
        </div>

        {/* 3b. Extern URL */}
        <div className="space-y-1">
          <h3 className="font-medium">External URL</h3>
          <div className="border p-4">
            {/* Exempel med Picsum (fungerar alltid) */}
              <Image
                src="https://picsum.photos/2000/1000"
                alt="Random placeholder"
                className="w-full h-64 object-cover rounded-lg"
              />
          </div>
          <CodeBlock language="jsx" code={urlExampleCode} />
        </div>
      </section>

      {/* 4. Styling Tips */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Styling Tips</h2>
        <p className="text-sm text-muted">
          • För att behålla bildens proportioner, kombinera <code>object-contain</code> eller <code>object-cover</code> med en fixerad höjd/­bredd.<br/>
          • Rundade hörn: <code>className="rounded-full"</code> eller t.ex. <code>"rounded-lg"</code>.<br/>
          • Lägg på skugga: <code>className="shadow-md"</code>.<br/>
          • Responsiv bredd: <code>className="w-full max-w-sm"</code>.
        </p>
      </section>

      {/* 5. Var du lägger bilderna */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Asset Structure</h2>
        <p className="text-sm text-muted">
          • **Public folder** (statisk): lägg bilder i <code>/public/assets/images</code> och referera med <code>src="/assets/images/foo.jpg"</code>.<br/>
          • **Src folder** (bundlad): skapa <code>/src/assets/images</code> och importera dem, t.ex. <code>import img from "../../assets/images/foo.png"</code>.<br/>
          • Välj public för enkla statiska filer, src/import om du vill packa om och få namnhasheter.
        </p>
      </section>

      {/* 6. Illustrationsförslag */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Image Sources</h2>
        <ul className="list-disc list-inside text-sm text-muted">
          <li>
            <a
              href="https://unsplash.com"
              className="hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >Unsplash</a> – fri, högupplösta bilder för demos.
          </li>
          <li>
            <a
              href="https://picsum.photos"
              className="hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >Picsum Photos</a> – placeholder‐bilder med slumpmässigt innehåll.
          </li>
          <li>
            <a
              href="https://placeholder.com"
              className="hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >Placeholder.com</a> – enkel generering av placeholders.
          </li>
        </ul>
      </section>
    </div>
  )
}
