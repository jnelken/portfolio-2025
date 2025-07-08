// Typography design tokens
export const TYPOGRAPHY_VARIANTS = {
  h1: { fontSize: '48px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
  h2: { fontSize: '36px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
  h3: { fontSize: '24px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
  h4: { fontSize: '20px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
  h5: { fontSize: '18px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
  h6: { fontSize: '16px', fontWeight: 500, fontFamily: 'var(--font-suisse-intl)' },
  body: { fontSize: '16px', fontWeight: 400, lineHeight: '1.5' },
  caption: { fontSize: '14px', fontWeight: 400, lineHeight: '1.4' },
  code: { fontFamily: 'var(--font-geist-mono)', fontSize: '14px', fontWeight: 400 },
} as const;

export const TYPOGRAPHY_SIZES = {
  xs: { fontSize: '12px' },
  sm: { fontSize: '14px' },
  md: { fontSize: '16px' },
  lg: { fontSize: '18px' },
  xl: { fontSize: '20px' },
  '2xl': { fontSize: '24px' },
  '3xl': { fontSize: '30px' },
} as const;

export const TYPOGRAPHY_WEIGHTS = {
  normal: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semibold: { fontWeight: 600 },
  bold: { fontWeight: 700 },
} as const;

// Type exports for better TypeScript support
export type TypographyVariant = keyof typeof TYPOGRAPHY_VARIANTS;
export type TypographySize = keyof typeof TYPOGRAPHY_SIZES;
export type TypographyWeight = keyof typeof TYPOGRAPHY_WEIGHTS;
