// src/app/servicos/components/ServicesGrid.tsx
"use client";

import React from "react";
import * as S from "./ServicesGrid.styles";
import { ServiceCard } from "./ServiceCard";
import { FaStethoscope, FaFlask, FaLaptopMedical, FaUserNurse, FaSyringe, FaBookOpen } from "react-icons/fa";

const SERVICES = [
  { title: "Consulta Médica", description: "Atendimento personalizado com profissionais qualificados.", icon: <FaStethoscope size={36} color="#018383" /> },
  { title: "Exames Laboratoriais", description: "Realização de exames com segurança, agilidade e resultados confiáveis.", icon: <FaFlask size={36} color="#018383" /> },
  { title: "Telemedicina", description: "Consultas online para maior comodidade, mantendo qualidade e segurança.", icon: <FaLaptopMedical size={36} color="#018383" /> },
  { title: "Acolhimento Psicológico", description: "Suporte emocional e acompanhamento psicológico acessível a todos.", icon: <FaUserNurse size={36} color="#018383" /> },
  { title: "Vacinação", description: "Campanhas de vacinação para prevenção e promoção da saúde comunitária.", icon: <FaSyringe size={36} color="#018383" /> },
  { title: "Educação em Saúde", description: "Programas educativos e workshops para promover bem-estar e prevenção.", icon: <FaBookOpen size={36} color="#018383" /> },
];

export const ServicesGrid: React.FC = () => (
  <S.GridWrapper>
    {SERVICES.map((service) => (
      <ServiceCard key={service.title} {...service} />
    ))}
  </S.GridWrapper>
);
