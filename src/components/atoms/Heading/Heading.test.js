import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Heading from './Heading';
import { theme } from 'theme/mainTheme';

describe('Heading Component', () => {
  it('Renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading>Hello</Heading>
      </ThemeProvider>
    );

    getByText('Hello');
  });
});
