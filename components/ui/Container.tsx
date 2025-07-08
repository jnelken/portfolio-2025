import { CSSProperties, ReactNode, ElementType } from 'react';
import { SpacingProps } from '@/lib/ui/spacing';
import { PolymorphicComponentProps } from '@/lib/ui/polymorphic';
import UIBase from './UIBase';

interface ContainerOwnProps extends SpacingProps {
  children: ReactNode;
  maxWidth?: number | string;
  style?: CSSProperties;
  className?: string;
}

type ContainerProps<C extends ElementType = 'div'> = PolymorphicComponentProps<C, ContainerOwnProps>;

export default function Container<C extends ElementType = 'div'>({
  children,
  as = 'div' as C,
  maxWidth = '1200px',
  padding = 'md',
  style,
  ...rest
}: ContainerProps<C>) {
  const containerStyle: CSSProperties = {
    width: '100%',
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    margin: '0 auto',
    ...style,
  };

  return (
    <UIBase as={as} style={containerStyle} padding={padding} {...rest}>
      {children}
    </UIBase>
  );
}
