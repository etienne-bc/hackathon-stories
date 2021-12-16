{{ config(
    materialized='table'
) }}

SELECT 
    *
FROM {{ source('dwh', 'customer') }}
WHERE  
    IS_ACTIVE_VERSION 
    AND USERNAME ilike 'testbc_%'
