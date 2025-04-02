import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'sakila'
}).promise();

const result = await pool.query("select * from `sakila`.`address`, `sakila`.`city` where `sakila`.`address`.`city_id` = `sakila`.`city`.`city_id` order by `sakila`.`address`.`address_id`;"); //Query é um metodo que esta dentro do mysql
console.log(result); 