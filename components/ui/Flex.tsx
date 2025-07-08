import { CSSProperties, ReactNode, ElementType } from 'react';
import { SpacingProps } from '@/lib/ui/spacing';
import { PolymorphicComponentProps } from '@/lib/ui/polymorphic';
import UIBase from './UIBase';

interface FlexOwnProps extends SpacingProps {
  children: ReactNode;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: number | string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  style?: CSSProperties;
  className?: string;
}

type FlexProps<C extends ElementType = 'div'> = PolymorphicComponentProps<C, FlexOwnProps>;

export default function Flex<C extends ElementType = 'div'>({
  children,
  as = 'div' as C,
  justify = 'flex-start',
  align = 'stretch',
  direction = 'row',
  gap = 0,
  wrap = 'nowrap',
  style,
  ...rest
}: FlexProps<C>) {
  const flexStyle: CSSProperties = {
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    flexWrap: wrap,
    ...style,
  };

  return (
    <UIBase as={as} style={flexStyle} {...rest}>
      {children}
    </UIBase>
  );
}
