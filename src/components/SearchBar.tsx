import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';

const SearchInput = styled('input')`
  background: ${p => p.theme.editorColours.button};
  border-radius: 4px;
  color: ${p => p.theme.editorColours.navigationBarText};
  border: 1px solid ${p => p.theme.editorColours.background};
  padding: 6px 12px;
  padding-left: 32px;
  font-size: 13px;
  flex: 1;
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  color: ${p => p.theme.editorColours.buttonText};
  background: ${p => p.theme.editorColours.button};
  border-radius: 2px;
  flex: 0 0 auto;
  letter-spacing: 0.53px;
  font-size: 14px;
  padding: 6px 9px 7px 10px;
  margin-left: 6px;

  cursor: pointer;
  transition: 0.1s linear background-color;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    background-color: ${p => p.theme.editorColours.buttonHover};
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  background: ${p => p.theme.editorColours.navigationBar};
  padding: 10px 10px 4px;
  align-items: center;
`;

const Pulse = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${p => p.theme.editorColours.icon};
  border-radius: 100%;
`;

const SpinnerWrapper = styled.div`
  position: relative;
  margin: 6px;
`;

const Spinner = () => (
  <SpinnerWrapper>
    <Pulse />
  </SpinnerWrapper>
);

interface SearchBarState {
  query: string;
}

interface SearchBarProps {
  suggestions?: string[];
  fetchSuggestions?: () => void;
  handleSubmit: () => void;
}
export default class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarState
> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      query: '',
    };
  }
  onChange = (e: any) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <SearchBarWrapper>
          <SearchInput
            value={this.state.query}
            onChange={this.onChange}
            onBlur={this.props.fetchSuggestions}
          />
          <FontAwesomeIcon icon={faSearch} />
        </SearchBarWrapper>
        <Button type="submit">Search</Button>
      </form>
    );
  }
}
