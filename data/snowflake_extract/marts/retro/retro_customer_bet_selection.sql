{{ config(
    materialized='table'
) }}

SELECT 
    DISTINCT
    C.CUSTOMER_ID
    , C.USERNAME
    , B.BET_ID
    , B.BET_DATE
    , B.BET_AMOUNT
    , B.NB_SELECTION_PREEVENT + B.NB_SELECTION_LIVE AS NB_SELECTION
    , B.IS_FREEBET
    , B.INITIAL_ODDS AS BET_ODD
    , B.WINNING_AMOUNT 
    , E.EVENT_NAME
    , CASE WHEN SP.SPORT_NAME = 'Football' THEN SPLIT(E.EVENT_NAME, ' - ')[0] END::STRING AS TEAM_A
    , CASE WHEN SP.SPORT_NAME = 'Football' THEN SPLIT(E.EVENT_NAME, ' - ')[1] END::STRING AS TEAM_B
    , CASE WHEN FB.WON_BET_ID IS NULL THEN FALSE ELSE TRUE END AS HAS_WON
    , COMP.COMPETITION_NAME
    , S.SELECTION_NAME
    , SP.SPORT_NAME
    , M.MARKET_NAME
    , FB.ODDS AS SELECTION_ODD
    , FB.BET_TYPE_ID
    , FB.IS_CASHOUT
    , FB.CASHOUT_AMOUNT_EURO
    , FB.IS_LIVE
    , FB.IS_BOOSTED_ODD
    , FB.SELECTION_ID
    , FB.EVENT_ID
FROM {{ ref('stg_retro_customer') }} AS C 
INNER JOIN {{ ref('stg_retro_bet') }} AS B
    ON B.CUSTOMER_SK = C.CUSTOMER_SK 
INNER JOIN {{ ref('stg_retro_fact_bet') }} AS FB
    ON FB.BET_ID = B.BET_ID
INNER JOIN {{ ref('stg_retro_event') }} AS E
    ON E.EVENT_ID = FB.EVENT_ID
INNER JOIN {{ ref('stg_retro_competition') }} AS COMP
    ON COMP.COMPETITION_SK = E.COMPETITION_SK
INNER JOIN {{ ref('stg_retro_selection') }} AS S
    ON S.SELECTION_ID = regexp_replace(FB.SELECTION_ID, 'true|false|V2', '') 
    AND S.IS_ACTIVE_VERSION
INNER JOIN {{ ref('stg_retro_market') }} AS M 
    ON M.MARKET_SK = S.MARKET_SK
    AND MARKET_NAME in ('Winning team', 'Winning Team', 'Game Winner', 'Total Goals' ,'Correct Score', 'First to score', 'Top Team Goalscorer', 'Draw or Both Teams to Score', 'Goalscorer', 'Match Score', 'Player To Score', 'Match Result', 'Both Teams to Score') 
INNER JOIN {{ ref('stg_retro_sport') }} AS SP
    ON COMP.SPORT_SK = SP.SPORT_SK
