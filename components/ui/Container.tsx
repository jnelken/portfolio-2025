import { CSSProperties, ReactNode, ElementType } from 'react';
import {
  SpacingProps,
  getSpacingStyles,
  separateSpacingProps,
} from '@/lib/ui/spacing';
import { PolymorphicComponentProps } from '@/lib/ui/polymorphic';

interface ContainerOwnProps extends SpacingProps {
  children: ReactNode;
  maxWidth?: number | string;
  style?: CSSProperties;
  className?: string;
}

type ContainerProps<C extends ElementType = 'div'> = PolymorphicComponentProps<
  C,
  ContainerOwnProps
>;

export default function Container<C extends ElementType = 'div'>({
  children,
  as,
  maxWidth = '1200px',
  padding = 'md',
  style,
  className,
  ...rest
}: ContainerProps<C>) {
  const Component = as || 'div';
  const [spacingProps, otherProps] = separateSpacingProps({
    padding,
    ...rest,
  });

  const containerStyle: CSSProperties = {
    width: '100%',
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    margin: '0 auto',
    ...getSpacingStyles(spacingProps),
    ...style,
  };

  return (
    <Component style={containerStyle} className={className} {...otherProps}>
      {children}
    </Component>
  );
}
