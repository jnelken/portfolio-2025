import type { Meta, StoryObj } from '@storybook/react';
import { forwardRef } from 'react';
import RadialReveal from './RadialReveal';

const meta: Meta<typeof RadialReveal> = {
  title: 'Animations/RadialReveal',
  component: RadialReveal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable component that reveals content with a radial animation from a trigger element.',
      },
    },
  },
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'click', 'manual'],
    },
    direction: {
      control: { type: 'select' },
      options: ['in', 'out', 'both'],
    },
    easing: {
      control: { type: 'select' },
      options: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'],
    },
    radius: {
      control: { type: 'range', min: 50, max: 500 },
    },
    duration: {
      control: { type: 'range', min: 200, max: 2000 },
    },
    rippleCount: {
      control: { type: 'range', min: 0, max: 5 },
    },
    stagger: {
      control: { type: 'range', min: 0, max: 300 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Demo trigger button - now just a simple component
function TriggerButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: '12px 24px',
        backgroundColor: '#007acc',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '500',
      }}
    >
      {children}
    </button>
  );
}

// Demo content
const DemoContent = () => (
  <div style={{ padding: '40px', textAlign: 'center', maxWidth: '300px' }}>
    <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Hidden Content</h3>
    <p style={{ margin: '0 0 16px 0', color: '#666', lineHeight: '1.5' }}>
      This content appears with a radial reveal animation from the trigger element.
    </p>
    <button
      style={{
        padding: '8px 16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      Action Button
    </button>
  </div>
);

// Create trigger component factory for stories
const createTriggerComponent = (text: string) =>
  function CustomTrigger() {
    return <TriggerButton>{text}</TriggerButton>;
  };

export const HoverTrigger: Story = {
  args: {
    TriggerComponent: createTriggerComponent('Hover me'),
    trigger: 'hover',
    radius: 200,
    duration: 600,
    easing: 'ease-out',
    direction: 'in',
    rippleCount: 1,
  },
  render: args => (
    <div
      style={{
        width: '400px',
        height: '300px',
        border: '1px dashed #ccc',
        position: 'relative',
      }}
    >
      <RadialReveal {...args}>
        <DemoContent />
      </RadialReveal>
    </div>
  ),
};

export const ClickTrigger: Story = {
  args: {
    TriggerComponent: createTriggerComponent('Click me'),
    trigger: 'click',
    radius: 250,
    duration: 800,
    easing: 'ease-out',
    direction: 'in',
    rippleCount: 2,
    stagger: 100,
  },
  render: args => (
    <div
      style={{
        width: '400px',
        height: '300px',
        border: '1px dashed #ccc',
        position: 'relative',
      }}
    >
      <RadialReveal {...args}>
        <DemoContent />
      </RadialReveal>
    </div>
  ),
};

export const WithRipples: Story = {
  args: {
    TriggerComponent: createTriggerComponent('Hover for ripples'),
    trigger: 'hover',
    radius: 300,
    duration: 1000,
    easing: 'ease-out',
    direction: 'in',
    rippleCount: 3,
    stagger: 150,
  },
  render: args => (
    <div
      style={{
        width: '500px',
        height: '400px',
        border: '1px dashed #ccc',
        position: 'relative',
      }}
    >
      <RadialReveal {...args}>
        <DemoContent />
      </RadialReveal>
    </div>
  ),
};

// Create logo trigger component for story
function LogoTrigger() {
  return (
    <div
      style={{
        width: '64px',
        height: '64px',
        backgroundColor: '#007acc',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
      }}
    >
      JN
    </div>
  );
}

export const LogoExample: Story = {
  args: {
    TriggerComponent: LogoTrigger,
    trigger: 'hover',
    radius: 200,
    duration: 800,
    easing: 'ease-out',
    direction: 'in',
    rippleCount: 2,
    stagger: 100,
  },
  render: args => (
    <div
      style={{
        width: '600px',
        height: '400px',
        border: '1px dashed #ccc',
        position: 'relative',
        backgroundColor: '#f8f9fa',
      }}
    >
      <RadialReveal {...args}>
        <div
          style={{
            padding: '60px 40px',
            textAlign: 'center',
            color: '#333',
          }}
        >
          <h2 style={{ margin: '0 0 20px 0' }}>Jake Nelken</h2>
          <p style={{ margin: '0 0 20px 0', opacity: 0.8 }}>Frontend Engineer & Creative Developer</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#007acc',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Contact
            </button>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: 'transparent',
                color: '#007acc',
                border: '1px solid #007acc',
                borderRadius: '4px',
              }}
            >
              Portfolio
            </button>
          </div>
        </div>
      </RadialReveal>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example usage with a logo trigger revealing portfolio content.',
      },
    },
  },
};

export const FastAnimation: Story = {
  args: {
    TriggerComponent: createTriggerComponent('Fast reveal'),
    trigger: 'hover',
    radius: 150,
    duration: 300,
    easing: 'ease-in-out',
    direction: 'in',
    rippleCount: 1,
  },
  render: args => (
    <div
      style={{
        width: '400px',
        height: '300px',
        border: '1px dashed #ccc',
        position: 'relative',
      }}
    >
      <RadialReveal {...args}>
        <DemoContent />
      </RadialReveal>
    </div>
  ),
};

export const SlowAnimation: Story = {
  args: {
    TriggerComponent: createTriggerComponent('Slow reveal'),
    trigger: 'hover',
    radius: 300,
    duration: 1500,
    easing: 'ease-out',
    direction: 'in',
    rippleCount: 1,
  },
  render: args => (
    <div
      style={{
        width: '400px',
        height: '300px',
        border: '1px dashed #ccc',
        position: 'relative',
      }}
    >
      <RadialReveal {...args}>
        <DemoContent />
      </RadialReveal>
    </div>
  ),
};
