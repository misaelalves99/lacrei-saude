"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Checkbox from '../../components/ui/Checkbox';
import Link from 'next/link';

import {
  RegisterPageContainer,
  RegisterCard,
  FormContainer,
  IllustrationContainer,
  Title,
  Subtitle,
  Form,
  Actions,
  LinkAction,
  HalfInputs,
  PasswordCriteria,
  PasswordItem,
  CheckboxGroup,
  CheckboxContainer
} from './RegisterPatient.styles';

const RegisterPatient: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    terms: false,
    over18: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const passwordCriteria = [
    { text: '8 a 16 caracteres', passed: formData.password.length >= 8 && formData.password.length <= 16 },
    { text: 'Letra minúscula', passed: /[a-z]/.test(formData.password) },
    { text: 'Letra maiúscula', passed: /[A-Z]/.test(formData.password) },
    { text: 'Número', passed: /[0-9]/.test(formData.password) },
    { text: 'Caractere especial (ex: #, $, %, ...)', passed: /[^a-zA-Z0-9\s]/.test(formData.password) },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
    // Aqui você adiciona a lógica de registro via API
  };

  const inputFilledStyle: React.CSSProperties = { 
    backgroundColor: '#F2F6FA', 
    border: '1px solid #dee2e6' 
  };

  return (
    <RegisterPageContainer>
      <RegisterCard>
        <FormContainer>
          <Title>Crie sua conta na Lacrei Saúde</Title>
          <Subtitle>Junte-se à comunidade e acesse todas as funcionalidades.</Subtitle>

          <Form onSubmit={handleSubmit}>
            <HalfInputs>
              <div>
                <label htmlFor="nome">Nome</label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  inputStyle={inputFilledStyle}
                />
              </div>
              <div>
                <label htmlFor="sobrenome">Sobrenome</label>
                <Input
                  id="sobrenome"
                  name="sobrenome"
                  type="text"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  placeholder="Digite seu sobrenome"
                  inputStyle={inputFilledStyle}
                />
              </div>
            </HalfInputs>

            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu.email@exemplo.com"
              inputStyle={inputFilledStyle}
            />

            <label htmlFor="confirmEmail">Confirme seu e-mail</label>
            <Input
              id="confirmEmail"
              name="confirmEmail"
              type="email"
              value={formData.confirmEmail}
              onChange={handleChange}
              placeholder="Confirme seu e-mail"
            />

            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              inputStyle={inputFilledStyle}
              rightIcon={
                <span 
                  onClick={() => setShowPassword(!showPassword)} 
                  style={{ cursor: 'pointer', color: '#666' }}
                >👁️</span>
              }
            />

            <PasswordCriteria>
              {passwordCriteria.map((item, idx) => (
                <PasswordItem key={idx} passed={item.passed}>
                  {item.passed ? '✓' : '•'} {item.text}
                </PasswordItem>
              ))}
            </PasswordCriteria>

            <label htmlFor="confirmPassword">Confirme sua senha</label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Digite sua senha"
              rightIcon={
                <span 
                  onClick={() => setShowPassword(!showPassword)} 
                  style={{ cursor: 'pointer', color: '#666' }}
                >👁️</span>
              }
            />

            {/* ✅ Container para checkboxes */}
            <CheckboxGroup>
              <CheckboxContainer>
                <Checkbox
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  label={
                    <span>
                      Li e concordo com os <Link href="/termos">Termos de Uso</Link> e <Link href="/politica">Política de Privacidade</Link>
                    </span>
                  }
                />
              </CheckboxContainer>

              <CheckboxContainer>
                <Checkbox
                  id="over18"
                  name="over18"
                  checked={formData.over18}
                  onChange={handleChange}
                  label="Tenho 18 anos ou mais"
                />
              </CheckboxContainer>
            </CheckboxGroup>

            <Actions>
              <Button type="submit" size="large" variant="primary">Cadastrar</Button>
            </Actions>
          </Form>

          <Button size="large" variant="outline" onClick={() => router.push('/auth/login-patient')}>
            Já tenho conta
          </Button>

          <LinkAction href="/esqueci-minha-senha">Esqueci minha senha</LinkAction>
        </FormContainer>

        <IllustrationContainer>
          <Image
            src="/assets/cadastro/register-img.597dd513.svg"
            alt="Ilustração de cadastro"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 0, 50vw"
          />
        </IllustrationContainer>
      </RegisterCard>
    </RegisterPageContainer>
  );
};

export default RegisterPatient;
