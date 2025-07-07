import { CSSProperties, ReactNode, ElementType } from 'react';
import { SpacingProps, getSpacingStyles, separateSpacingProps } from '@/lib/ui/spacing';
import { PolymorphicComponentProps } from '@/lib/ui/polymorphic';
import { 
  TYPOGRAPHY_VARIANTS, 
  TYPOGRAPHY_SIZES, 
  TYPOGRAPHY_WEIGHTS,
  TypographyVariant,
  TypographySize,
  TypographyWeight
} from '@/lib/constants/typography.constants';

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
  className,
  ...rest
}: TextProps<C>) {
  const [spacingProps, otherProps] = separateSpacingProps(rest);

  const textStyle: CSSProperties = {
    ...TYPOGRAPHY_VARIANTS[variant],
    ...(size && TYPOGRAPHY_SIZES[size]),
    ...(weight && TYPOGRAPHY_WEIGHTS[weight]),
    textAlign: align,
    color: color || 'var(--foreground)',
    margin: 0,
    ...getSpacingStyles(spacingProps),
    ...style
  };

  // Use the 'as' prop if provided, otherwise use variant-based element or default 'p'
  const Component = as || (variant.startsWith('h') ? variant : 'p');

  return (
    <Component style={textStyle} className={className} {...otherProps}>
      {children}
    </Component>
  );
}