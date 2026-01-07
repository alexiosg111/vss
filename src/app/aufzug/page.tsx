import Image from 'next/image'
import Link from 'next/link'

export default function AufzugPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="text-sm font-medium text-dark-600 hover:text-dark-900">
          ← Zur Startseite
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold text-dark-900">Aufzüge</h1>
            <p className="mt-4 text-lg text-dark-600 leading-relaxed">
              Dieser Bereich dient als Platzhalter für den Aufzüge-Service. In v0.7.0 liegt der Fokus auf der exakten
              Above-the-Fold-Nachbildung der VSS-Startseite.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <Image
              src="/vss/homepage/aufzuege.jpg"
              alt="Aufzüge"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}
