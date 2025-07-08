import { CSSProperties, ReactNode, ElementType } from 'react';
import { PolymorphicComponentProps } from '@/lib/ui/polymorphic';
import { SpacingProps } from '@/lib/ui/spacing';
import { CODE_BASE_STYLE } from '@/lib/constants/form.constants';
import UIBase from './UIBase';

interface CodeOwnProps extends SpacingProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

type CodeProps<C extends ElementType = 'code'> = PolymorphicComponentProps<
  C,
  CodeOwnProps
>;

export default function Code<C extends ElementType = 'code'>({
  children,
  style,
  as = 'code' as C,
  ...rest
}: CodeProps<C>) {
  const codeStyle: CSSProperties = {
    ...CODE_BASE_STYLE,
    ...style,
  };

  return (
    <UIBase as={as} style={codeStyle} {...rest}>
      {children}
    </UIBase>
  );
}
