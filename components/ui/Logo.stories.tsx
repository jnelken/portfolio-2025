import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    width: 120,
    height: 25,
  },
};

export const Large: Story = {
  args: {
    width: 240,
    height: 50,
  },
};

export const ExtraLarge: Story = {
  args: {
    width: 360,
    height: 76,
  },
};

export const CustomColor: Story = {
  args: {
    style: {
      color: '#007acc',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Logo with custom color using the `style` prop. The logo uses `currentColor` so it inherits text color.',
      },
    },
  },
};

export const DarkBackground: Story = {
  args: {
    style: {
      color: 'white',
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Logo on dark background with white color.',
      },
    },
  },
};

export const InNavigation: Story = {
  render: () => (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
      }}
    >
      <Logo width={140} height={30} />
      <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Logo used in a typical navigation header layout.',
      },
    },
  },
};

export const InHeader: Story = {
  render: () => (
    <header
      style={{
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
      }}
    >
      <Logo width={200} height={42} style={{ marginBottom: '10px' }} />
      <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
        Portfolio & Design
      </p>
    </header>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Logo used in a page header with tagline.',
      },
    },
  },
};

export const Responsive: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
          Mobile (120px)
        </h4>
        <Logo width={120} height={25} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
          Tablet (160px)
        </h4>
        <Logo width={160} height={34} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
          Desktop (180px - Default)
        </h4>
        <Logo />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different logo sizes for responsive design breakpoints.',
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    style: {
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
      transition: 'all 0.2s ease',
    },
    className: 'logo-hover',
  },
  decorators: [
    Story => (
      <div>
        <style>{`
          .logo-hover:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
          }
        `}</style>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Logo with custom styling including drop shadow and hover effects.',
      },
    },
  },
};
