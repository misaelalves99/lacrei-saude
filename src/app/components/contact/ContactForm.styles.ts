"use client";

import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.2);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.3);
  }
`;

export const SuccessMessage = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
`;
