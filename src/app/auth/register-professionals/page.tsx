// src/app/auth/RegisterProfessionals.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Checkbox from '../../components/ui/Checkbox';

import {
  RegisterPageContainer,
  RegisterCard,
  FormContainer,
  IllustrationContainer,
  Title,
  Subtitle,
  Form,
  Actions,
  PasswordCriteria,
  PasswordItem,
  HalfInputs,
} from './RegisterProfessionals.styles';

const RegisterProfessionals: React.FC = () => {
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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
    // Aqui você colocaria a lógica de registro
  };

  // Estilo inline para inputs preenchidos
  const inputFilledStyle: React.CSSProperties = { 
    backgroundColor: '#F2F6FA', 
    border: '1px solid #dee2e6' 
  };

  return (
    <RegisterPageContainer>
      <RegisterCard>
        <FormContainer>
          <Title>Crie sua conta na Lacrei Saúde</Title>
          <Subtitle>Junte-se à comunidade e acesse todas as funcionalidades da Lacrei Saúde.</Subtitle>

          <Form onSubmit={handleSubmit}>
            {/* Nome e Sobrenome lado a lado */}
            <HalfInputs>
              <div>
                <label htmlFor="nome">Nome civil ou social</label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome civil ou social"
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
              placeholder="Digite seu e-mail"
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
                <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', color: '#666' }}>
                  👁️
                </span>
              }
            />

            <PasswordCriteria>
              <p>A senha deve contar, no mínimo:</p>
              {passwordCriteria.map((item, index) => (
                <PasswordItem key={index} passed={item.passed}>
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
                <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', color: '#666' }}>
                  👁️
                </span>
              }
            />

            {/* Checkboxes */}
            <Checkbox
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              label={
                <span>
                  Li e concordo com os 
                  <Link href="/termos" style={{ color: '#018383', marginLeft: '5px' }}>Termos de Uso</Link> e 
                  <Link href="/politica" style={{ color: '#018383', marginLeft: '5px' }}>Política de Privacidade</Link>
                </span>
              }
            />

            <Checkbox
              id="over18"
              name="over18"
              checked={formData.over18}
              onChange={handleChange}
              label="Tenho 18 anos ou mais"
            />

            <Actions>
              <Button type="submit" size="large" variant="primary">
                Cadastrar
              </Button>
            </Actions>
          </Form>
        </FormContainer>

        <IllustrationContainer>
          <Image
            src="/assets/cadastro/register-img.597dd513.svg"
            alt="Ilustração de uma mulher com lupa revisando documentos"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 0, 50vw"
          />
        </IllustrationContainer>
      </RegisterCard>
    </RegisterPageContainer>
  );
};

export default RegisterProfessionals;
