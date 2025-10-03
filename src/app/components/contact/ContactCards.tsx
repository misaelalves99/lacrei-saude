"use client";

import React from "react";
import * as S from "./ContactCards.styles";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CONTACTS = [
  { title: "Telefone", text: "(11) 99999-9999", icon: <FaPhone size={28} color="#018383" /> },
  { title: "E-mail", text: "contato@lacrei.com", icon: <FaEnvelope size={28} color="#018383" /> },
  { title: "Endereço", text: "Rua Exemplo, 123 - São Paulo, SP", icon: <FaMapMarkerAlt size={28} color="#018383" /> },
];

export const ContactCards: React.FC = () => {
  return (
    <S.ContactGrid>
      {CONTACTS.map((item) => (
        <S.ContactCard key={item.title}>
          <div>{item.icon}</div>
          <S.ContactCardTitle>{item.title}</S.ContactCardTitle>
          <S.ContactCardText>{item.text}</S.ContactCardText>
        </S.ContactCard>
      ))}
    </S.ContactGrid>
  );
};
