import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #00c853;
    --secondary-color: #000000;
    --text-color: #333333;
    --light-color: #ffffff;
    --gray-color: #f5f5f5;
    --dark-gray: #666666;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Arial, sans-serif;
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 80px 0;
  }

  .button-primary {
    background-color: var(--primary-color);
    color: var(--light-color);
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #00a844;
    }
  }

  .button-outline {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--primary-color);
      color: var(--light-color);
    }
  }
`;

export default GlobalStyles; 