{{ config(
    materialized='table'
) }}

SELECT 
    DISTINCT
    B.*
FROM {{ source('dwh', 'bet') }} AS B
INNER JOIN {{ ref('stg_retro_customer') }} AS C 
    ON C.CUSTOMER_SK = B.CUSTOMER_SK
    AND BET_STATUS_SK in (2, 3)
    