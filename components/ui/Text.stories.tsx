import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'caption', 'code'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'This is body text using the default typography variant.',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Main Heading',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Section Heading',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Subsection Heading',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Small caption text for details and metadata.',
  },
};

export const Code: Story = {
  args: {
    variant: 'code',
    children: 'const example = "monospace code text";',
  },
};

export const CustomSize: Story = {
  args: {
    variant: 'body',
    size: 'xl',
    children: 'Body text with custom xl size override.',
  },
};

export const CustomWeight: Story = {
  args: {
    variant: 'body',
    weight: 'bold',
    children: 'Body text with bold weight override.',
  },
};

export const CenteredText: Story = {
  args: {
    variant: 'h2',
    align: 'center',
    children: 'Centered heading text',
  },
};

export const ColoredText: Story = {
  args: {
    variant: 'body',
    color: '#007acc',
    children: 'Text with custom color styling.',
  },
};

export const WithSpacing: Story = {
  args: {
    variant: 'body',
    children: 'Text with custom spacing applied.',
    margin: 'lg',
    padding: 'md',
  },
};

export const PolymorphicSpan: Story = {
  args: {
    as: 'span',
    variant: 'body',
    weight: 'medium',
    children: 'Inline text rendered as span element',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Using the `as` prop to render text as a span element instead of the default paragraph.',
      },
    },
  },
};

export const SemanticHeading: Story = {
  args: {
    variant: 'h3',
    children: 'Semantic H3 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading variants automatically render with the correct semantic HTML element (h1, h2, etc.)',
      },
    },
  },
};
