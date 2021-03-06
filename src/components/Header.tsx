import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { styled, theme, mobile, css } from '../styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/pro-regular-svg-icons';

const AppBar = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  z-index: ${p => p.theme.zIndex.appBar};
  flex-shrink: 0;
  position: fixed;
  padding: 1rem;
  top: 0;
  left: auto;
  right: 0;
  background: ${p => p.theme.colors.white};
  transition: all 150ms ease 0s;
  justify-content: space-between;
  box-shadow: ${p => p.theme.shadows[4]};
`;

const HeaderWrapper = styled.div`
  height: 1rem;
  width: 100%;
  background: transparent;
`;

const Toolbar = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  @media (min-width: 576px) {
    maxwidth: 540px;
  }
  @media (min-width: 768px) {
    maxwidth: 720px;
  }
  @media (min-width: 992px) {
    maxwidth: 960px;
  }
  @media (min-width: 1200px) {
    maxwidth: 1140px;
  }
`;

const Brand = styled(Link)`
  text-decoration: none !important;
  align-items: center;
  display: flex;
  color: inherit;
  margin-right: ${p => p.theme.typography.rhythm(1 / 2)};
  span {
    margin-left: 8px;
  }
`;

const BrandIcon = styled.img`
  height: 2rem;
  object-fit: contain;
  margin: 0;
`;

const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
  width: 30%;
  ${mobile(css`
    display: none;
  `)}
`;

const MobileContainer = styled('nav')<{ open: boolean }>`
  display: none;
  ${p =>
    mobile(css`
      display: ${p.open ? 'flex' : 'none'} !important;
      flex-flow: column;
      flex-wrap: wrap;
      padding: 2.5rem;
      max-height: ${p.open ? '500px' : '0px'} !important;
      margin-top: 3rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      overflow-y: ${p.open ? 'auto' : 'hidden'};
      bottom: 0;
      transition-property: all;
      transition-duration: 0.75s;
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    `)}
`;

const MenuButton = styled.button`
  display: none;
  ${mobile(css`
    display: block;
    background: none;
    border: none;
    &:hover {
      color: ${p => p.theme.colors.link};
    }
    &:active {
      color: ${p => p.theme.colors.link};
    }
  `)}
`;

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.tint};
  &:hover {
    color: ${p => p.theme.colors.link};
    text-decoration: none;
  }
  ${mobile(css`
    width: 100%;
  `)}
`;

interface HeaderProps {
  siteTitle?: string;
}

interface HeaderState {
  open: boolean;
}

export interface ILink {
  title: string;
  path: string;
}
class Header extends React.PureComponent<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  public render() {
    const { open } = this.state;
    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                links {
                  link {
                    title
                    path
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { siteMetadata } = data.site;
          const links = siteMetadata.links;

          return (
            <HeaderWrapper>
              <AppBar>
                <Toolbar>
                  <Brand to="/" aria-label="DepSauce Homepage">
                    <BrandIcon
                      src={'/images/depsauce.png'}
                      alt="Gatsby Logo"
                      aria-hidden="true"
                    />
                  </Brand>
                  <MenuButton onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={open ? faTimes : faBars} />
                  </MenuButton>
                  <LinksContainer>
                    {links.map((l: { link: ILink }) => (
                      <NavLink
                        key={l.link.path}
                        to={l.link.path}
                        activeStyle={{
                          color: theme.colors.link,
                          borderBottomColor: theme.colors.link,
                          textDecoration: 'underline',
                        }}
                      >
                        {l.link.title}
                      </NavLink>
                    ))}
                  </LinksContainer>
                </Toolbar>
              </AppBar>
              <MobileContainer open={open}>
                {links.map((l: { link: ILink }) => (
                  <NavLink
                    key={l.link.path}
                    to={l.link.path}
                    activeStyle={{
                      color: theme.colors.link,
                      borderBottomColor: theme.colors.link,
                      textDecoration: 'underline',
                    }}
                  >
                    {l.link.title}
                  </NavLink>
                ))}
              </MobileContainer>
            </HeaderWrapper>
          );
        }}
      />
    );
  }
}

export default Header;
