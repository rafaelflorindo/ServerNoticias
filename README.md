# Dependencias

npm install express mysql2 body-parser cors

# Instalar projeto
npm install

# Executar o projeto
npm start

# Base de dados
CREATE DATABASE noticias_db;

USE noticias_db;

CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    link VARCHAR(255) NOT NULL,
    imagem VARCHAR(255)
);
