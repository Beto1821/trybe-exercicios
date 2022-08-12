-- Active: 1660079668896@@127.0.0.1@3306@sakila

# 1-Média de dias que uma pessoa usuária permanece com o produto alugado 
SELECT
    customer_id,
    AVG(
        DATEDIFF(return_date, rental_date)
    ) AS 'days_rent_average'
FROM rental
GROUP BY customer_id;

# 2-Tempo máximo,mínimo e a média de tempo dos filmes lançados em 2006 por rating 
SELECT
    rating,
    AVG(length),
    MAX(length),
    MIN(length)
FROM film
GROUP BY rating;

# 3-Quantas pessoas usuárias temos por cidade ?
SELECT
    city_id as 'city_id',
    COUNT(city_id) AS 'Quant.'
FROM address
GROUP BY city_id;

# 4-Qual o valor total recebido dentro de cada mês ? 
SELECT
    SUM(amount) as `soma`,
    year(payment_date),
    month(payment_date)
FROM payment
GROUP BY
    year(payment_date),
    month(payment_date);

# 5-Quantidade de itens alugados pelo preço 
SELECT
    amount as `preço`,
    COUNT(amount) as `qtd`
FROM payment
GROUP BY amount;

# 6-Qual valor total arrecadado agrupado por mês,ano e `amount` ?
SELECT
    SUM(amount) as `soma`,
    year(payment_date),
    month(payment_date)
FROM payment
GROUP BY
    year(payment_date),
    month(payment_date);