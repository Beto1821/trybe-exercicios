-- Active: 1660079668896@@127.0.0.1@3306@sakila

# 1 ADD
SELECT
    a.actor_id,
    a.first_name,
    fa.film_id
FROM actor AS a
    INNER JOIN film_actor AS fa ON a.actor_id = fa.actor_id;