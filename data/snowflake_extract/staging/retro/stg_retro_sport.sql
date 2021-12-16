{{ config(
    materialized='table'
) }}


SELECT 
    *
FROM {{ source('dwh', 'sport') }}
WHERE SPORT_ID in (95, 1) -- ('Football Specials', 'Football')