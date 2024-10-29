const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Substitua pelo seu usuário do MySQL
    password: '', // Substitua pela sua senha do MySQL
    database: 'noticias_db'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Rotas CRUD
// Criar uma notícia
app.post('/noticias', (req, res) => {
    const { titulo, descricao, link, imagem } = req.body;
    const query = 'INSERT INTO noticias (titulo, descricao, link, imagem) VALUES (?, ?, ?, ?)';
    db.query(query, [titulo, descricao, link, imagem], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, titulo, descricao, link, imagem });
    });
});

// Ler todas as notícias
app.get('/noticias', (req, res) => {
    const query = 'SELECT * FROM noticias';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Ler uma notícia por ID
app.get('/noticias/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM noticias WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Notícia não encontrada' });
        }
        res.json(results[0]);
    });
});

// Atualizar uma notícia
app.put('/noticias/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, link, imagem } = req.body;
    const query = 'UPDATE noticias SET titulo = ?, descricao = ?, link = ?, imagem = ? WHERE id = ?';
    db.query(query, [titulo, descricao, link, imagem, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Notícia não encontrada' });
        }
        res.json({ message: 'Notícia atualizada com sucesso' });
    });
});

// Deletar uma notícia
app.delete('/noticias/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM noticias WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Notícia não encontrada' });
        }
        res.json({ message: 'Notícia deletada com sucesso' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
