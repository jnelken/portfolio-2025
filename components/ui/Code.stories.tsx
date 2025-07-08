import type { Meta, StoryObj } from '@storybook/react';
import Code from './Code';

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineCode: Story = {
  args: {
    children: 'const variable = "value";',
  },
};

export const JavaScriptSnippet: Story = {
  args: {
    children: 'function hello() { return "world"; }',
  },
};

export const HTMLElement: Story = {
  args: {
    children: '<div className="container">',
  },
};

export const CSSProperty: Story = {
  args: {
    children: 'background-color: #ff0000;',
  },
};

export const TerminalCommand: Story = {
  args: {
    children: 'npm install @storybook/react',
  },
};

export const JSONSnippet: Story = {
  args: {
    children: '{ "name": "example", "version": "1.0.0" }',
  },
};

export const WithSpacing: Story = {
  args: {
    children: 'console.log("debug");',
    margin: 'md',
    padding: 'sm',
  },
};

export const CustomStyling: Story = {
  args: {
    children: 'import React from "react";',
    style: {
      backgroundColor: '#f0f8ff',
      color: '#0066cc',
      fontSize: '16px',
    },
  },
};

export const PolymorphicKbd: Story = {
  args: {
    as: 'kbd',
    children: 'Ctrl + C',
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the `as` prop to render as a keyboard input element for showing keyboard shortcuts.',
      },
    },
  },
};

export const InParagraph: Story = {
  render: () => (
    <p>
      Use the <Code>useState</Code> hook to manage component state in React.
    </p>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Code component used inline within text content.',
      },
    },
  },
};

export const MultipleInline: Story = {
  render: () => (
    <p>
      Import components with <Code>import</Code> and export with <Code>export default</Code>.
    </p>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple inline code elements within the same paragraph.',
      },
    },
  },
};