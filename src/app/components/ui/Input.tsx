// src/components/ui/Input.tsx
import React, { InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: ReactNode;
  inputStyle?: React.CSSProperties; // Permite passar estilo inline
}

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
  }

  .right-icon {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;

const Input: React.FC<InputProps> = ({ rightIcon, inputStyle, ...props }) => {
  return (
    <InputWrapper>
      <input style={inputStyle} {...props} />
      {rightIcon && <span className="right-icon">{rightIcon}</span>}
    </InputWrapper>
  );
};

export default Input;
