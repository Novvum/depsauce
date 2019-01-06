import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface StaticQueryProps {
  placeholderImage: {
    childImageSharp: {
      fluid: object;
    };
  };
}

class Image extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <StaticQuery
        // tslint:disable-next-line:jsx-no-multiline-js
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "depsauce.png" }) {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => (
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Gatsby + TypeScript"
          />
        )}
      />
    );
  }
}

export default Image;
