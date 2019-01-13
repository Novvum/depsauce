import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import Image from '../components/Image';
import { Container } from '../components/Container';

interface IndexPageProps {
  data: any;
}

class IndexPage extends React.Component<IndexPageProps, {}> {
  // fetchSuggestions = (value: string) => {};
  public render() {
    return (
      <Layout>
        <div className="wp">
          <Container>
            <figure style={{ maxWidth: '200px' }}>
              <Image />
            </figure>
            <Link to="/test/">Go to Search</Link>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
