import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '../components/Container';
import Layout from '../layout';
import ReactMarkdown from 'react-markdown';

interface IProjectProps {
  context?: any;
  data?: any;
}

interface IProjectState {
  readme: string | null;
}
export default class Project extends React.Component<
  IProjectProps,
  IProjectState
> {
  constructor(props: IProjectProps) {
    super(props);
    this.state = {
      readme: null,
    };
  }
  componentDidMount() {
    const project = this.props.data.depsauce.lib.getProject;
    const uri = `${project.repository_url.replace(
      'https://github.com',
      'https://raw.githubusercontent.com'
    )}/master/README.md`;
    return fetch(uri)
      .then(res => res.text())
      .then(r =>
        this.setState({
          readme: r,
        })
      )
      .catch(err => console.error(err));
  }
  render() {
    const project = this.props.data.depsauce.lib.getProject;
    const { readme } = this.state;
    return (
      <Layout>
        <div className="wp">
          <Container>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <a href={project.repository_url}>Github Url</a>
            <br />
            <a href={project.homepage}>Homepage</a>
            <h2>Stats</h2>
            <p>Stars: {project.stars}</p>
            <p>Rank: {project.rank}</p>
            <p>Forks: {project.forks}</p>
            <p>Dependents: {project.dependents_count}</p>
            <p>Dependent Repos: {project.dependent_repos_count}</p>
            <h2>Project Info</h2>
            <p>Platform: {project.platform}</p>
            <p>
              Keywords:
              {project.keywords.map((k: string) => (
                <p key={k}>{k}</p>
              ))}
            </p>
            <p>Language: {project.language}</p>
            <p>Latest Release #: {project.latest_release_number}</p>
            {readme && <ReactMarkdown source={readme} />}
          </Container>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query TESTPROJECTTEMPLATE {
    depsauce {
      lib {
        getProject(platform: npm, projectName: "graphql") {
          name
          repository_url
          platform
          description
          forks
          rank
          homepage
          keywords
          status
          language
          latest_release_number
          dependents_count
          dependent_repos_count
          stars
        }
      }
    }
  }
`;
