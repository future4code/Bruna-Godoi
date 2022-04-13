USE  `joy-bruna-godoi`;

CREATE TABLE table_actor (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,
    salary FLOAT NOT NULL,
	birth_date DATE NOT NULL, 
    gender VARCHAR(6) NOT NULL
     
);
# A) - varchar - significa que o valor será prenchido por um string até um 
# numero (x) de caracteres.
# Date - siginifica que ali será uma data apenas. 

SHOW DATABASES;
# Mostra em qual base de dados eu estou trabalhando.
SHOW TABLES;
# Mostra todas as tabelas que tem criadas dentro da database

DESCRIBE table_actor;
# Descreve a estrutura do campo de cada coluna.

INSERT INTO table_actor (name, salary, birth_date, gender)
VALUES(
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO table_actor (name, salary, birth_date, gender)
VALUES( 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
SELECT * FROM table_actor;
# Exercicio 2 - b) Não pode criar um novo Id 002, pois Id são unicos.
# b) foram passados valores que não estão definidos nos valores da tabela. 
# c) o valor "name" definido nos valores da tabela não pode ser nulo
# d) a data está escrita de forma incorreta, o certo é entre ""

INSERT INTO table_actor (name, salary, birth_date, gender)
VALUES(
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
UPDATE table_actor 
SET gender = "female" WHERE id = 2;

#EXERCÍCIO 3
#A)
SELECT * FROM table_actor  WHERE gender = "female";
# B)
#C) 
SELECT gender FROM table_actor  WHERE gender IS NULL ;
# Essa query não é possivel pois não existe nenhum valor nulo, como foi definido na estrutura da tabela. 

#D)
SELECT * FROM table_actor WHERE salary <= 500000;

#E) Essa query não é valida porque o campo certo é "name" não "nome"
SELECT id, nome from table_actor WHERE id = "002";
SELECT id, name FROM table_actor WHERE id = 002;

#EXERCÍCIO 4
SELECT * FROM table_actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
#A) Essa query primeiro está procurando atores que o nome comece com A ou J, mas não temos nenhum com esses filtros,
# se tivesse ele iria buscar entre eles os que tem o salário maior que 300000.
#B)
SELECT * FROM table_actor
WHERE name NOT LIKE "A%" AND salary > 350000;
#C)
SELECT * FROM table_actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
#D)
SELECT * FROM table_actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;