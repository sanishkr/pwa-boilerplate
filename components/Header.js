import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';

const StyledNav = styled.nav`
  ${tw`flex flex-wrap items-center justify-between p-6 bg-gray-900`}
`;

const Header = ({ router }) => {
  return (
    <StyledNav>
      <div css={tw`flex items-center flex-shrink-0 mr-6 text-white`}>
        <span css={tw`text-xl font-semibold tracking-tight`}>Tailwind CSS</span>
      </div>
      <div css={tw`flex-grow block w-full lg:flex lg:items-center lg:w-auto`}>
        <div css={tw`text-sm lg:flex-grow`}>
          <Link href="/">
            <button
              css={tw`block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white`}
            >
              Page1
            </button>
          </Link>
          <Link href="/posts">
            <button
              css={tw`block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white`}
            >
              Page2
            </button>
          </Link>
        </div>
      </div>
    </StyledNav>
  );
};

export default Header;
