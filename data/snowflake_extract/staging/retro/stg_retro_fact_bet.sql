{{ config(
    materialized='table'
) }}

SELECT 
    DISTINCT
    FB.*
FROM {{ source('dmt', 'fact_bet') }} AS FB 
INNER JOIN {{ ref('stg_retro_bet') }} AS B 
    ON B.BET_ID = FB.BET_ID