import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors */
    --primary-color: #196dff;
    --secondary-color: #000000;
    --text-color: #333333;
    --light-color: #ffffff;
    --gray-color: #f5f5f5;
    --dark-gray: #666666;

    /* Typography */
    --font-family-base: 'Tektur', sans-serif;
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;     /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 1.875rem;  /* 30px */
    --font-size-4xl: 2.25rem;   /* 36px */

    /* Spacing */
    --spacing-xs: 0.25rem;      /* 4px */
    --spacing-sm: 0.5rem;       /* 8px */
    --spacing-md: 1rem;         /* 16px */
    --spacing-lg: 1.5rem;       /* 24px */
    --spacing-xl: 2rem;         /* 32px */
    --spacing-2xl: 3rem;        /* 48px */
    --spacing-3xl: 4rem;        /* 64px */

    /* Breakpoints */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-family-base);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
    font-size: var(--font-size-base);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);

    @media (max-width: var(--breakpoint-md)) {
      padding: 0 var(--spacing-sm);
    }
  }

  .section {
    padding: var(--spacing-3xl) 0;

    @media (max-width: var(--breakpoint-md)) {
      padding: var(--spacing-2xl) 0;
    }
  }

  .button-primary {
    background-color: var(--primary-color);
    color: var(--light-color);
    border: none;
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: 30px;
    font-weight: 500;
    font-size: var(--font-size-base);
    transition: all 0.3s ease;

    &:hover {
      background-color: #2563eb;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .button-outline {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: 30px;
    font-weight: 500;
    font-size: var(--font-size-base);
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--primary-color);
      color: var(--light-color);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: var(--spacing-md);
    font-family: var(--font-family-base);
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: var(--font-size-4xl);
  }

  h2 {
    font-size: var(--font-size-3xl);
  }

  h3 {
    font-size: var(--font-size-2xl);
  }

  p {
    margin-bottom: var(--spacing-md);
  }

  /* Accessibility */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Focus styles */
  :focus {
    outline: none;
  }

  /* Custom focus styles for interactive elements */
  button:focus,
  a:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  /* Remove focus ring for all elements */
  *:focus {
    outline: none !important;
  }

  /* Remove default button styles */
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* Remove default input styles */
  input, textarea, select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* Selection */
  ::selection {
    background-color: var(--primary-color);
    color: var(--light-color);
  }

  button, a {
    font-family: var(--font-family-base);
  }
`;

export default GlobalStyles; 