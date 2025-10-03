// src/components/contact/ContactForm.styles.ts

"use client";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  max-width: 480px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.95rem;
`;

export const Input = styled.input`
  padding: 0.65rem 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 0.95rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(1, 131, 131, 0.25);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.65rem 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 0.95rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(1, 131, 131, 0.25);
  }
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  padding: 0.7rem 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.25s ease, transform 0.15s ease;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
    outline: none;
    box-shadow: 0 0 0 2px rgba(1, 131, 131, 0.35);
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
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

export const ErrorMessage = styled.p`
  color: #e63946; /* Vermelho de erro */
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;
