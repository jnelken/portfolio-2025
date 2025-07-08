import { ElementType, ComponentPropsWithoutRef } from 'react';

export interface PolymorphicProps {
  as?: ElementType;
}

export type PolymorphicComponentProps<
  C extends ElementType,
  Props = {},
> = Props &
  PolymorphicProps &
  Omit<ComponentPropsWithoutRef<C>, keyof Props | 'as'>;
