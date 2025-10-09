import React from 'react';
import { 
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel
} from './Checkbox.styles';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked = false, onChange, ...props }) => {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox
        id={id}
        checked={checked}
        onChange={onChange}
        {...props} // aqui você pode passar disabled, name, etc.
      />
      <StyledCheckbox checked={checked} />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
