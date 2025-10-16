# WhatsSM - Gerador de Links WhatsApp com Tradução Automática

<div align="center">

![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**[🚀 Ver Aplicação Online](https://trabalho-dw-2-lewklpus4-samara081007-3304s-projects.vercel.app)** | **[📖 Documentação](#-sobre-o-projeto)** | **[💡 Funcionalidade Extra](#-funcionalidade-extra-tradução-automática)**

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidade Extra: Tradução Automática](#-funcionalidade-extra-tradução-automática)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Execução Local](#-instalação-e-execução-local)
- [Configuração do Banco de Dados](#-configuração-do-banco-de-dados)
- [Como Usar](#-como-usar)
- [Autores](#-autores)

---

## 🎯 Sobre o Projeto

**WhatsSM** é uma aplicação web desenvolvida em React que facilita a comunicação pelo WhatsApp, permitindo:

- ✅ **Gerar links diretos** para conversas no WhatsApp sem salvar contatos
- ✅ **Formatar números** automaticamente com máscara brasileira
- ✅ **Gerenciar agenda** de contatos com CRUD completo (Create, Read, Update, Delete)
- ✅ **Traduzir mensagens** automaticamente para múltiplos idiomas antes de enviar
- ✅ **Integração com banco de dados** Supabase para persistência de dados

### 🎨 Interface Intuitiva

A aplicação possui uma interface simples e moderna, dividida em duas seções principais:

1. **Gerador de Links**: Insira o número, escreva a mensagem (com opção de tradução) e gere o link
2. **Agenda de Contatos**: Salve, edite e exclua contatos para acesso rápido

---

## 💡 Funcionalidade Extra: Tradução Automática

### 🌍 O Diferencial do Projeto

A **tradução automática de mensagens** é a funcionalidade inovadora que diferencia o WhatsSM de outros geradores de links do WhatsApp. 

#### Por que implementamos?

Em um mundo globalizado, a comunicação entre pessoas de diferentes idiomas é cada vez mais comum. Pensando nisso, adicionamos a capacidade de:

- **Traduzir mensagens em tempo real** antes de enviar pelo WhatsApp
- **Suporte a múltiplos idiomas**: Português, Inglês, Espanhol, Francês, Alemão, Italiano, Japonês, Coreano e Chinês
- **Interface simples**: Selecione o idioma de origem e destino com apenas dois cliques
- **Integração com API MyMemory**: Tradução gratuita e de qualidade

#### Como funciona?

\`\`\`javascript
// Exemplo de uso da API de tradução
const traduzirMensagem = async () => {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    mensagem
  )}&langpair=${idiomaOrigem}|${idiomaSelecionado}`;
  
  const response = await fetch(url);
  const data = await response.json();
  setMensagem(data.responseData.translatedText);
};
\`\`\`

#### Casos de Uso

1. **Empresas internacionais**: Envie mensagens para clientes em seus idiomas nativos
2. **Turismo**: Comunique-se com hotéis, restaurantes e serviços em outros países
3. **E-commerce**: Atenda clientes internacionais sem barreiras linguísticas
4. **Educação**: Facilite a comunicação entre estudantes e professores de diferentes nacionalidades

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React.js** | Biblioteca JavaScript para construção de interfaces |
| **Vite** | Build tool moderna e rápida para desenvolvimento |
| **Supabase** | Backend-as-a-Service (banco de dados PostgreSQL) |
| **CSS Modules** | Estilização modular e isolada de componentes |
| **MyMemory Translation API** | API gratuita para tradução de textos |

---

## 📁 Estrutura do Projeto

\`\`\`
whatssm/
├── src/
│   ├── components/
│   │   ├── Gerador.jsx          # Componente gerador de links
│   │   ├── Agenda.jsx           # Componente de gerenciamento de contatos
│   │   ├── Mascara.jsx          # Componente de formatação de telefone
│   │   └── Mensagem.jsx         # Componente de mensagem com tradução
│   ├── imgs/                    # Ícones e imagens
│   ├── styles/                  # Arquivos CSS dos componentes
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Ponto de entrada da aplicação
│   ├── index.css                # Estilos globais
│   └── supabaseClient.js        # Configuração do Supabase
├── .env                         # Variáveis de ambiente (não versionado)
├── package.json                 # Dependências do projeto
└── README.md                    # Documentação
\`\`\`

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Conta no Supabase** (gratuita) - [Criar conta](https://supabase.com/)

---

## 🚀 Instalação e Execução Local

### 1️⃣ Clone o repositório

\`\`\`bash
git clone https://github.com/seu-usuario/whatssm.git
cd whatssm
\`\`\`

### 2️⃣ Instale as dependências

\`\`\`bash
npm install
# ou
yarn install
\`\`\`

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

\`\`\`bash
touch .env
\`\`\`

Adicione as seguintes variáveis (substitua pelos seus valores do Supabase):

\`\`\`env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_KEY=sua-chave-publica-anon
\`\`\`

> **⚠️ Como obter as credenciais do Supabase:**
> 1. Acesse [supabase.com](https://supabase.com/) e faça login
> 2. Crie um novo projeto ou selecione um existente
> 3. Vá em **Settings** → **API**
> 4. Copie a **URL** e a **anon/public key**

### 4️⃣ Execute o projeto

\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

A aplicação estará disponível em: **http://localhost:5173**

---

## 🗄 Configuração do Banco de Dados

### Criar tabela no Supabase

1. Acesse o painel do Supabase
2. Vá em **SQL Editor**
3. Execute o seguinte comando SQL:

\`\`\`sql
CREATE TABLE contato (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  numero TEXT NOT NULL
);
\`\`\`

### Estrutura da Tabela

| Campo  | Tipo    | Descrição                          |
|--------|---------|------------------------------------|
| `id`   | INTEGER | Chave primária (auto-incremento)   |
| `nome` | TEXT    | Nome do contato                    |
| `numero` | TEXT  | Número de telefone (apenas dígitos)|

### Habilitar Row Level Security (Opcional)

Para projetos em produção, recomenda-se configurar políticas de segurança:

\`\`\`sql
-- Habilitar RLS
ALTER TABLE contato ENABLE ROW LEVEL SECURITY;

-- Permitir leitura e escrita para todos (ajuste conforme necessário)
CREATE POLICY "Permitir acesso público" ON contato
  FOR ALL USING (true);
\`\`\`

---

## 📱 Como Usar

### 1. Gerar Link do WhatsApp

1. Digite o número de telefone no formato `(XX) XXXXX-XXXX`
2. Escreva a mensagem que deseja enviar
3. **(Opcional)** Clique em "Traduzir" para converter a mensagem para outro idioma
4. Clique em "Preparar Mensagem" para gerar o link
5. Clique em "Abrir WhatsApp" para iniciar a conversa

### 2. Gerenciar Contatos

#### Adicionar Contato
1. Preencha o nome e número na seção "Agenda"
2. Clique em "Salvar Contato"

#### Editar Contato
1. Clique no ícone de edição (✏️) ao lado do contato
2. Modifique os dados
3. Clique em "Atualizar Contato"

#### Excluir Contato
1. Clique no ícone de lixeira (🗑️) ao lado do contato
2. Confirme a exclusão

#### Enviar Mensagem para Contato
1. Clique no ícone de mensagem (💬) ao lado do contato
2. O número será automaticamente preenchido no gerador de links

---

## 👥 Autores

Desenvolvido por:

- **Marjory Gonçalves Cardoso** - [GitHub](https://github.com/marjory-cardoso) | [LinkedIn](https://linkedin.com/in/marjory-cardoso)
- **Samara Oliveira da Silva** - [GitHub](https://github.com/samara-silva) | [LinkedIn](https://linkedin.com/in/samara-silva)

---

## 📄 Licença

Este projeto foi desenvolvido como parte de uma prática acadêmica voltada ao aprendizado de React e integração com Supabase.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📞 Suporte

Se encontrar algum problema ou tiver sugestões, abra uma [issue](https://github.com/seu-usuario/whatssm/issues) no GitHub.

---

<div align="center">

**Feito com ❤️ por Marjory Cardoso e Samara Silva**

[⬆ Voltar ao topo](#whatssm---gerador-de-links-whatsapp-com-tradução-automática)

</div>
