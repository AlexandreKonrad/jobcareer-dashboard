# 💼 JobCareer - Gestor de Candidaturas

> Mantenha o foco na sua carreira. Um dashboard intuitivo para organizar, rastrear e gerir as suas candidaturas a vagas de emprego, construído com foco em performance e arquitetura limpa.

## 🔗 Links

- **Deploy (Demo Online):** [https://jobcareer-dashboard.vercel.app/](https://jobcareer-dashboard.vercel.app/)
- **Repositório:** [https://github.com/AlexandreKonrad/jobcareer-dashboard/tree/main](https://github.com/AlexandreKonrad/jobcareer-dashboard/tree/main)

---

## 💻 Sobre o Projeto

O **JobCareer** é uma Single Page Application (SPA) desenvolvida para resolver um problema comum de quem procura emprego: a desorganização. Com este dashboard, o utilizador pode registar vagas, atualizar o status do processo de recrutamento e visualizar métricas em tempo real.

O foco técnico do projeto foi a criação de uma arquitetura escalável, utilizando React com TypeScript, garantindo tipagem estática robusta e componentes reutilizáveis.

## ✨ Funcionalidades Principais

- **📊 Dashboard Visual:** Cartões de estatísticas com contagem em tempo real (Candidaturas, Entrevistas, Propostas, etc.).
- **📝 Gestão de Vagas (CRUD):** Adicionar, remover e atualizar o status de candidaturas.
- **💾 Persistência de Dados:** Uso de `localStorage` para manter os dados guardados no navegador do utilizador.
- **🎨 Interface Moderna:** Layout responsivo com Dark Mode automático e design system consistente.
- **⚡ Performance Otimizada:** Uso de Memoização (`useMemo`, `React.memo`) para evitar renderizações desnecessárias.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com uma stack moderna focada em performance e DX (Developer Experience):

- **Core:** React (Vite) + TypeScript
- **Estilização:** Tailwind CSS + Flowbite React
- **Ícones:** React Icons / Lucide
- **Deploy:** Vercel
- **Qualidade de Código:** ESLint, Clean Code, Hooks Personalizados.

## 🏗️ Arquitetura e Refatoração

Durante o desenvolvimento, o projeto passou por um processo rigoroso de refatoração para atingir padrões de produção:

- **Custom Hooks:** A lógica de negócio foi separada da UI através de hooks como `useJobManager` (CRUD) e `useJobStats` (Cálculos), seguindo o princípio de *Separation of Concerns*.
- **Performance:** Implementação de `useCallback` e `React.memo` em componentes de lista (`JobItem`) para garantir que apenas os itens modificados sejam renderizados.
- **Type Safety:** Tipagem rigorosa com Interfaces e Types para todas as props e estados (`Job`, `JobFormData`), eliminando o uso de `any`.
- **UX Improvements:** Tratamento de erros visuais nos formulários e layout adaptativo para telemóvel (posicionamento absoluto de mensagens de erro).
- **Inversão de Dependência:** O layout principal (`DashLayout`) recebe componentes via composição, tornando a estrutura flexível.

## 🚀 Como executar localmente

Siga estes passos para correr o projeto na sua máquina:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/AlexandreKonrad/jobcareer-dashboard.git](https://github.com/AlexandreKonrad/jobcareer-dashboard.git)
2. Clone o repositório:
   ```bash
   git clone [https://github.com/AlexandreKonrad/jobcareer-dashboard.git](https://github.com/AlexandreKonrad/jobcareer-dashboard.git)
1. Clone o repositório:
   ```bash
   git clone [https://github.com/AlexandreKonrad/jobcareer-dashboard.git](https://github.com/AlexandreKonrad/jobcareer-dashboard.git)
1. Clone o repositório:
   ```bash
   git clone [https://github.com/AlexandreKonrad/jobcareer-dashboard.git](https://github.com/AlexandreKonrad/jobcareer-dashboard.git)
1. Clone o repositório:
   ```bash
   git clone [https://github.com/AlexandreKonrad/jobcareer-dashboard.git](https://github.com/AlexandreKonrad/jobcareer-dashboard.git)

## 🤝 Autor
- **Desenvolvido** por Alexandre Vargas Konrad.
- Este projeto foi desenvolvido com fins de estudo e portfólio, aplicando conceitos avançados de React e TypeScript.