-- Active: 1660079668896@@127.0.0.1@3306@PecasFornecedores
# 1 Escreva uma query para exibir todas as peças que começam com GR. 

USE PecasFornecedores;

SELECT * FROM Pecas WHERE name LIKE 'GR%';