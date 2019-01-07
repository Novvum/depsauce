import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider, theme as styledTheme, styled } from '../styled';
import Header from '../components/Header';

const Content = styled.div`
  height: 100%;
  width: 100%;
  .tp {
    padding-top: 1rem;
  }
  .wp {
    padding: 5rem 2.5rem 1rem 2.5rem;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
interface LayoutProps {
  children: any;
}

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
}

class Layout extends React.Component<LayoutProps, {}> {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteMetaDataQuery {
            site {
              siteMetadata {
                title
                description
                keywords
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => {
          const { siteMetadata } = data.site;
          const { children } = this.props;

          return (
            <Wrapper>
              <Helmet
                title={siteMetadata.title}
                meta={[
                  {
                    name: 'description',
                    content: siteMetadata.description,
                  },
                  {
                    name: 'keywords',
                    content: siteMetadata.keywords,
                  },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Header siteTitle={siteMetadata.title} />
              <Content>{children}</Content>
            </Wrapper>
          );
        }}
      />
    );
  }
}

const WithTheme: React.SFC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={styledTheme}>
    <Layout>{children}</Layout>
  </ThemeProvider>
);

export default WithTheme;
