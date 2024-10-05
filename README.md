# To Do List

Este aplicativo de lista de tarefas ajuda a reduzir a sobrecarga e permite um acompanhamento claro de diferentes áreas da vida. Com ele, o usuário pode criar, editar, categorizar tarefas e adicionar notas importantes.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-v20.17.0-brightgreen)

# 📋 Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Licença](#licença)
- [Autores](#autores)

# 📝 Sobre o Projeto

O aplicativo de lista de tarefas é uma solução prática e visualmente atraente para a organização do dia a dia. Destinado a qualquer pessoa que deseje gerenciar compromissos de maneira eficiente, ele é especialmente útil para aqueles que enfrentam sobrecarga mental e desorganização em suas atividades diárias.
O aplicativo permite que os usuários criem e editem tarefas, adicionem notas e selecionem categorias específicas, facilitando a organização de diferentes áreas da vida. É um verdadeiro companheiro de produtividade que torna o gerenciamento de tarefas uma experiência tranquila e eficiente.

Exemplo:
> "Esse projeto é uma aplicação web para gerenciamento de listas de presença em eventos. Ele permite que os usuários registrem suas presenças e visualizem relatórios sobre a frequência."

# 🔧 Pré-requisitos

- Node.js >= 20.17.0
- NPM >= 10.8.2
- expo >= 51.0.28
- react >= 18.2.0
- react-native >= 0.74.5
- @react-native-async-storage/async-storage >= 2.0.0
- @react-native-community/masked-view >= 0.1.11
- @react-native-picker/picker >= 2.7.5
- @react-navigation/native >= 6.1.18
- @react-navigation/native-stack >= 6.11.0
- @react-navigation/stack >= 6.4.1
- expo-status-bar >= 1.12.1
- react-native-elements >= 3.4.3
- react-native-gesture-handler >= 2.16.1
- react-native-reanimated >= 3.10.1
- react-native-safe-area-context >= 4.10.5
- react-native-screens >= 3.31.1
- react-native-vector-icons >= 10.2.0
- yup >= 1.4.0
- formik >= 2.4.6

# 🚀 Instalação

## 1 Passo - Baixar o Node.js

Vá na página de download e baixe a versão do seu sistema operacional. (Recomendado: 20.17.0)
https://nodejs.org/en/download/prebuilt-installer

## 2 Passo - Testar o Node.js 

No terminal aplique o comando abaixo:
```bash
node -v
```
Vai retornar a versão 20.17.0 instalada

## 3 Passo - instalação do Expo

Instale pelo terminal com o comando:
```bash
npm install expo-cli --global
```
## 4 Passo - Download do Projeto

Baixe o projeto pelo link do GitHub
https://github.com/carolinamor4es/To-Do-List-
e abra no seu terminal

## 5 Passo - Instalação dos requisitos

Utilize os seguintes comandos no terminal:

```bash
npm install react@18.2.0 react-native@0.74.5
```

Instale as bibliotecas do React e React Native com os comandos:

```bash
 npm install @react-native-async-storage/async-storage@^2.0.0
 npm install @react-native-community/masked-view@^0.1.11
 npm install @react-native-picker/picker@^2.7.5
 npm install @react-navigation/native@^6.1.18
 npm install @react-navigation/native-stack@^6.11.0
 npm install @react-navigation/stack@^6.4.1
 npm install expo-status-bar@^1.12.1
 npm install react-native-elements@^3.4.3
 npm install react-native-gesture-handler@^2.16.1
 npm install react-native-reanimated@^3.10.1
 npm install react-native-safe-area-context@^4.10.5
 npm install react-native-screens@^3.31.1
 npm install react-native-vector-icons@^10.2.0
 npm install yup@^1.4.0 formik@^2.4.6
```
Instale também as configurações adicionais para o React Navigation

```bash
 npm install @react-navigation/native @react-navigation/stack @react-navigation/native-stack react-native-screens react-native-safe-area-context
 npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

## 6 Passo - Inicio do Projeto

Após a instalação, execute o projeto com:

- Para expo go:
Baixe o aplicativo do Expo para Android ou IOS

Execute o comando no terminal:
```bash
npx expo start
```
Escaneie o QR code e teste o projeto.

# 📃 Como Usar

## 1. Início:
•	O usuário pode iniciar o app clicando no botão "Let's Start!". Após a abertura,  ele é direcionado para a tela principal com as listas de tarefas.

## 2. Home/Principal:
•	Na tela principal, o usuário pode visualizar suas categorias e todas as tarefas listadas. Para iniciar a busca de uma tarefa, basta clicar na barra de pesquisa "Search for Tasks". Além disso, ele tem a opção de selecionar e navegar entre as categorias existentes.

## 3. Adicionar uma tarefa:
•	Ao clicar no botão "Add Task" na tela principal, o usuário será direcionado para a tela "Add Task", onde poderá inserir o nome da tarefa, selecionar uma categoria e adicionar notas, se necessário.

## 4. Seleção de Categoria:
•	O usuário pode filtrar suas tarefas clicando nos ícones de categoria como "Personal" (Pessoal), "Shopping" (Compras), "Work" (Trabalho) ou "Health" (Saúde). Após a seleção, apenas as tarefas da categoria escolhida serão exibidas.

## 5. Marcar Tarefas como Concluídas
•	Na tela lista de tarefas, o usuário pode marcar uma tarefa como concluída clicando no quadrado ao lado da tarefa. Ao fazer isso, a tarefa será riscada, indicando que foi finalizada.

## 6. Excluir uma tarefa:
•	Para excluir uma tarefa, o usuário deve clicar no ícone de lixeira ao lado da tarefa desejada. Uma tela de confirmação será exibida, perguntando se o usuário realmente deseja excluir a tarefa.

## 7. Busca e Filtros:
•	O campo de busca permite que o usuário digite palavras-chave para localizar tarefas específicas. Caso tenha uma lista extensa, ele pode utilizar essa função para encontrar rapidamente tarefas pelo nome ou categoria.

## 8. Editando uma Tarefa
•	O usuário pode editar uma tarefa tocando diretamente na tarefa listada. Isso permitirá a alteração de detalhes, como o nome ou a categoria da tarefa. Após realizar as modificações, ele deverá confirmar as mudanças pressionando o botão "Update Task".

# ✔️ Licença

Este projeto está licenciado sob os termos da licença MIT.

# 👥 Autores

- [Carolina de Moraes Carneiro](https://github.com/carolinamor4es)
- [Autor 2](https://github.com/autor2)
