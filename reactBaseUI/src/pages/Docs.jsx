export default function Docs() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">Dokumentation</h1>
      <p className="text-muted">
        Här kan du dokumentera hur man använder Aurora UI Template, komponenter, teman och struktur.
      </p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Installation</h2>
          <p className="text-sm text-muted-foreground">
            Klona projektet, kör <code className="bg-gray-800 text-white px-2 py-1 rounded">npm install</code> och starta med <code className="bg-gray-800 text-white px-2 py-1 rounded">npm run dev</code>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Struktur</h2>
          <p className="text-sm text-muted-foreground">
            Projektet använder <code>/components</code> för UI, <code>/pages</code> för rutter och <code>/contexts</code> för global state.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Teman</h2>
          <p className="text-sm text-muted-foreground">
            Styrs via Zustand och ThemeProvider. Du kan växla mellan dark, light och system.
          </p>
        </section>
      </div>
    </div>
  )
}
