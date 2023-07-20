-- 8-cities_of_california_subquery.sql
USE hbtn_0d_usa;

-- Get the state_id for California using a subquery
SELECT id FROM states WHERE name = 'California';

-- Use the obtained state_id in the main query to list cities of California
SELECT * FROM cities WHERE state_id = (SELECT id FROM states WHERE name = 'California') ORDER BY id;
