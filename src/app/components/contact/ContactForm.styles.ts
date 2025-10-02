"use client";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({ theme }) => theme.colors.white};
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  max-width: 700px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.25);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.25);
  }
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  padding: 0.85rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.25s ease, transform 0.15s ease;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
    outline: none;
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.35);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const SuccessMessage = styled.p`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
`;
