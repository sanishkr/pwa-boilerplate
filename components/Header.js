import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';
import DarkToggle from './DarkToggle';

const StyledNav = styled.nav`
  ${tw`flex flex-wrap items-baseline justify-between p-6`}
  background-color: var(--color-gray700);
`;

const Header = ({ router }) => {
  return (
    <StyledNav>
      <div css={tw`flex items-center flex-shrink-0 mr-6 text-white`}>
        <h1 css={tw`px-4 text-xl font-semibold tracking-tight`}>
          PWA Boilerplate
        </h1>
        <DarkToggle />
      </div>
      <div css={tw`flex items-center justify-end flex-grow text-sm`}>
        <Link href="/" as="/" passHref>
          <a css={tw`block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white`}>
            Page1
          </a>
        </Link>
        <Link href="/posts" as="/posts" passHref>
          <a css={tw`block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white`}>
            Page2
          </a>
        </Link>
      </div>
    </StyledNav>
  );
};

export default Header;
