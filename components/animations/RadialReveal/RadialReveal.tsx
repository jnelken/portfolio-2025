import { useState, useEffect, useRef, useMemo, CSSProperties } from 'react';
import { RadialRevealProps } from './types';

export default function RadialReveal({
  TriggerComponent,
  trigger = 'hover',
  children,
  radius = 200,
  duration = 1200,
  easing = 'ease-out',
  direction = 'in',
  rippleCount = 1,
  stagger = 100,
  isRevealed: externalIsRevealed,
  onRevealStart,
  onRevealComplete,
  style,
  className,
  respectReducedMotion = true,
}: RadialRevealProps) {
  const [internalIsRevealed, setInternalIsRevealed] = useState(false);
  const [isAutoFading, setIsAutoFading] = useState(false);
  const [shouldShowRipples, setShouldShowRipples] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState({ x: 50, y: 50 });
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationId = useMemo(() => `radial-reveal-${Math.floor(Math.random() * 10000)}`, []);

  // Use external control if provided, otherwise use internal state
  const isRevealed = trigger === 'manual' ? (externalIsRevealed ?? false) : internalIsRevealed;

  // Check for reduced motion preference
  const prefersReducedMotion =
    respectReducedMotion &&
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Calculate trigger element position relative to container
  const updateTriggerPosition = () => {
    if (!triggerRef.current || !containerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const x = ((triggerRect.left + triggerRect.width / 2 - containerRect.left) / containerRect.width) * 100;
    const y = ((triggerRect.top + triggerRect.height / 2 - containerRect.top) / containerRect.height) * 100;

    setTriggerPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  // Handle trigger interactions
  const handleTriggerEnter = () => {
    if (trigger === 'hover') {
      // Clear any existing fade timeout
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }

      setInternalIsRevealed(true);
      setIsAutoFading(false);
      setShouldShowRipples(true);

      onRevealStart?.();

      // Set up the auto-fade sequence: reveal (duration) + hold (duration) + fade (3x duration)
      const totalHoldTime = duration + duration; // reveal time + hold time
      fadeTimeoutRef.current = setTimeout(() => {
        setIsAutoFading(true);
        setInternalIsRevealed(false);
        setShouldShowRipples(false);
      }, totalHoldTime);
    }
  };

  const handleTriggerLeave = () => {
    if (trigger === 'hover') {
      // Don't change state on hover leave - let the auto-fade handle it
    }
  };

  const handleTriggerClick = () => {
    if (trigger === 'click') {
      const newState = !internalIsRevealed;
      setInternalIsRevealed(newState);
      if (newState) onRevealStart?.();
    }
  };

  // Create wrapper props for trigger container
  const triggerWrapperProps = {
    ref: triggerRef,
    onMouseEnter: handleTriggerEnter,
    onMouseLeave: handleTriggerLeave,
    onClick: handleTriggerClick,
    style: {
      display: 'inline-block',
      cursor: trigger === 'click' ? 'pointer' : 'default',
    },
  };

  // Update position on mount and resize
  useEffect(() => {
    updateTriggerPosition();

    const handleResize = () => updateTriggerPosition();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  // Animation completion handler
  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(
        () => {
          onRevealComplete?.();
        },
        duration + (rippleCount - 1) * stagger,
      );

      return () => clearTimeout(timer);
    }
  }, [isRevealed, duration, rippleCount, stagger, onRevealComplete]);

  // Generate CSS animations
  useEffect(() => {
    const maxRadius = Math.sqrt(radius * radius * 2); // Diagonal distance for full coverage
    const startOpacity = 0;

    const keyframes = `
      @keyframes ${animationId}-reveal {
        from {
          clip-path: circle(0% at ${triggerPosition.x}% ${triggerPosition.y}%);
          opacity: ${startOpacity};
        }
        to {
          clip-path: circle(${maxRadius}px at ${triggerPosition.x}% ${triggerPosition.y}%);
          opacity: 1;
        }
      }

      @keyframes ${animationId}-auto-fade {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      @keyframes ${animationId}-hide {
        from {
          clip-path: circle(${maxRadius}px at ${triggerPosition.x}% ${triggerPosition.y}%);
          opacity: 1;
        }
        to {
          clip-path: circle(0% at ${triggerPosition.x}% ${triggerPosition.y}%);
          opacity: ${startOpacity};
        }
      }

      @keyframes ${animationId}-ripple {
        0% {
          transform: scale(0);
          opacity: 0.3;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          transform: scale(3);
          opacity: 0;
        }
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, [animationId, triggerPosition, radius, isAutoFading, duration]);

  const containerStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...style,
  };

  const contentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 1,
    animation: prefersReducedMotion
      ? undefined
      : isRevealed
        ? `${animationId}-${direction === 'out' ? 'hide' : 'reveal'} ${duration}ms ${easing} forwards`
        : isAutoFading
          ? `${animationId}-auto-fade ${duration * 10}ms ${easing} forwards`
          : !isRevealed && !isAutoFading
            ? undefined // Stay at current state
            : direction === 'both'
              ? `${animationId}-hide ${duration}ms ${easing} forwards`
              : undefined,
    opacity: prefersReducedMotion
      ? isRevealed
        ? 1
        : isAutoFading
          ? 1 // Will animate to 0 via transition
          : 0 // Rest state
      : undefined, // Let CSS animations handle it
    transition: prefersReducedMotion ? `opacity ${duration}ms ${easing}` : undefined,
  };

  // Generate ripple elements
  const ripples = Array.from({ length: rippleCount }, (_, i) => (
    <div
      key={i}
      style={{
        position: 'absolute',
        left: `${triggerPosition.x}%`,
        top: `${triggerPosition.y}%`,
        width: '20px',
        height: '20px',
        marginLeft: '-10px',
        marginTop: '-10px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        pointerEvents: 'none',
        transformOrigin: 'center',
        animation:
          shouldShowRipples && !prefersReducedMotion
            ? `${animationId}-ripple ${duration * 1.5}ms ${easing} ${i * stagger}ms forwards`
            : undefined,
        zIndex: 2,
      }}
    />
  ));

  return (
    <div ref={containerRef} style={containerStyle} className={className}>
      <div {...triggerWrapperProps}>
        <TriggerComponent />
      </div>
      {ripples}
      <div style={contentStyle}>{children}</div>
    </div>
  );
}
