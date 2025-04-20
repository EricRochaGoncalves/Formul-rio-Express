
# Tutorial Básico de HTML e CSS

## Introdução

Este tutorial básico é ideal para iniciantes que desejam aprender como criar páginas web utilizando HTML (HyperText Markup Language) e CSS (Cascading Style Sheets). Aqui, vamos cobrir a estrutura fundamental de uma página HTML e como usar CSS para estilizar os elementos.

## 1. Estrutura Básica de um Documento HTML

### Exemplo 1: Estrutura Inicial de HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>
    <h1>Bem-vindo ao meu primeiro site!</h1>
    <p>Este é um parágrafo de exemplo.</p>
</body>
</html>
```

### Explicação:
- `<!DOCTYPE html>`: Define que o documento está usando a versão HTML5.
- `<html lang="pt-br">`: Define a linguagem do documento como português.
- `<head>`: Contém informações sobre o documento, como título e metadados.
- `<meta charset="UTF-8">`: Define a codificação de caracteres como UTF-8, importante para exibir caracteres especiais corretamente.
- `<body>`: Contém o conteúdo visível da página, como títulos e parágrafos.

---

## 2. Criando Links e Imagens

### Exemplo 2: Link e Imagem

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Links e Imagens</title>
</head>
<body>
    <h1>Links e Imagens em HTML</h1>
    <p><a href="https://www.exemplo.com">Clique aqui para visitar o exemplo</a></p>
    <img src="imagem.jpg" alt="Descrição da imagem">
</body>
</html>
```

### Explicação:
- `<a href="url">`: Cria um link que, ao ser clicado, redireciona para a URL especificada.
- `<img src="imagem.jpg" alt="Descrição">`: Exibe uma imagem na página, com a descrição alternativa exibida caso a imagem não seja carregada.

---

## 3. Estilizando com CSS

### Exemplo 3: Usando CSS para Estilizar

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de CSS</title>
    <style>
        body {
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        p {
            font-size: 18px;
            color: #666;
        }
    </style>
</head>
<body>
    <h1>Estilos com CSS</h1>
    <p>Este parágrafo está estilizado com CSS.</p>
</body>
</html>
```

### Explicação:
- `<style>`: A tag `<style>` dentro do `<head>` permite que você adicione estilos diretamente no arquivo HTML.
- `body { background-color: #f4f4f4; }`: Define o fundo da página.
- `h1 { color: #333; text-align: center; }`: Estiliza o título `h1`, mudando a cor do texto e centralizando-o.
- `p { font-size: 18px; color: #666; }`: Estiliza o parágrafo, ajustando o tamanho da fonte e a cor.

---

## 4. Criando Listas

### Exemplo 4: Listas Ordenadas e Não Ordenadas

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Listas em HTML</title>
</head>
<body>
    <h1>Listas</h1>
    <h2>Lista Não Ordenada</h2>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <h2>Lista Ordenada</h2>
    <ol>
        <li>Primeiro</li>
        <li>Segundo</li>
        <li>Terceiro</li>
    </ol>
</body>
</html>
```

### Explicação:
- `<ul>`: Cria uma lista não ordenada (com marcadores).
- `<ol>`: Cria uma lista ordenada (numerada).
- `<li>`: Define um item da lista.

---

## 5. Trabalhando com Formulários

### Exemplo 5: Formulário Simples

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Formulário de Contato</title>
</head>
<body>
    <h1>Formulário de Contato</h1>
    <form action="#" method="POST">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" required></textarea>

        <button type="submit">Enviar</button>
    </form>
</body>
</html>
```

### Explicação:
- `<form>`: Define o formulário, com o atributo `action` indicando o destino dos dados e `method` definindo o método de envio (GET ou POST).
- `<input>`: Usado para campos de texto, como nome e e-mail.
- `<textarea>`: Usado para criar uma área maior de entrada de texto (mensagem).
- `<button>`: Define o botão de envio.

---

## Conclusão

Agora que você aprendeu o básico de HTML e CSS, pode começar a construir suas próprias páginas web! Este tutorial abordou a estrutura fundamental, como criar links, imagens, estilizar com CSS e até criar formulários. Com esses conhecimentos, você tem uma base sólida para avançar para tópicos mais complexos.

---

## Recursos Adicionais

- [Documentação Oficial do HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Documentação Oficial do CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Tutorial de HTML e CSS no W3Schools](https://www.w3schools.com/)
