import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';
import Link from 'next/link';

const StyledNav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`}
`;

const Header = ({ router }) => {
  return (
    <StyledNav>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Tailwind CSS
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/page1">
            <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Page1
            </button>
          </Link>
          <Link href="/page2">
            <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Page2
            </button>
          </Link>
        </div>
      </div>
    </StyledNav>
  );
};

export default Header;
