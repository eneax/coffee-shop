import styled from 'styled-components';
import { above } from '../utils';

export const Title = styled.h1`
  font-size: 1.25rem;
  ${above.tablet`
		font-size: 2.25rem;
	`}
  font-weight: 600;
  padding-right: 1rem;
  padding-left: 1rem;
  ${above.laptop`
		padding-right: 0;
    padding-left: 0;
	`}
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const HeadingThree = styled.h3`
  font-size: 1rem;
  ${above.tablet`
    font-size: 1.5rem;
  `}
  margin-top: 0;
  line-height: 1.25;
`;
