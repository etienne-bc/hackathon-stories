{{ config(
    materialized='table'
) }}

SELECT 
    *
FROM {{ source('dwh', 'competition') }}
WHERE COMPETITION_ID in (8, 122, 3002, 20797, 4, 21609, 21861, 22014, 17945, 17979, 3453, 21722, 25335, 28946 ) 

-- ('Champions League', 'Euro Championship', 'Euro Championship W.', , 'French Ligue 1', 'France Ligue 1', 'French Ligue 1 Specials', 'French Ligue 1 Playoffs' , 'UEFA Europa League' , 'Europa League')