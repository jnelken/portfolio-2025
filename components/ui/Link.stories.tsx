import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    external: {
      control: { type: 'boolean' },
    },
    href: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    href: '#',
    children: 'Primary Link',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    href: '#',
    children: 'Secondary Link',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    href: '#',
    children: 'Outline Link',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
    external: true,
  },
};

export const InternalLink: Story = {
  args: {
    href: '/about',
    children: 'Internal Link',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    href: '#',
    children: 'Small Link',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    href: '#',
    children: 'Large Link',
  },
};

export const WithSpacing: Story = {
  args: {
    href: '#',
    children: 'Spaced Link',
    margin: 'lg',
    padding: 'md',
  },
};

export const AutoDetectExternal: Story = {
  args: {
    href: 'https://storybook.js.org',
    children: 'Auto-detected External',
  },
  parameters: {
    docs: {
      description: {
        story: 'External links are auto-detected from the href and get target="_blank" and rel="noopener noreferrer" automatically.',
      },
    },
  },
};