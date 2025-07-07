import {
  CSSProperties,
  ReactNode,
  MouseEventHandler,
  ElementType,
} from 'react';
import {
  SpacingProps,
  getSpacingStyles,
  separateSpacingProps,
} from '@/lib/ui/spacing';
import { PolymorphicComponentProps } from '@/lib/ui/polymorphic';
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_BASE_STYLE,
  ButtonVariant,
  ButtonSize,
} from '@/lib/constants/form.constants';

interface ButtonOwnProps extends SpacingProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  className?: string;
}

type ButtonProps<C extends ElementType = 'button'> = PolymorphicComponentProps<
  C,
  ButtonOwnProps
>;

export default function Button<C extends ElementType = 'button'>({
  children,
  as,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  target,
  rel,
  style,
  className,
  ...rest
}: ButtonProps<C>) {
  const [spacingProps, otherProps] = separateSpacingProps(rest);

  const buttonStyle: CSSProperties = {
    ...BUTTON_BASE_STYLE,
    ...BUTTON_SIZES[size],
    ...BUTTON_VARIANTS[variant],
    ...getSpacingStyles(spacingProps),
    ...style,
  };

  // Determine component based on props
  let Component: ElementType;
  if (as) {
    Component = as;
  } else if (href) {
    Component = 'a';
  } else {
    Component = 'button';
  }

  const componentProps = {
    ...(href && { href, target, rel }),
    ...(onClick && Component === 'button' && { onClick }),
    ...otherProps,
  };

  return (
    <Component style={buttonStyle} className={className} {...componentProps}>
      {children}
    </Component>
  );
}
