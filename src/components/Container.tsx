import { styled } from '../styled';

export const Container = styled('div')<{ white?: boolean }>`
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  color: ${p => (p.white ? 'white' : 'inherit')};
  margin-left: auto;
  width: 100%;
`;