{{ config(
    materialized='table'
) }}

SELECT 
    *
FROM {{ source('dwh', 'market') }}
WHERE
    EVENT_SK in (SELECT EVENT_SK FROM {{ ref('stg_retro_event') }} )
    AND MARKET_NAME in ('Winning team', 'Winning Team', 'Game Winner', 'Total Goals' ,'Correct Score', 'First to score', 'Top Team Goalscorer', 'Draw or Both Teams to Score', 'Goalscorer', 'Match Score', 'Player To Score', 'Match Result', 'Both Teams to Score') 
