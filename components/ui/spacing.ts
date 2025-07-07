import { CSSProperties } from 'react';

export type SpacingSize =
  | 'none'
  | 'auto'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';

export const spacingToPx: Record<SpacingSize, string> = {
  none: '0',
  auto: 'auto',
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
  xl: '64px',
  xxl: '128px',
};

export interface SpacingProps {
  margin?: SpacingSize;
  marginX?: SpacingSize;
  marginY?: SpacingSize;
  marginTop?: SpacingSize;
  marginRight?: SpacingSize;
  marginBottom?: SpacingSize;
  marginLeft?: SpacingSize;
  padding?: SpacingSize;
  paddingX?: SpacingSize;
  paddingY?: SpacingSize;
  paddingTop?: SpacingSize;
  paddingRight?: SpacingSize;
  paddingBottom?: SpacingSize;
  paddingLeft?: SpacingSize;
}

export function getSpacingStyles(props: SpacingProps): CSSProperties {
  const {
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  } = props;

  const styles: CSSProperties = {};

  if (margin) {
    styles.margin = spacingToPx[margin];
  }

  if (marginX) {
    styles.marginLeft = spacingToPx[marginX];
    styles.marginRight = spacingToPx[marginX];
  }

  if (marginY) {
    styles.marginTop = spacingToPx[marginY];
    styles.marginBottom = spacingToPx[marginY];
  }

  if (marginTop) {
    styles.marginTop = spacingToPx[marginTop];
  }

  if (marginRight) {
    styles.marginRight = spacingToPx[marginRight];
  }

  if (marginBottom) {
    styles.marginBottom = spacingToPx[marginBottom];
  }

  if (marginLeft) {
    styles.marginLeft = spacingToPx[marginLeft];
  }

  if (padding) {
    styles.padding = spacingToPx[padding];
  }

  if (paddingX) {
    styles.paddingLeft = spacingToPx[paddingX];
    styles.paddingRight = spacingToPx[paddingX];
  }

  if (paddingY) {
    styles.paddingTop = spacingToPx[paddingY];
    styles.paddingBottom = spacingToPx[paddingY];
  }

  if (paddingTop) {
    styles.paddingTop = spacingToPx[paddingTop];
  }

  if (paddingRight) {
    styles.paddingRight = spacingToPx[paddingRight];
  }

  if (paddingBottom) {
    styles.paddingBottom = spacingToPx[paddingBottom];
  }

  if (paddingLeft) {
    styles.paddingLeft = spacingToPx[paddingLeft];
  }

  return styles;
}
