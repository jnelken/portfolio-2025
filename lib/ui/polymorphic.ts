import { ElementType, ComponentPropsWithoutRef } from 'react';

export interface PolymorphicProps {
  as?: ElementType;
}

export type PolymorphicComponentProps<C extends ElementType, Props = {}> = Props &
  PolymorphicProps &
  Omit<ComponentPropsWithoutRef<C>, keyof Props | 'as'>;

export function createPolymorphicComponent<
  DefaultElement extends ElementType,
  ComponentProps = {}
>(defaultElement: DefaultElement) {
  return function PolymorphicComponent<C extends ElementType = DefaultElement>(
    props: PolymorphicComponentProps<C, ComponentProps>
  ) {
    const { as: Component = defaultElement, ...rest } = props;
    return { Component, props: rest };
  };
}