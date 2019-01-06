import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import Image from '../components/Image';
import { Container } from '../components/Container';

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <div className="wp">
          <Container>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>

            <figure>
              <Image />
            </figure>
            <Link to="/page-2/">Go to page 2</Link>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
