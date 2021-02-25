// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import styled, { css } from 'styled-components';

const TwitterIcon = require(`../../../../public/icons/Twitter.png`).default;
const GitHubIcon = require(`../../../../public/icons/Github.png`).default;

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#000000;
  width: 100%;
  min-height: 100px;
  border-radius: 0px 0px 15px 15px;
  border-top: 5px groove #4dffff;
`;

const IconsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color:#FFFFFF1A;
  border-radius: 15px;
  border: 2px groove #4dffff;
`;

const Icons = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    img{
      width: 100%;
      border: 2px groove #4dffff;
      border-radius: 50%;
      &:hover,
      &:focus {
        border: 2px groove #ff0066;
        cursor: pointer;
      }
    }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <IconsWrapper>
        <Icons href='http://twitter.com/felipevash'>
          <img src={TwitterIcon} alt='Link para perfil do Twitter de Felipe Vash'/>
        </Icons>
        <Icons href='http://github.com/felipevash'>
          <img src={GitHubIcon} alt='Link para perfil do GitHub de Felipe Vash'/>
        </Icons>
      </IconsWrapper>
    </FooterWrapper>
  );
}