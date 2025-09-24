import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    maxWidth: {
      control: { type: 'text' },
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          width: '100vw',
          backgroundColor: '#f5f5f5',
          minHeight: '200px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demo content
const DemoContent = () => (
  <div
    style={{
      backgroundColor: '#e3f2fd',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #2196f3',
    }}
  >
    <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>
      Container Content
    </h3>
    <p style={{ margin: 0, color: '#424242' }}>
      This content is centered and constrained by the container&apos;s max
      width. Resize the viewport to see how the container responds to different
      screen sizes.
    </p>
  </div>
);

export const Default: Story = {
  render: () => (
    <Container>
      <DemoContent />
    </Container>
  ),
};

export const CustomMaxWidth: Story = {
  render: () => (
    <Container maxWidth="800px">
      <DemoContent />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Container with custom max-width of 800px instead of the default 1200px.',
      },
    },
  },
};

export const NarrowWidth: Story = {
  render: () => (
    <Container maxWidth={600}>
      <DemoContent />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Narrow container using numeric value (600px) for max-width.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => (
    <Container maxWidth="none" style={{ maxWidth: 'none' }}>
      <DemoContent />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full-width container that spans the entire viewport width.',
      },
    },
  },
};

export const CustomPadding: Story = {
  render: () => (
    <Container padding="xl">
      <DemoContent />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Container with extra large padding (64px) instead of the default medium (16px).',
      },
    },
  },
};

export const NoPadding: Story = {
  render: () => (
    <Container padding="none">
      <DemoContent />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Container with no internal padding.',
      },
    },
  },
};

export const NestedContainers: Story = {
  render: () => (
    <Container>
      <div
        style={{
          backgroundColor: '#fff3e0',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <h3 style={{ margin: '0 0 15px 0' }}>Outer Container Content</h3>
        <Container
          maxWidth="600px"
          padding="lg"
          style={{ backgroundColor: '#f3e5f5' }}
        >
          <DemoContent />
        </Container>
      </div>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Nested containers with different max-widths and padding.',
      },
    },
  },
};

export const WithCustomSpacing: Story = {
  render: () => (
    <Container marginY="xl" paddingY="lg">
      <DemoContent />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Container with custom vertical margin and padding using the spacing system.',
      },
    },
  },
};

export const PolymorphicMain: Story = {
  render: () => (
    <Container as="main" maxWidth="900px">
      <DemoContent />
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Container rendered as a semantic main element for page content.',
      },
    },
  },
};

export const ArticleContainer: Story = {
  render: () => (
    <Container as="article" maxWidth="700px" padding="lg">
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ margin: '0 0 20px 0', fontSize: '32px', color: '#333' }}>
          Article Title
        </h1>
        <p style={{ margin: '0 0 15px 0', lineHeight: '1.6', color: '#555' }}>
          This is an example of using Container as an article element. The
          container provides optimal reading width and spacing for content.
        </p>
        <p style={{ margin: 0, lineHeight: '1.6', color: '#555' }}>
          The max-width ensures lines don&apos;t become too long to read
          comfortably, while the padding provides breathing room around the
          content.
        </p>
      </div>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Semantic article container with optimal reading width and spacing.',
      },
    },
  },
};
