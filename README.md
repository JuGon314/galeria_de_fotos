# 📸 Photo Gallery — Galeria de Imagens Responsiva

Este projeto foi desenvolvido como parte do **Segundo Desafio Prático**, com o objetivo de aplicar conceitos fundamentais de **HTML, CSS e JavaScript puro**, focando em organização de código, responsividade e experiência do usuário.

A aplicação consiste em uma **galeria de imagens interativa**, com busca dinâmica, layout responsivo e interface moderna em tema escuro.

---

## 🎯 Objetivo do Projeto

O principal objetivo deste projeto é:

- Trabalhar **estruturação sem frameworks**
- Praticar **manipulação de DOM**
- Aplicar **CSS moderno (Flexbox, Grid, variáveis e responsividade)**
- Criar uma interface agradável, funcional e acessível
- Simular um projeto real de front-end em pequena escala

Este repositório também serve como **material de estudo e portfólio**, demonstrando domínio de fundamentos essenciais do desenvolvimento web.

---

## 🧠 Decisões Técnicas

### 📌 Por que HTML, CSS e JavaScript puro?

- O desafio pede domínio dos fundamentos
- Evita abstrações desnecessárias
- Facilita o entendimento do funcionamento real da web
- Demonstra capacidade de resolver problemas sem dependências externas

---

### 📌 Por que tema escuro?

- Melhor conforto visual
- Estética moderna
- Ampla adoção em aplicações atuais
- Implementado com **variáveis CSS**, facilitando manutenção e ajustes futuros

---

### 📌 Por que CSS Grid na galeria?

- Distribuição automática dos cards
- Melhor adaptação a diferentes tamanhos de tela
- Código mais limpo e sem cálculos manuais
- Comportamento previsível em layouts responsivos

---

### 📌 Por que footer fixo?

- Mantém informações importantes sempre visíveis
- Comum em dashboards e aplicações modernas
- Implementado com cuidado para não esconder conteúdo
- Ajustado para diferentes resoluções (inclusive 320px)

---

## 🗂️ Estrutura do Projeto

```text
GALERIA_DE_FOTOS/
│
├── src/
│   ├── data/
│   │   └── photos.js        # Dados das fotos (nome e URL)
│   │
│   ├── services/
│   │   └── gallery.js       # Lógica de busca e filtragem
│   │
│   ├── ui/
│   │   ├── render.js        # Renderização da galeria no DOM
│   │   └── main.js          # Inicialização e eventos da aplicação
│   │
│   ├── styles/
│   │   └── styles.css       # Estilos e responsividade
│   │
│   └── index.html           # Estrutura principal da página
│
└── README.md                # Documentação do projeto
```

---

## 🧩 Funcionamento Interno do Sistema
### 📦 Estrutura de Dados

Cada imagem da galeria é representada por um objeto JavaScript contendo:

```js
{
  name: "Nome da imagem",
  src: "link da imagem"
}
```
Esses dados são utilizados para gerar dinamicamente os cards na interface.

---

## 🔍 Barra de Busca

- Permite filtrar imagens pelo nome
- Atualiza a galeria em tempo real
- Implementada com escuta de eventos no input
- Ícone de lupa integrado visualmente ao campo de busca

--- 

## 🖼️ Galeria de Imagens

- Cards gerados dinamicamente via JavaScript
- Layout responsivo utilizando CSS Grid
- Animações suaves de hover
- Ajuste automático do número de colunas conforme a largura da tela

---

## 🧠 Lógica JavaScript (gallery.js)

Responsável por:

- Carregar os dados das imagens
- Renderizar os cards no DOM
- Filtrar resultados conforme a busca
-Controlar estados vazios (nenhum resultado encontrado)
- Toda a lógica é desacoplada do CSS e do HTML, facilitando manutenção e expansão.

---

## 🎨 Estilização (style.css)

- Uso de variáveis CSS para tema
- Layout flexível e responsivo
- Componentes bem definidos (header, search, gallery, footer)
- Compatibilidade com telas pequenas (320px)

---

### ▶️ Como Executar o Projeto
## Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge ou similar)

# Passo a passo

1. Clone o repositório:
```bash
git clone https://www.github.com/JuGon314/galeria_de_fotos/
```

2. Acesse a pasta do projeto:
```bash
cd galeria_de_fotos
```

3. Abra o arquivo `index.html` no navegador
