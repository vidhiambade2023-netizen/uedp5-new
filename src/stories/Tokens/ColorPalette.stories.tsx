import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import tokenMap from '../../styles/tokens-map.json';

const ColorPaletteGallery: React.FC = () => {
  const colorTokens = Object.values(tokenMap).filter((t: any) => t.cssVar.includes('slate') || t.cssVar.includes('base') || t.cssVar.includes('gray') || t.cssVar.includes('blue') || t.cssVar.includes('red') || t.cssVar.includes('green') || t.cssVar.includes('neutral') || t.cssVar.includes('zinc') || t.cssVar.includes('emerald') || t.cssVar.includes('amber') || t.cssVar.includes('indigo') || t.cssVar.includes('purple') || t.cssVar.includes('pink'));

  // Group by family
  const families: { [key: string]: any[] } = {};
  colorTokens.forEach((t: any) => {
    const parts = t.cssVar.replace('--uedp-', '').split('-');
    const family = parts[0] || 'base';
    if (!families[family]) families[family] = [];
    families[family].push(t);
  });

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24, background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Figma Base Color Palette Tokens
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: 32 }}>
        Exact swatches synchronized from <code>base-palette-tokens.json</code> mapped to CSS Custom Properties.
      </p>

      {Object.entries(families).map(([famName, tokens]) => (
        <div key={famName} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, textTransform: 'capitalize', marginBottom: 16, borderBottom: '1px solid #334155', paddingBottom: 8, color: '#e2e8f0' }}>
            {famName} Family ({tokens.length})
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
            {tokens.map((t: any) => (
              <div
                key={t.cssVar}
                style={{
                  background: '#1e293b',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid #334155',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <div
                  style={{
                    height: 80,
                    backgroundColor: `var(${t.cssVar})`,
                    borderBottom: '1px solid #334155'
                  }}
                />
                <div style={{ padding: 12 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#f1f5f9' }}>{t.name || t.cssVar}</div>
                  <code style={{ fontSize: 12, color: '#38bdf8', display: 'block', marginTop: 4 }}>{t.cssVar}</code>
                  <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{t.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof ColorPaletteGallery> = {
  title: 'Tokens/Color Palette',
  component: ColorPaletteGallery,
  parameters: {
    docs: {
      description: {
        component: 'Interactive gallery showcasing all color palette tokens from Figma `base-palette-tokens.json`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPaletteGallery>;

export const Default: Story = {};
