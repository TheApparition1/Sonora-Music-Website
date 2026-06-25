import { useState } from 'react'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Download', href: '#download' },
]

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
     <div style={{ position: 'relative' }}>
      <header style={{ position: 'absolute', inset: '0 0 auto 0', top: 0, zIndex: 50 }}>
        <nav aria-label="Global" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px' }}>
          <div style={{ display: 'flex', flex: 1 }}>
            <a href="#" style={{ margin: '-6px', padding: '6px', textDecoration: 'none' }}>
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Sonora Music</span>
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Sonora</span>
            </a>
          </div>
          <div style={{ display: 'flex' }}>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              style={{ margin: '-10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', padding: '10px', color: '#e5e7eb', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Open main menu</span>
              <svg style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div style={{ display: 'none', gap: '48px' }}>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} style={{ fontSize: '14px', fontWeight: 600, color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}>
                {item.name}
              </a>
            ))}
          </div>
          <div style={{ display: 'none', flex: 1, justifyContent: 'flex-end' }}>
            <a href="#download" style={{ fontSize: '14px', fontWeight: 600, color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}>
              Download <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{ position: 'fixed', inset: '0 0 auto 0', zIndex: 50, width: '100%', overflowY: 'auto', backgroundColor: 'rgba(17, 24, 39, 0.95)', backdropFilter: 'blur(24px)', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <a href="#" style={{ margin: '-6px', padding: '6px', textDecoration: 'none' }}>
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Sonora Music</span>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Sonora</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{ margin: '-10px', borderRadius: '8px', padding: '10px', color: '#e5e7eb', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Close menu</span>
                <svg style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div style={{ marginTop: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '24px' }}>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ margin: '-12px', display: 'block', borderRadius: '8px', padding: '12px', fontSize: '18px', fontWeight: 600, color: 'white', textDecoration: 'none', transition: 'backgroundColor 0.3s' }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <div style={{ position: 'relative', padding: '56px 24px 0' }}>
        <div style={{ margin: '0 auto', maxWidth: '42rem', paddingTop: '128px', paddingBottom: '224px' }}>
          <div style={{ display: 'none', marginBottom: '32px', justifyContent: 'center' }}>
            <div style={{ position: 'relative', borderRadius: '9999px', padding: '4px 12px', fontSize: '14px', color: '#d1d5db', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
              macOS Native Music Player{' '}
              <a href="#download" style={{ fontWeight: 600, color: '#d8b4fe', textDecoration: 'none' }}>
                <span aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />
                Download now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 600, color: 'white', marginBottom: '32px' }}>
              Sonora Music
            </h1>
            <p style={{ marginTop: '32px', fontSize: '18px', fontWeight: 500, color: '#d1d5db', lineHeight: 1.5 }}>
              A simple macOS native music player, made using Tauri, Rust and SvelteKit. 
              Play back local music files with ease.
            </p>
            <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
              <a
                href="#download"
                style={{ borderRadius: '8px', backgroundColor: '#a855f7', padding: '10px 14px', fontSize: '14px', fontWeight: 600, color: 'white', textDecoration: 'none', transition: 'backgroundColor 0.3s' }}
              >
                Download for macOS
              </a>
              <a href="https://github.com/yourusername/sonora" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', fontWeight: 600, color: 'white', textDecoration: 'none', transition: 'color 0.3s' }}>
                View on GitHub <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
