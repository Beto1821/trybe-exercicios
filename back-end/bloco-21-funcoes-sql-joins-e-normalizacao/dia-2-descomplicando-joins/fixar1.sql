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
FROM sakila.staff AS s
    INNER JOIN sakila.address AS a ON s.address_id = a.address_id;

# 3 
SELECT
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS name,
    c.email,
    a.address
FROM customer AS c
    INNER JOIN address AS a ON c.address_id = a.address_id
ORDER BY c.customer_id DESC
LIMIT 100;

# 4 
SELECT
    c.first_name,
    c.email,
    a.address_id,
    a.address,
    a.district
FROM address AS a
    INNER JOIN customer AS c ON a.address_id = c.address_id
WHERE
    a.district = 'California'
    AND c.first_name LIKE '%rene%';

# 5
SELECT
    c.first_name,
    COUNT(a.address) AS 'Address quantity'
FROM customer AS c
    INNER JOIN address AS a ON a.address_id = c.address_id
GROUP BY c.first_name
ORDER BY c.first_name DESC;

# 6
SELECT
    CONCAT(s.first_name, " ", s.last_name),
    AVG(p.amount) AS 'Average payment'
FROM staff AS s
    INNER JOIN payment AS p ON p.staff_id = s.staff_id
WHERE
    YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

# 7
SELECT
    a.actor_id,
    a.first_name,
    f.film_id,
    f.title
FROM actor AS a
    INNER JOIN film_actor AS fa ON a.actor_id = fa.actor_id
    INNER JOIN film AS f ON f.film_id = fa.film_id;