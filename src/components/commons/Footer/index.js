/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import styled from 'styled-components';

const TwitterIcon = require('../../../../public/icons/Twitter.png').default;
const GitHubIcon = require('../../../../public/icons/Github.png').default;
const LinkedinIcon = require('../../../../public/icons/Linkedin.png').default;

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.secondary.color};
  width: 100%;
  min-height: 100px;
  border-radius: 0px 0px 15px 15px;
  border-top: 5px groove;
  border-color: ${({ theme }) => theme.colors.borders.primary.color};
`;

const IconsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.background.tertiary.color};
  border-radius: 15px;
  border: 2px groove;
  border-color: ${({ theme }) => theme.colors.borders.primary.color};
`;

const Icons = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    width:100%;
    img{
      width:40px;
      border: 2px groove;
      border-color: ${({ theme }) => theme.colors.borders.primary.color};
      border-radius: 50%;
      &:hover,
      &:focus {
        border-color: #ff0066;
        cursor: pointer;
        transform: scale(1.05);
      }
    }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <IconsWrapper>
        <Icons href="https://www.linkedin.com/in/felipevash/">
          <img src={LinkedinIcon} alt="Link para perfil do LinkedIn de Felipe Vash" />
        </Icons>
        <Icons href="http://github.com/felipevash">
          <img src={GitHubIcon} alt="Link para perfil do GitHub de Felipe Vash" />
        </Icons>
        <Icons href="http://twitter.com/felipevash">
          <img src={TwitterIcon} alt="Link para perfil do Twitter de Felipe Vash" />
        </Icons>
      </IconsWrapper>
    </FooterWrapper>
  );
}
