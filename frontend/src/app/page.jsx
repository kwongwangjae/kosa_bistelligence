import Image from "next/image";

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '2rem', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '20px'
    }}>
      <main style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', width: '100%', maxWidth: '800px' }}>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <div style={{ textAlign: 'center', fontSize: '1.1rem', color: '#333' }}>
          <p style={{ marginBottom: '1rem' }}>
            Get started by editing <code style={{ backgroundColor: '#f3f3f3', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>src/app/page.jsx</code>.
          </p>
          <p>Save and see your changes instantly.</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '0.8rem 2rem', 
              borderRadius: '9999px', 
              backgroundColor: '#000', 
              color: '#fff', 
              textDecoration: 'none', 
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            Read our docs
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '0.8rem 2rem', 
              borderRadius: '9999px', 
              border: '1px solid #eaeaea', 
              textDecoration: 'none', 
              color: '#000',
              fontWeight: '600'
            }}
          >
            Learn Next.js
          </a>
        </div>
      </main>

      <footer style={{ marginTop: '5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', opacity: 0.6 }}>
        <a
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}
        >
          <Image
            aria-hidden
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Templates
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
