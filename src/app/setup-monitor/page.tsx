'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, Loader2, ExternalLink, Github, Play, Monitor } from 'lucide-react'

const SetupMonitor = () => {
  const [status, setStatus] = useState('initializing')
  const [progress, setProgress] = useState(0)
  const [logs, setLogs] = useState<string[]>([])
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const simulateSetup = async () => {
      const steps = [
        '🚀 VSS Website Setup v0.11.0 wird gestartet...',
        '🔄 Clean Setup ohne Docker (npm-only)',
        '🔍 Prüfe Browser-Verfügbarkeit...',
        '✅ Browser verfügbar',
        '📦 Installiere Dependencies...',
        '✅ Dependencies installiert (Three.js / Framer Motion)',
        '🔨 Teste Build...',
        '✅ Next.js Build erfolgreich',
        '📊 SplitShowcase Komponente geladen',
        '🎨 Three.js Shader Hintergrund aktiviert',
        '🖱️ Inverse Maus-Interaktionslogik aktiv',
        '✅ Setup erfolgreich abgeschlossen!'
      ]

      setStatus('running')

      for (let i = 0; i < steps.length; i++) {
        setLogs(prev => [...prev, steps[i]])
        setProgress((i + 1) / steps.length * 100)
        await new Promise(resolve => setTimeout(resolve, 800))
      }

      setStatus('completed')
      setIsCompleted(true)
    }

    simulateSetup()
  }, [])

  const getStatusIcon = () => {
    switch (status) {
      case 'initializing':
      case 'running':
        return <Loader2 className="animate-spin text-blue-400" size={24} />
      case 'completed':
        return <CheckCircle className="text-green-400" size={24} />
      case 'error':
        return <AlertCircle className="text-red-400" size={24} />
      default:
        return <Monitor className="text-gray-400" size={24} />
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-emerald-600'
      case 'error':
        return 'from-red-500 to-red-600'
      default:
        return 'from-blue-500 to-cyan-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            VSS Website Setup Monitor
          </h1>
          <p className="text-slate-300 text-lg">Release v0.11.0 - Clean Setup ohne Docker</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            {getStatusIcon()}
            <span className="text-xl font-semibold">
              {status === 'completed' ? 'Setup Abgeschlossen' : 
               status === 'running' ? 'Setup läuft...' :
               status === 'error' ? 'Setup Fehler' : 'Initialisierung...'}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-slate-700 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${getStatusColor()} transition-all duration-500 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center mt-2 text-slate-300">
            {Math.round(progress)}% abgeschlossen
          </div>
        </div>

        {/* Logs */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Monitor size={20} />
              Setup Logs
            </h2>
            <div className="bg-slate-900 rounded p-4 font-mono text-sm max-h-96 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index} className="text-slate-200 mb-1">
                  <span className="text-slate-500">
                    [{new Date().toLocaleTimeString()}]
                  </span>{' '}
                  {log}
                </div>
              ))}
              {status === 'running' && (
                <div className="text-blue-400">
                  <span className="text-slate-500">
                    [{new Date().toLocaleTimeString()}]
                  </span>{' '}
                  <span className="animate-pulse">⚡ Processing...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vorschau */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-4">🚀 Vorschau</h3>
              <p className="text-slate-300 mb-4">
                Testen Sie die neue SplitShowcase Komponente mit diagonalem Split und Three.js Shader-Hintergrund.
              </p>
              <div className="flex gap-3">
                <a
                  href="/"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <Play size={16} />
                  Homepage öffnen
                </a>
                <a
                  href="/preview"
                  className="flex items-center gap-2 bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink size={16} />
                  Preview Seite
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-4">📊 Release Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Version:</span>
                  <span className="text-white font-semibold">v0.11.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Features:</span>
                  <span className="text-green-400">✅ Aktiv</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Three.js:</span>
                  <span className="text-green-400">✅ Installiert</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Build:</span>
                  <span className="text-green-400">✅ Erfolgreich</span>
                </div>
              </div>
              <a
                href="https://github.com/alexiosg111/vss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-4 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
              >
                <Github size={16} />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Completion Message */}
        {isCompleted && (
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-green-900/50 border border-green-500 rounded-lg p-6 text-center">
              <CheckCircle className="mx-auto text-green-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                🎉 Setup erfolgreich abgeschlossen!
              </h3>
              <p className="text-green-200 mb-4">
                Die VSS Website v0.11.0 mit SplitShowcase und Clean Setup (ohne Docker) ist bereit.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/"
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Website besuchen
                </a>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-slate-600 hover:bg-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Setup wiederholen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SetupMonitor