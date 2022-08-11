-- Active: 1660079668896@@127.0.0.1@3306@sakila

# 1-Média de dias que uma pessoa usuária permanece com o produto alugado 
SELECT
    customer_id,
    AVG(DATEDIFF(return_date, rental_date)) AS 'days_rent_average'
FROM rental
GROUP BY customer_id;

# 2-Tempo máximo,mínimo e a média de tempo dos filmes lançados em 2006 por rating 
# 3-Quantas pessoas usuárias temos por cidade ? 
# 4-Qual o valor total recebido dentro de cada mês ? 
# 5-Quantidade de itens alugados pelo preço 
# 6-Qual valor total arrecadado agrupado por mês,ano e `amount` ?