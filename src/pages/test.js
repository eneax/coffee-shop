import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

// use tailwind classes the styled way
const Header = styled.header`
  ${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

const Test = () => (
  <div css={tw`text-center`}>
    <Header>
      <p css={tw`text-blue-300`}>
        Using <code>tailwind</code> and <code>styled-components</code> together.
      </p>
    </Header>
  </div>
);

export default Test;
