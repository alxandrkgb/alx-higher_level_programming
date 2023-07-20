-- 10-genre_id_by_show.sql
USE hbtn_0d_tvshows;

-- List all shows with at least one genre linked
SELECT tv_shows.title, GROUP_CONCAT(tv_show_genres.genre_id) AS genre_id
FROM tv_shows
JOIN tv_show_genres ON tv_shows.id = tv_show_genres.tv_show_id
GROUP BY tv_shows.title, tv_show_genres.genre_id
ORDER BY tv_shows.title, tv_show_genres.genre_id;
