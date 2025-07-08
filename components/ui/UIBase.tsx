import { CSSProperties, ReactNode, ElementType } from 'react';
import { SpacingProps, getSpacingStyles, separateSpacingProps } from '@/lib/ui/spacing';
import { PolymorphicComponentProps } from '@/lib/ui/polymorphic';

interface UIBaseOwnProps extends SpacingProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

type UIBaseProps<C extends ElementType = 'div'> = PolymorphicComponentProps<C, UIBaseOwnProps>;

export default function UIBase<C extends ElementType = 'div'>({
  children,
  as,
  style,
  className,
  ...rest
}: UIBaseProps<C>) {
  const Component = as || 'div';
  const [spacingProps, otherProps] = separateSpacingProps(rest);

  const baseStyle: CSSProperties = {
    ...getSpacingStyles(spacingProps),
    ...style,
  };

  return (
    <Component style={baseStyle} className={className} {...otherProps}>
      {children}
    </Component>
  );
}
