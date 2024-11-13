# Projeto - Noticia

O projeto SERVERNOTICIAS é uma API construída em Nodejs para uma versão de atividade acadêmica realizada com os alunos do 4º Semestre de ADS da Faculdades SENAC Maringá no ano de 2024. 
Esta API está sendo consumida por dois projetos, um Web construido com o react (https://github.com/rafaelflorindo/GerenciamentoNoticiasReact) e outro em mobile (https://github.com/rafaelflorindo/GerenciamentoNoticiasReactNative) com o react-native.

## Instalar as dependências
Para executar o projeto é necessário realizar a instalação da dependências.

# Dependencias

```
npm install express mysql2 body-parser cors
```

ou individualmente executando os códigos abaixo:

```npm install express
npm install mysql2
npm install body-parser
npm install cors
```


# Instalar sistema

Caso opte por instalar o sistema completo, sugiro utilizar o comando abaixo:

```
npm install
```


# Banco de Dados
Neste projeto estamos utilizando a base de dados abaixo.

```
CREATE DATABASE noticias_db;

USE noticias_db;

CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    link VARCHAR(255) NOT NULL,
    imagem VARCHAR(255)
);
```

# Para rodar o projeto
Para rodar o projeto execute um dos comandos abaixo

```
npm start
node server.js
nodemon server.js
```
