import type { Preview } from '@storybook/nextjs';
import '../app/globals.css';

// Add font CSS variables that are normally provided by Next.js layout
const style = document.createElement('style');
style.innerHTML = `
  :root {
    --font-suisse-intl: 'SuisseIntl-Regular', Arial, Helvetica, sans-serif;
    --font-geist-mono: 'Geist Mono', Consolas, 'Courier New', monospace;
  }
`;
document.head.appendChild(style);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      toc: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
