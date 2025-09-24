import { CSSProperties, ReactNode, ElementType } from 'react';
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

interface LinkOwnProps extends SpacingProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
  target?: string;
  rel?: string;
  external?: boolean;
  style?: CSSProperties;
  className?: string;
}

type LinkProps<C extends ElementType = 'a'> = PolymorphicComponentProps<
  C,
  LinkOwnProps
>;

export default function Link<C extends ElementType = 'a'>({
  children,
  as = 'a' as C,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  external = false,
  style,
  ...rest
}: LinkProps<C>) {
  const linkStyle: CSSProperties = {
    ...BUTTON_BASE_STYLE,
    ...BUTTON_SIZES[size],
    ...BUTTON_VARIANTS[variant],
    ...style,
  };

  // Auto-detect external links and set secure defaults
  const isExternal =
    external || href.startsWith('http') || href.startsWith('//');
  const linkTarget = target || (isExternal ? '_blank' : undefined);
  const linkRel = rel || (isExternal ? 'noopener noreferrer' : undefined);

  return (
    <UIBase
      as={as}
      style={linkStyle}
      href={href}
      target={linkTarget}
      rel={linkRel}
      {...rest}
    >
      {children}
    </UIBase>
  );
}
