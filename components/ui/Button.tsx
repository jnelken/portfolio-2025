import {
  CSSProperties,
  ReactNode,
  MouseEventHandler,
  ElementType,
} from 'react';
import { SpacingProps } from '@/lib/ui/spacing';
import { PolymorphicComponentProps } from '@/lib/ui/polymorphic';
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_BASE_STYLE,
  ButtonVariant,
  ButtonSize,
} from '@/lib/constants/form.constants';
import UIBase from './UIBase';

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
  ...rest
}: ButtonProps<C>) {
  const buttonStyle: CSSProperties = {
    ...BUTTON_BASE_STYLE,
    ...BUTTON_SIZES[size],
    ...BUTTON_VARIANTS[variant],
    ...style,
  };

  // Determine component based on props
  let element: ElementType;
  if (as) {
    element = as;
  } else if (href) {
    element = 'a';
  } else {
    element = 'button';
  }

  const { onClick: buttonClick, ...otherProps } = rest;

  const componentProps = {
    ...(href && { href, target, rel }),
    ...(onClick && element === 'button' && { onClick }),
    ...otherProps,
  };

  return (
    <UIBase as={element} style={buttonStyle} {...componentProps}>
      {children}
    </UIBase>
  );
}
