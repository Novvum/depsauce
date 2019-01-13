import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import { Container } from '../components/Container';
import SearchBar from '../components/SearchBar';
import { styled } from '../styled';

const Center = styled.div`
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export default class Search extends React.Component<{}, {}> {
  handleSubmit = values => {
    console.log(values);
    return;
  };
  render() {
    return (
      <Layout>
        <div className="wp">
          <Container>
            <Center>
              <SearchBar handleSubmit={this.handleSubmit} />
              <h1>Hi from the second page</h1>
              <p>Welcome to page 2</p>
              <Link to="/">Go back to the homepage</Link>
            </Center>
          </Container>
        </div>
      </Layout>
    );
  }
}
