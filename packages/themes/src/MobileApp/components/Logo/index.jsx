import React from 'react';
import styled from 'styled-components';

import { base } from '@pagerland/common/src/utils';

import logo from '../../assets/omnion.svg';
// import logo from '../../assets/Logo.svg';

const Img = styled.img`
  display: block;
  ${base};
`;

const Logo = props => <Img src={logo} alt="Mobile App" {...props} height={40} />;

export default Logo;
