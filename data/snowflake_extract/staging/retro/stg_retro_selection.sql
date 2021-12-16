{{ config(
    materialized='table'
) }}

SELECT
    DISTINCT
    S.*
FROM {{ source('dwh', 'selection') }} AS S 
INNER JOIN {{ ref('stg_retro_market') }} AS M 
    ON S.MARKET_SK = M.MARKET_SK