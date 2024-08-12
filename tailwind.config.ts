
import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
  // 2. Opt for dark mode to be handled via the class method
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // 3. Append the path to the Skeleton package
    join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: { preset: ["rocket"] }
    })
  ]
} satisfies Config;

export default config;