import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';
import Link from 'next/link';

const StyledNav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap bg-gray-900 p-6`}
`;

const Header = ({ router }) => {
  return (
    <StyledNav>
      <div css={tw`flex items-center flex-shrink-0 text-white mr-6`}>
        <span css={tw`font-semibold text-xl tracking-tight`}>Tailwind CSS</span>
      </div>
      <div css={tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div css={tw`text-sm lg:flex-grow`}>
          <Link href="/page1">
            <button
              css={tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4`}
            >
              Page1
            </button>
          </Link>
          <Link href="/page2">
            <button
              css={tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4`}
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
