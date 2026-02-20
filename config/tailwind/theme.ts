import type { Config as TailwindConfig } from 'tailwindcss'

type ThemeConfig = TailwindConfig['theme'];

/**
 * 
 *   --background-body: #011627;
  --borders-color: #1E2D3D;

  --index-title-color: #E5E9F0;

  --active-text-color: #fff;
  --text-color: #607B96;

  --input-background-color: #011221;
  --input-color: #465E77;

  --btn-bg-color: #1C2B3A;
  --btn-font-color: #fff;

  --btn-bg-hover-color: #505ed1;
  --btn-font-hover-color: #fff;

  --btn-primary-bg-color: var(--accent);
  --btn-primary-font-color: #01080E;
 */

const theme: ThemeConfig = {
  fontFamily: {
    sans: ['"Fira Code"', 'monospace'],
  },
  extend: {
    colors: {
      primary: '#43D9AD',
      secondary: '#2c3e50',
      
      'main-background': '#011627',
      'border-color': '#1E2D3D',
      
      'index-title-color': '#E5E9F0',
      'default': '#607B96',
      'active-text-color': '#fff',
      'button-background': '#1C2B3A',
      skeleton: '#fbfbfb24',
      deep: '#011221',

      accent1: '#FEA55F',
      accent2: '#43D9AD',
      accent3: '#4D5BCE'
    }
  }
};

export default theme;