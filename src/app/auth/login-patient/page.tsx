"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import {
  LoginPageContainer,
  LoginCard,
  FormContainer,
  IllustrationContainer,
  Title,
  Subtitle,
  Form,
  Actions,
  LinkAction,
} from './LoginPatient.styles';

const LoginPatient: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('micaelalves110@gmail.com');
  const [password, setPassword] = useState('.........');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Implementar autenticação real aqui
  };

  return (
    <LoginPageContainer>
      <LoginCard>
        <FormContainer>
          <Title>Boas-vindas à Lacrei Saúde</Title>
          <Subtitle>Entre ou crie sua conta Lacrei Saúde.</Subtitle>

          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@exemplo.com"
              style={{ border: '1px solid #dee2e6' }}
            />

            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ backgroundColor: '#F2F6FA', border: '1px solid #dee2e6' }}
              rightIcon={
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer', color: '#666' }}
                >
                  👁️
                </span>
              }
            />

            <Actions>
              <Button
                type="submit"
                size="large"
                variant="primary"
              >
                Entrar
              </Button>
            </Actions>
          </Form>

          <Button
            size="large"
            variant="outline"
            onClick={() => router.push('/auth/register-patient')}
          >
            Criar conta
          </Button>

          <LinkAction href="/esqueci-minha-senha">
            Esqueci minha senha
          </LinkAction>
        </FormContainer>

        <IllustrationContainer>
          <Image
            src="/assets/login/illustration-login.17db3f05.svg"
            alt="Ilustração de um médico e uma paciente"
            width={600}
            height={600}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </IllustrationContainer>
      </LoginCard>
    </LoginPageContainer>
  );
};

export default LoginPatient;
