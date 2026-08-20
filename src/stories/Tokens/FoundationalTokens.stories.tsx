import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import tokenMap from '../../styles/tokens-map.json';

const FoundationalTokensGallery: React.FC = () => {
  const tokens = Object.values(tokenMap);

  const radiusTokens = tokens.filter((t: any) => t.cssVar.includes('rounded') || t.group?.includes('border radius'));
  const spacingTokens = tokens.filter((t: any) => t.cssVar.includes('gap') || t.cssVar.includes('padding') || t.group?.includes('spacing'));

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24, background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, background: 'linear-gradient(to right, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Foundational Design Tokens
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: 32 }}>
        Border Radii, Spacing Scales, Gap, and Geometry tokens from <code>foundational-tokens.json</code>.
      </p>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 16, color: '#e2e8f0', borderBottom: '1px solid #334155', paddingBottom: 8 }}>
          Border Radii Tokens ({radiusTokens.length})
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20 }}>
          {radiusTokens.map((t: any) => (
            <div key={t.cssVar} style={{ background: '#1e293b', border: '1px solid #334155', padding: 16, borderRadius: 12 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  borderRadius: `var(${t.cssVar})`,
                  marginBottom: 12,
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)'
                }}
              />
              <code style={{ fontSize: 13, color: '#c084fc', display: 'block', fontWeight: 600 }}>{t.cssVar}</code>
              <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 4 }}>Value: {t.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 22, marginBottom: 16, color: '#e2e8f0', borderBottom: '1px solid #334155', paddingBottom: 8 }}>
          Spacing & Gap Tokens ({spacingTokens.length})
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
          {spacingTokens.map((t: any) => (
            <div key={t.cssVar} style={{ background: '#1e293b', border: '1px solid #334155', padding: 16, borderRadius: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ width: `var(${t.cssVar})`, height: 24, background: '#38bdf8', borderRadius: 4, minWidth: 4 }} />
              </div>
              <code style={{ fontSize: 13, color: '#38bdf8', display: 'block', fontWeight: 600 }}>{t.cssVar}</code>
              <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 4 }}>Value: {t.value}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof FoundationalTokensGallery> = {
  title: 'Tokens/Foundational Tokens',
  component: FoundationalTokensGallery,
  parameters: {
    docs: {
      description: {
        component: 'Gallery displaying border radii, spacing scales, and geometry tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FoundationalTokensGallery>;

export const Default: Story = {};
