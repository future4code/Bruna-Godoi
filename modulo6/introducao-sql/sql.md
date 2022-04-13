USE  `joy-bruna-godoi`;

~~~
CREATE TABLE table_actor (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,
    salary FLOAT NOT NULL,
	birth_date DATE NOT NULL, 
    gender VARCHAR(6) NOT NULL 
);
~~~
## EXERCÍCIO 1


### a) - varchar - significa que o valor será prenchido por um string até um numero (x) de caracteres. <br> - Date - siginifica que ali será uma data apenas.
### b) Mostra em qual base de dados eu estou trabalhando.
~~~
SHOW DATABASES;
~~~
### Mostra todas as tabelas que tem criadas dentro da database
~~~~
SHOW TABLES;
~~~~

### C) Descreve a estrutura do campo de cada coluna.
~~~~
DESCRIBE table_actor;
~~~~

## EXERCÍCIO 2 
~~~~
INSERT INTO table_actor (name, salary, birth_date, gender)
VALUES(
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
~~~~

### a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
~~~~
INSERT INTO table_actor (name, salary, birth_date, gender)
VALUES( 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
~~~~
~~~~
SELECT * 
FROM table_actor;
~~~~
### b) Não pode criar um novo Id 002, pois Id são unicos.
### c) foram passados valores que não estão definidos nos valores da tabela. 
### d) o valor "name" definido nos valores da tabela não pode ser nulo
### e) a data está escrita de forma incorreta, o certo é entre ""
### f) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.
~~~~
INSERT INTO table_actor (name, salary, birth_date, gender)
VALUES(
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~~

~~~~ 
UPDATE table_actor 
SET gender = "female" 
WHERE id = 2;
~~~~

# EXERCÍCIO 3

### a) Escreva uma query que retorne todas as informações das atrizes
~~~~
SELECT * 
FROM table_actor 
WHERE gender = "female";
~~~~
### b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos 
 ~~~~
SELECT salary 
FROM table_actor  
WHERE name = "Tony Ramos";
~~~~
### c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
~~~~
SELECT gender 
FROM table_actor  
WHERE gender IS NULL ;
~~~~
#### Essa query não é possivel pois não existe nenhum valor nulo, como foi definido na estrutura da tabela. 

### d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
~~~~ 
SELECT * 
FROM table_actor 
WHERE salary <= 500000;
~~~~

### e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
~~~~
SELECT id, nome 
FROM table_actor 
WHERE id = "002";

SELECT id, name 
FROM table_actor 
WHERE id = 002;
~~~~
-  Essa query não é valida porque o campo certo é "name" não "nome"
  
# EXERCÍCIO 4
~~~~
SELECT * 
FROM table_actor
WHERE (name LIKE "A%" OR name LIKE "J%") 
AND salary > 300000;
~~~~
### a) Explique com as suas palavras a query acima
- Essa query primeiro está procurando atores que o nome comece com A ou J, mas não temos nenhum com esses filtros, se tivesse ele iria buscar entre eles os que tem o salário maior que 300000.
### b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
~~~~
SELECT * 
FROM table_actor
WHERE name NOT LIKE "A%" AND salary > 350000;
~~~~
### c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
~~~~~
SELECT * 
FROM table_actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
~~~~~
### d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
~~~~
SELECT * 

FROM table_actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
  ~~~~
# Exercício 5
### a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.
~~~~
  CREATE TABLE table_movie (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(200) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
	release_data DATE,
    rating INT NOT NULL
);
~~~~
### Crie 4 filmes com as seguintes informações: 
~~~~
INSERT INTO table_movie(title, synopsis, release_data, rating)
VALUES ("Se Eu Fosse Você",
		"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do 
        casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006/01/06",
        7);
~~~~

~~~~

SELECT * FROM table_movie;

~~~~
~~~~

INSERT INTO table_movie(title, synopsis, release_data, rating)
VALUES ("Doce de mãe",
		"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, 
        anuncia que vai se casar e não poderá mais morar com ela",
        "2012/12/27",
        10);
~~~~
~~~~
INSERT INTO table_movie(title, synopsis, release_data, rating)
VALUES ("Dona Flor e Seus Dois Maridos",
		"Dona Flor é uma sedutora professora de culinária casada com Vadinho,
        que só quer saber de farras e jogatina nas boates.
        A vida de abusos acaba por acarretar sua morte precoce.",
        "2017/11/02",
        8);
~~~~
### Pesquise algum filme brasileiro e crie ele na tabela
~~~~
        
INSERT INTO table_movie(title, synopsis, release_data, rating)
VALUES 	("Minha mãe é uma peça",
		"Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. 
        Hiperativa, ela não larga o pé de seus filhos Marcelina  e Juliano, sem se dar conta que eles já
        estão bem grandinhos. 
        Um dia, após descobrir que eles consideram ela uma chata, resolve sair de casa sem avisar para ninguém,
        deixando todos, de alguma forma, preocupados com o que teria acontecido. Mal sabem eles que a mãe foi visitar a querida tia Zélia
        para desabafar com ela suas tristezas do presente e recordar os bons tempos do passado.",
        "2013/06/21",
        8);
~~~~
# Exercício 6
### a) Retorne o id, título e avaliação a partir de um id específico;
~~~~
SELECT id, title, rating 
FROM table_movie 
WHERE id = 6;
~~~~

### b) Retorne um filme a partir de um nome específico;
~~~~
SELECT title 
FROM table_movie
WHERE title = "se eu fosse você";
~~~~
### c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
~~~~
SELECT id, title, synopsis
FROM table_movie 
WHERE rating >= 7;
~~~~
# Exercício 7
### a) Retorna um filme cujo título contenha a palavra vida
~~~~
SELECT * 
FROM table_movie
WHERE title LIKE "%mãe%";
~~~~
### b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize "maridos" para exemplificar.
~~~~
SELECT * 
FROM table_movie
WHERE title LIKE "%Maridos%" 
OR synopsis LIKE "%Maridos%";
~~~~
### c) Procure por todos os filmes que já tenham lançado
~~~~      
SELECT title
FROM table_movie
ORDER BY title;
~~~~ 
### d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 
~~~~
SELECT title FROM table_movie
WHERE (title LIKE "%dona%" OR synopsis LIKE "%dona%") 
AND rating > 7;
~~~~