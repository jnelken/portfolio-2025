import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    justify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    align: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    },
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: {
      control: { type: 'number' },
    },
  },
  decorators: [
    Story => (
      <div
        style={{ width: '400px', height: '200px', border: '1px dashed #ccc' }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demo items
const FlexItem = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => (
  <div
    style={{
      padding: '8px 16px',
      backgroundColor: '#e3f2fd',
      border: '1px solid #2196f3',
      borderRadius: '4px',
      minWidth: '60px',
      textAlign: 'center',
      ...props.style,
    }}
    {...props}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Flex>
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
    </Flex>
  ),
};

export const CenterJustified: Story = {
  render: () => (
    <Flex justify="center">
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
    </Flex>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <Flex justify="space-between">
      <FlexItem>Left</FlexItem>
      <FlexItem>Center</FlexItem>
      <FlexItem>Right</FlexItem>
    </Flex>
  ),
};

export const CenterAligned: Story = {
  render: () => (
    <Flex align="center" style={{ height: '100%' }}>
      <FlexItem>Item 1</FlexItem>
      <FlexItem style={{ height: '60px' }}>Tall Item</FlexItem>
      <FlexItem>Item 3</FlexItem>
    </Flex>
  ),
};

export const CenteredBoth: Story = {
  render: () => (
    <Flex justify="center" align="center" style={{ height: '100%' }}>
      <FlexItem>Centered Item</FlexItem>
    </Flex>
  ),
};

export const Column: Story = {
  render: () => (
    <Flex direction="column">
      <FlexItem>First</FlexItem>
      <FlexItem>Second</FlexItem>
      <FlexItem>Third</FlexItem>
    </Flex>
  ),
};

export const ColumnCentered: Story = {
  render: () => (
    <Flex direction="column" align="center">
      <FlexItem>First</FlexItem>
      <FlexItem>Second</FlexItem>
      <FlexItem>Third</FlexItem>
    </Flex>
  ),
};

export const WithGap: Story = {
  render: () => (
    <Flex gap={16}>
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
    </Flex>
  ),
};

export const WithWrap: Story = {
  render: () => (
    <Flex wrap="wrap" gap={8}>
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
      <FlexItem>Item 4</FlexItem>
      <FlexItem>Item 5</FlexItem>
      <FlexItem>Item 6</FlexItem>
      <FlexItem>Item 7</FlexItem>
      <FlexItem>Item 8</FlexItem>
    </Flex>
  ),
};

export const WithSpacing: Story = {
  render: () => (
    <Flex
      justify="center"
      align="center"
      padding="lg"
      margin="md"
      style={{ backgroundColor: '#f5f5f5', height: '100%' }}
    >
      <FlexItem>Spaced Container</FlexItem>
    </Flex>
  ),
};

export const PolymorphicSection: Story = {
  render: () => (
    <Flex as="section" direction="column" gap={12} padding="md">
      <FlexItem>Section Item 1</FlexItem>
      <FlexItem>Section Item 2</FlexItem>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using the `as` prop to render as a semantic section element.',
      },
    },
  },
};

export const Navigation: Story = {
  render: () => (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      padding="md"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <FlexItem style={{ backgroundColor: '#28a745', color: 'white' }}>
        Logo
      </FlexItem>
      <Flex gap={16}>
        <FlexItem style={{ backgroundColor: 'transparent', border: 'none' }}>
          Home
        </FlexItem>
        <FlexItem style={{ backgroundColor: 'transparent', border: 'none' }}>
          About
        </FlexItem>
        <FlexItem style={{ backgroundColor: 'transparent', border: 'none' }}>
          Contact
        </FlexItem>
      </Flex>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Common navigation layout using Flex for header with logo and menu items.',
      },
    },
  },
};
