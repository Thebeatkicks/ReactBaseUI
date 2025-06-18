// src/pages/docs/CarouselDoc.jsx
import React from "react"
import ImageCarousel from "../../components/ui/ImageCarousel"
import InstallHint from "../../components/docs/InstallHint"
import CodeBlock   from "../../components/docs/CodeBlock"

// Relativa imports av demo‐bilder
import first  from "../../assets/images/first.png"
import second from "../../assets/images/second.png"
import third  from "../../assets/images/third.png"
import fourth from "../../assets/images/fourth.png"

export default function CarouselDoc() {
  // Kodsnippets för CodeBlock
  const installCode    = `npm install prop-types lucide-react`
  const importCode     = `import ImageCarousel from "../../components/ui/ImageCarousel"`

  const usageCover = `// Cover: fyller och beskär
<ImageCarousel
  images={[first, second, third, fourth]}
  className="w-full h-64"
  objectFit="cover"
/>`

  const usageContain = `// Contain: visar hela bilden utan beskärning
<ImageCarousel
  images={[first, second, third, fourth]}
  className="w-full h-64"
  objectFit="contain"
/>`

  return (
    <div className="space-y-12">
      {/* 1. Title */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Image Carousel</h1>
        <p className="text-muted">
          A responsive slider with arrows, dots & optional autoplay.
        </p>
      </header>

      {/* 2. Installation */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Installation</h2>
        <InstallHint name="ImageCarousel.jsx" path="/components/ui" />
        <CodeBlock language="bash" code={installCode} />
        <CodeBlock language="jsx"  code={importCode} />
      </section>

      {/* 3. Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage Examples</h2>

        {/* Cover */}
        <div className="space-y-2">
          <h3 className="font-medium">Cover (default)</h3>
          <div className="border p-4">
            <ImageCarousel
              images={[first, second, third, fourth]}
              className="w-full h-64"
              objectFit="cover"
            />
          </div>
          <CodeBlock language="jsx" code={usageCover} />
        </div>

        {/* Contain */}
        <div className="space-y-2">
          <h3 className="font-medium">Contain</h3>
          <div className="border p-4 bg-muted/10 dark:bg-muted/20">
            <ImageCarousel
              images={[first, second, third, fourth]}
              className="w-full h-64"
              objectFit="contain"
            />
          </div>
          <CodeBlock language="jsx" code={usageContain} />
        </div>
      </section>

        {/* Contain: visa hela bilden, centrerad */}
        <div className="space-y-2">
        <h3 className="font-medium">Contain (ingen beskärning)</h3>
        <div className="flex items-center justify-center w-96 h-96 bg-muted/10">
            <ImageCarousel
            images={[first, second, third, fourth]}
            className="w-96 h-96"
            objectFit="contain"
            />
        </div>
        <CodeBlock
            language="jsx"
            code={`<ImageCarousel
        images={[first, second, third, fourth]}
        className="w-96 h-96 bg-muted/10 dark:bg-muted/20"
        objectFit="contain"
        />`}
        />
        </div>


      {/* 4. Props */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Props</h2>
        <ul className="list-disc list-inside text-sm text-muted space-y-1">
          <li><code>images: string[]</code> – krav, paths eller imports.</li>
          <li><code>className: string</code> – Tailwind classes för storlek (ex: <code>"w-full h-64"</code>).</li>
          <li><code>showArrows, showDots, autoPlay</code> – toggles för UI‐element.</li>
          <li><code>autoPlayInterval: number</code> – ms mellan slides.</li>
          <li><code>objectFit: "cover" | "contain"</code> – hur bilden skalar/beskärs.</li>
        </ul>
      </section>

      {/* 5. Styling Tips */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Styling Tips</h2>
        <ul className="list-disc list-inside text-sm text-muted space-y-1">
          <li>Sätt en höjd med Tailwind: <code>w-full h-64</code> eller <code>h-screen</code>.</li>
          <li>Använd <code>objectFit="cover"</code> för att fylla & beskär ruta.</li>
          <li>Använd <code>objectFit="contain"</code> för att visa hela bilden.</li>
          <li>Anpassa högsta höjd: <code>max-h-80</code> i mindre cards.</li>
          <li>Justera övergångshastighet med <code>transition-transform duration-700</code>.</li>
        </ul>
      </section>
    </div>
  )
}
