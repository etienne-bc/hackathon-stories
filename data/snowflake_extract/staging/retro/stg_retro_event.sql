{{ config(
    materialized='table'
) }}

SELECT  
    DISTINCT
    E.*
FROM {{ source('dwh', 'event') }}  AS E
INNER JOIN {{ ref('stg_retro_competition') }} AS C
    ON E.COMPETITION_SK = C.COMPETITION_SK