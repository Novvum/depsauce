import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';

const SearchInput = styled.input`
  background: transparent;
  color: ${p => p.theme.editorColors.navigationBarText};
  border: none;
  padding: 6px 12px;
  padding-left: 32px;
  font-size: 13px;
  flex: 1;
  outline: none;
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  color: ${p => p.theme.editorColors.buttonText};
  background: ${p => p.theme.editorColors.button};
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
    background-color: ${p => p.theme.editorColors.buttonHover};
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  color: ${p => p.theme.editorColors.navigationBarText};
  background: ${p => p.theme.editorColors.navigationBar};
  padding: 10px 10px 4px;
  border-radius: 4px;
  align-items: center;
`;

const Pulse = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${p => p.theme.editorColors.icon};
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
  handleSubmit: (values: any) => void;
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

  handleSubmit = (event: any) => {
    this.props.handleSubmit(this.state.query);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SearchBarWrapper>
          <SearchInput
            name="searchInput"
            type="text"
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
