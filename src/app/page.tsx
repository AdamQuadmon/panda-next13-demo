import Image from 'next/image';

import { css } from '../../styled-system/css';
import Link from 'next/link';
import {
  Center,
  Container,
  Flex,
  HStack,
  styled,
} from '../../styled-system/jsx';

export default function Home() {
  return (
    <Container w="full">
      <Flex direction="row" justify="space-between" align="center">
        <Flex>A Panda Demo for Next.js</Flex>
        <Flex>
          <a
            href="https://panda-css.com/docs/getting-started/nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <span className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
              Hello 🐼!
            </span>
          </a>
        </Flex>
      </Flex>
      <Container
        w="full"
        //@ts-ignore align works on Container but typescript doesn't know it
        align="center"
      >
        <styled.h2 fontWeight="black" fontSize="2xl">
          Pform-reset demo
        </styled.h2>
        <Link href="/form-reset">Go Test Pform</Link>
        <styled.h2 fontWeight="black" fontSize="2xl">
          css-picons demo
        </styled.h2>
        <Link href="/picons">Go Test Picons</Link>
      </Container>
    </Container>
  );
}
