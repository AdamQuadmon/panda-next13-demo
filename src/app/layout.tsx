import './globals.css';

import React from 'react';

import { ThemedHTML } from '@/components/ThemedHTML';
import { Container, Flex } from '../../styled-system/jsx';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const RootLayout = async (param: { children: React.ReactNode }) => {
  const { children } = param;

  return (
    <ThemedHTML>
      <body>
        <Container w="full">
          <Flex direction="row" justify="space-between" align="center">
            <Flex>A Panda Demo for Next.js</Flex>
            <Flex>
              <ThemeSwitcher />
            </Flex>
          </Flex>
          <Container
            w="full"
            //@ts-ignore align works on Container but typescript doesn't know it
            align="center"
          >
            {' '}
            {children}
          </Container>
        </Container>
      </body>
    </ThemedHTML>
  );
};

export default RootLayout;
