import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

function formatDate(date: string) {
  const [year, month, day] = date.split(/[.-]/)
  return `${day}/${month}/${year}`
}

const fonts = [
  {
    name: 'Inter',
    data: readFileSync(path.join(process.cwd(), 'app', '_fonts', 'Inter-Medium.ttf')),
    style: 'normal' as const,
    weight: 500 as const,
  },
]

export default async function OpenGraphImage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const { metadata } = await import(`../_articles/${slug}.mdx`)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#f8f8f6',
          color: '#111',
          fontFamily: 'Inter',
          padding: 20,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #e3e0d8',
            padding: '49px 55px',
            background: '#fcfcfb',
            borderRadius: '20'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 24,
              color: '#5f6670',
              letterSpacing: -0.5,
            }}
          >
            <span>Artigo</span>
            <span>{metadata.date ? formatDate(metadata.date) : ''}</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              maxWidth: 900,
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 58,
                lineHeight: 1.08,
                letterSpacing: -2.8,
                fontWeight: 500,
              }}
            >
              {metadata.title}
            </h1>

            {metadata.description && (
              <p
                style={{
                  margin: 0,
                  maxWidth: 760,
                  fontSize: 28,
                  lineHeight: 1.35,
                  letterSpacing: -1.2,
                  color: '#4a515b',
                }}
              >
                {metadata.description}
              </p>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 24,
              color: '#0000b8',
            }}
          >
            <span>Otoniel Emanuel</span>
            <span style={{ color: '#b8bbc2' }}>—</span>
            <span>blog</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  )
}