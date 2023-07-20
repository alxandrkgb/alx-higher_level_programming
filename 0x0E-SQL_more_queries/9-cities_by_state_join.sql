-- 9-cities_by_state_join.sql
USE hbtn_0d_usa;

-- List all cities with their respective states
SELECT cities.id, cities.name, states.name
FROM cities
JOIN states ON cities.state_id = states.id
ORDER BY cities.id;
