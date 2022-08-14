-- Active: 1660079668896@@127.0.0.1@3306@sakila

# 1 
SELECT
    a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS name,
    fa.film_id
FROM actor AS a
    INNER JOIN film_actor AS fa ON a.actor_id = fa.actor_id;

# 2
SELECT
    s.first_name,
    s.last_name,
    a.address
FROM 
    sakila.staff AS s
INNER JOIN 
    sakila.address AS a ON s.address_id = a.address_id;
