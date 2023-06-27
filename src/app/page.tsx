import { Container, Flex, styled } from '../../styled-system/jsx';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <styled.h2 fontWeight="black" fontSize="2xl">
        Pform-reset demo
      </styled.h2>
      <Link href="/form-reset">Go Test form-reset</Link>

      <styled.h2 fontWeight="black" fontSize="2xl">
        css-picons demo
      </styled.h2>
      <Link href="/picons">Go Test Picons</Link>
    </>
  );
}
