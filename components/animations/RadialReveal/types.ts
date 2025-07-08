import { ComponentType, CSSProperties } from 'react';

export type TriggerMode = 'hover' | 'click' | 'manual';
export type RevealDirection = 'in' | 'out' | 'both';
export type EasingFunction = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | string;

export interface RadialRevealProps {
  /** The component that triggers the reveal animation */
  TriggerComponent: ComponentType<any>;

  /** How the reveal is triggered */
  trigger?: TriggerMode;

  /** Content to be revealed */
  children: React.ReactNode;

  /** Maximum radius of the reveal circle in pixels */
  radius?: number;

  /** Animation duration in milliseconds */
  duration?: number;

  /** CSS easing function for the animation */
  easing?: EasingFunction;

  /** Direction of the reveal animation */
  direction?: RevealDirection;

  /** Number of ripple effects */
  rippleCount?: number;

  /** Stagger delay between ripples in milliseconds */
  stagger?: number;

  /** Manual control for reveal state (when trigger is 'manual') */
  isRevealed?: boolean;

  /** Callback when reveal animation starts */
  onRevealStart?: () => void;

  /** Callback when reveal animation completes */
  onRevealComplete?: () => void;

  /** Custom styles for the container */
  style?: CSSProperties;

  /** Custom CSS class */
  className?: string;

  /** Respect user's reduced motion preference */
  respectReducedMotion?: boolean;
}
