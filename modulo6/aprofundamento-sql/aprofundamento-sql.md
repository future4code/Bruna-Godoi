
# EXERCÍCIO 1 
 ## Leia os comandos abaixo e indique o que eles fazem.
  ### **a)**
  ````
  ALTER TABLE Actor DROP COLUMN salary;
  ````
  #### Essa query esta apagando a coluna "salary" da tabela "Actor"
  ### **b)**
  ````
  ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
  ````
  #### Essa query esta alterando o nome da coluna "gender" para "sex" 
  ### **c)**
  ````
  ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
  ````
  #### Essa query esta alterando a estrutura da coluna "gender" para que aceite 255 caracteres.
  <br/>  

  ### **d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres**
  ````
  ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
  ````
  # EXERCÍCIO 2
  ### **a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003**
  ````
    UPDATE table_actor
    SET name = "Paulo Gustavo" , birth_date = "1995/12/05"
    WHERE id = "3"
  ````
  ### **b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.**
  ````
    UPDATE table_actor
    SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes";

    UPDATE table_actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES";
  ````
  ### **c) Escreva uma query que atualize todas as informações do ator com o id 005**
  ````
    UPDATE table_actor
    SET 
    name = "Marcos palmeira",
    birth_date = "1987/06/12",
    salary = 200000,
    gender = "male"
    WHERE id = "005";
  ````
  # EXERCÍCIO 3
  ### **a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro**
  ````
    DELETE FROM table_actor WHERE name = "Fernanda Montenegro";
  ````
  ### **b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00**
  ````
    DELETE FROM table_actor
    WHERE
        gender = "male" AND
        salary > 1000000
  ````
  # EXERCÍCIO 4
  ### **a) Escreva uma query que pegue o maior salário de todos os atores e atrizes**
  ````
    SELECT MAX(salary)
    FROM table_actor;
  ````
  ### **b) Escreva uma query que pegue o menor salário das atrizes**
  ````
    SELECT MIN(salary)
    FROM table_actor;
    WHERE gender = "female"
  ````
  ### **c) Escreva uma query que pegue a quantidade de atrizes**
  ````
    SELECT COUNT(gender) AS count_actress
    FROM table_actor
    WHERE gender = "female";
  ````
  ### **d) Escreva uma query que pegue a soma de todos os salários**
  ````
    SELECT SUM(salary)
    FROM table_actor;
  ````
  # EXERCÍCIO 5
  ## **a) Releia a última query. Teste-a. Explique o resultado com as suas palavras**
  ````
    SELECT COUNT(*), gender
    FROM table_actor
    GROUP BY gender
  ````
  ### Essa query esta contando quantos "gender" temos, no caso 2 e agrupando pelo genero, ou seja, agrupou quantos "female" e "male" tem cada um!
  <br/>

  ### **b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética**
  ````
    SELECT id, name 
    FROM table_actor
    ORDER BY name DESC
  ````
  ### **c) Faça uma query que retorne todos os atores ordenados pelo salário**
  ````
    SELECT name, salary 
    FROM table_actor
    ORDER BY salary;
  ````
  ### **d) Faça uma query que retorne os atores com os três maiores salarios**
  ````
    SELECT name, salary 
    FROM table_actor
    ORDER BY salary DESC
    LIMIT 3;
  ````
  ### **e) Faça uma query que retorne a média de salário por gênero**
  ````
    SELECT  ROUND(AVG(salary),0), gender AS avg_salary
    FROM table_actor
    GROUP BY gender;
  ````
  # EXERCÍCIO 6
  ### **a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema.**
  ````
    ALTER TABLE table_movie ADD playing_limit_date DATE;
  ````
  ### **b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.**
  ````
  ALTER TABLE table_movie CHANGE rating rating FLOAT;
  ````
  ### **c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído**
  ````
  UPDATE table_movie
  SET playing_limit_date = "2020-12-31"
  WHERE id = "001"

  UPDATE table_movie
  SET playing_limit_date = "2022-12-31"
  WHERE id = "003"
  ````
  ### **Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.**
  ````
  DELETE FROM table_movie WHERE id = "001"
  ````
  ### A query não da um erro, só diz que nenhuma linha foi afetada.
  <BR/>
   <BR/>

  # DESAFIOS 