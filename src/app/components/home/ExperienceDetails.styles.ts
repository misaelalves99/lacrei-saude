import styled, { css } from 'styled-components';

export const DetailsContainer = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxl} 0;
    text-align: center;
    font-family: 'Nunito', sans-serif;
    margin: 4rem 0;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 2.5rem;
    font-weight: ${theme.fonts.weights.semibold};
    color: rgb(31, 31, 31);
    margin-bottom: ${theme.spacings.xxl};

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.fonts.sizes.xl};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.lg};
    max-width: 70rem;
    margin: 2rem auto 0;
  `}
`;

export const DetailCard = styled.div`
  ${({ theme }) => css`
    background-color: rgb(249, 243, 255);
    border-radius: 0.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    flex: 1 1 20rem;
    box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      flex: 1 1 100%;
    }
  `}
`;

export const IconWrapper = styled.div`
  position: relative;
  top: -2.5rem;
  width: 5.25rem;
  height: 5.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -1.5rem;

  img {
    width: 5.25rem;
    height: 5.25rem;
    object-fit: cover;
    border-radius: 0 0 2rem 2rem;
    position: relative;
    top: -0.5rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  background: linear-gradient(105.43deg, #018383 14.39%, #014687 84.69%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0.5rem;
`;

export const CardDescription = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: rgb(81, 81, 81);
  line-height: 1.6;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  background-color: #018762;
  width: 14rem;
  height: 3rem;
  border: 2px solid #018762;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #026e50;
    border-color: #026e50;
    transform: translateY(-3px);
  }
`;
