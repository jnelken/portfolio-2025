import { CSSProperties, ReactNode, ElementType } from 'react';
import { SpacingProps } from '@/lib/ui/spacing';
import { PolymorphicComponentProps } from '@/lib/ui/polymorphic';
import { 
  TYPOGRAPHY_VARIANTS, 
  TYPOGRAPHY_SIZES, 
  TYPOGRAPHY_WEIGHTS,
  TypographyVariant,
  TypographySize,
  TypographyWeight
} from '@/lib/constants/typography.constants';
import UIBase from './UIBase';

interface TextOwnProps extends SpacingProps {
  children: ReactNode;
  variant?: TypographyVariant;
  size?: TypographySize;
  weight?: TypographyWeight;
  align?: 'left' | 'center' | 'right';
  color?: string;
  style?: CSSProperties;
  className?: string;
}

type TextProps<C extends ElementType = 'p'> = PolymorphicComponentProps<C, TextOwnProps>;

export default function Text<C extends ElementType = 'p'>({
  children,
  as,
  variant = 'body',
  size,
  weight,
  align = 'left',
  color,
  style,
  ...rest
}: TextProps<C>) {
  const textStyle: CSSProperties = {
    ...TYPOGRAPHY_VARIANTS[variant],
    ...(size && TYPOGRAPHY_SIZES[size]),
    ...(weight && TYPOGRAPHY_WEIGHTS[weight]),
    textAlign: align,
    color: color || 'var(--foreground)',
    margin: 0,
    ...style
  };

  // Use the 'as' prop if provided, otherwise use variant-based element or default 'p'
  const element = as || (variant.startsWith('h') ? variant : 'p');

  return (
    <UIBase as={element} style={textStyle} {...rest}>
      {children}
    </UIBase>
  );
}