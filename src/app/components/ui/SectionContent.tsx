// src/components/ui/SectionContent.tsx
import styled, { css } from 'styled-components';

const SectionContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.containerWidth};
    margin: 0 auto;
    padding: 0 ${theme.spacings.md};

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: 0 ${theme.spacings.sm};
    }
  `}
`;

export default SectionContent;
