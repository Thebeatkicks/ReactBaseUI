export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">Våra Tjänster</h1>
      <p className="text-muted">
        Här listar vi alla tjänster du erbjuder i ditt React UI-template. Du kan strukturera det med kort, ikoner eller sektioner beroende på behov.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-muted rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Komponenter</h2>
          <p className="text-sm text-muted-foreground">
            Återanvändbara UI-komponenter för snabb utveckling.
          </p>
        </div>
        <div className="bg-muted rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Layoutsystem</h2>
          <p className="text-sm text-muted-foreground">
            Grid, flex och responsiva helpers för strukturering.
          </p>
        </div>
        <div className="bg-muted rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Dark/Light Mode</h2>
          <p className="text-sm text-muted-foreground">
            Inbyggt temastöd med Zustand och ThemeProvider.
          </p>
        </div>
      </div>
    </div>
  )
}
