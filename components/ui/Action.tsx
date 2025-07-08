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

interface ActionOwnProps extends SpacingProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
  className?: string;
}

type ActionProps<C extends ElementType = 'button'> = PolymorphicComponentProps<
  C,
  ActionOwnProps
>;

export default function Action<C extends ElementType = 'button'>({
  children,
  as = 'button' as C,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled,
  type = 'button',
  style,
  ...rest
}: ActionProps<C>) {
  const actionStyle: CSSProperties = {
    ...BUTTON_BASE_STYLE,
    ...BUTTON_SIZES[size],
    ...BUTTON_VARIANTS[variant],
    ...(disabled && {
      opacity: 0.6,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    }),
    ...style,
  };

  return (
    <UIBase<'button'>
      as={as}
      style={actionStyle}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}>
      {children}
    </UIBase>
  );
}
