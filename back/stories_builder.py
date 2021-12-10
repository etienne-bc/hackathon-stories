import json
import boto3
from uuid import uuid4
import os
import pathlib
import calendar
import time

from snowflake import connector

USERNAME = "USER_NAME"
FAVORITE_TEAM_1 = "FAVORITE_TEAM_1"
FAVORITE_TEAM_2 = "FAVORITE_TEAM_2"
FAVORITE_TEAM_3 = "FAVORITE_TEAM_3"
FAVORITE_TEAM_4 = "FAVORITE_TEAM_4"
FAVORITE_TEAM_5 = "FAVORITE_TEAM_5"
NB_BET_FAVORITE_TEAM_1 = "NB_BET_FAVORITE_TEAM_1"
NB_BET_FAVORITE_TEAM_2 = "NB_BET_FAVORITE_TEAM_2"
NB_BET_FAVORITE_TEAM_3 = "NB_BET_FAVORITE_TEAM_3"
NB_BET_FAVORITE_TEAM_4 = "NB_BET_FAVORITE_TEAM_4"
NB_BET_FAVORITE_TEAM_5 = "NB_BET_FAVORITE_TEAM_5"

LEAST_FAVORITE_TEAM_1 = "LEAST_FAVORITE_TEAM_1"
NB_BET_LEAST_FAVORITE_TEAM_1 = "NB_BET_LEAST_FAVORITE_TEAM_1"
BIGGEST_WIN_1 = "BIGGEST_WIN_1"
BIGGEST_WIN_2 = "BIGGEST_WIN_2"
BIGGEST_WIN_3 = "BIGGEST_WIN_3"
BIGGEST_WIN_4 = "BIGGEST_WIN_4"
BIGGEST_WIN_5 = "BIGGEST_WIN_5"
DATE_BIGGEST_WIN_1 = "DATE_BIGGEST_WIN_1"
DATE_BIGGEST_WIN_2 = "DATE_BIGGEST_WIN_2"
DATE_BIGGEST_WIN_3 = "DATE_BIGGEST_WIN_3"
DATE_BIGGEST_WIN_4 = "DATE_BIGGEST_WIN_4"
DATE_BIGGEST_WIN_5 = "DATE_BIGGEST_WIN_5"
NB_SELECTION_BIGGEST_WIN_1 = "NB_SELECTION_BIGGEST_WIN_1"
NB_SELECTION_BIGGEST_WIN_2 = "NB_SELECTION_BIGGEST_WIN_2"
NB_SELECTION_BIGGEST_WIN_3 = "NB_SELECTION_BIGGEST_WIN_3"
NB_SELECTION_BIGGEST_WIN_4 = "NB_SELECTION_BIGGEST_WIN_4"
NB_SELECTION_BIGGEST_WIN_5 = "NB_SELECTION_BIGGEST_WIN_5"
BIGGEST_ODD_1 = "BIGGEST_ODD_1"
BIGGEST_ODD_2 = "BIGGEST_ODD_2"
BIGGEST_ODD_3 = "BIGGEST_ODD_3"
BIGGEST_ODD_4 = "BIGGEST_ODD_4"
BIGGEST_ODD_5 = "BIGGEST_ODD_5"
DATE_BIGGEST_ODD_1 = "DATE_BIGGEST_ODD_1"
DATE_BIGGEST_ODD_2 = "DATE_BIGGEST_ODD_2"
DATE_BIGGEST_ODD_3 = "DATE_BIGGEST_ODD_3"
DATE_BIGGEST_ODD_4 = "DATE_BIGGEST_ODD_4"
DATE_BIGGEST_ODD_5 = "DATE_BIGGEST_ODD_5"
NB_SELECTION_BIGGEST_ODD_1 = "NB_SELECTION_BIGGEST_ODD_1"
NB_SELECTION_BIGGEST_ODD_2 = "NB_SELECTION_BIGGEST_ODD_2"
NB_SELECTION_BIGGEST_ODD_3 = "NB_SELECTION_BIGGEST_ODD_3"
NB_SELECTION_BIGGEST_ODD_4 = "NB_SELECTION_BIGGEST_ODD_4"
NB_SELECTION_BIGGEST_ODD_5 = "NB_SELECTION_BIGGEST_ODD_5"
LUCKIEST_TEAM_1 = "LUCKIEST_TEAM_1"
LUCKIEST_TEAM_2 = "LUCKIEST_TEAM_2"
LUCKIEST_TEAM_3 = "LUCKIEST_TEAM_3"
LUCKIEST_TEAM_4 = "LUCKIEST_TEAM_4"
LUCKIEST_TEAM_5 = "LUCKIEST_TEAM_5"
WIN_RATE_LUCKIEST_TEAM_1 = "WIN_RATE_LUCKIEST_TEAM_1"
WIN_RATE_LUCKIEST_TEAM_2 = "WIN_RATE_LUCKIEST_TEAM_2"
WIN_RATE_LUCKIEST_TEAM_3 = "WIN_RATE_LUCKIEST_TEAM_3"
WIN_RATE_LUCKIEST_TEAM_4 = "WIN_RATE_LUCKIEST_TEAM_4"
WIN_RATE_LUCKIEST_TEAM_5 = "WIN_RATE_LUCKIEST_TEAM_5"

BEST_DAY_DATE_1 = "BEST_DAY_DATE_1"
BEST_DAY_DATE_2 = "BEST_DAY_DATE_2"
BEST_DAY_DATE_3 = "BEST_DAY_DATE_3"
BEST_DAY_DATE_4 = "BEST_DAY_DATE_4"
BEST_DAY_DATE_5 = "BEST_DAY_DATE_5"

BEST_DAY_WIN_AMOUNT_1 = "BEST_DAY_WIN_AMOUNT_1"
BEST_DAY_WIN_AMOUNT_2 = "BEST_DAY_WIN_AMOUNT_2"
BEST_DAY_WIN_AMOUNT_3 = "BEST_DAY_WIN_AMOUNT_3"
BEST_DAY_WIN_AMOUNT_4 = "BEST_DAY_WIN_AMOUNT_4"
BEST_DAY_WIN_AMOUNT_5 = "BEST_DAY_WIN_AMOUNT_5"

BEST_DAY_NB_BET_1 = "BEST_DAY_NB_BET_1"
BEST_DAY_NB_BET_2 = "BEST_DAY_NB_BET_2"
BEST_DAY_NB_BET_3 = "BEST_DAY_NB_BET_3"
BEST_DAY_NB_BET_4 = "BEST_DAY_NB_BET_4"
BEST_DAY_NB_BET_5 = "BEST_DAY_NB_BET_5"


FIRSTNAME = "FIRSTNAME"
LASTNAME = "LASTNAME"
CITY = "CITY"
ZIPCODE = "ZIPCODE"

WHITELIST = []
# WHITELIST = ["TESTBC_STESEGU"]

class Extra:
    def __init__(self, username, id, firstname, lastname, city, zipcode):
        self.username = username
        self.id = id
        self.firstname = firstname
        self.lastname = lastname
        self.city = city
        self.zipcode = zipcode


class ConslidateDataSource:
    def __init__(self):
        self.data = []

        # USERNAME,USER_ID,FIRSTNAME,LASTNAME,CITY,ZIPCODE
        for line in pathlib.Path(f"{pathlib.Path(__file__).parent}/testbc_users.csv").read_text().split("\n"):
            r = line.split(',')
            self.data.append(
                Extra(
                    r[0].replace('"', "").replace("_", " ").replace("test", "").replace("TEST", "").replace("Test", ""),
                    r[1].replace('"', ""),
                    r[2].replace('"', ""),
                    r[3].replace('"', ""),
                    r[4].replace('"', ""),
                    r[5].replace('"', ""),
                )
            )

    def consolidate(self, d):
        for extra in self.data:
            if extra.username.upper() == d[USERNAME].upper():
                d[FIRSTNAME] = extra.firstname
                d[LASTNAME] = extra.lastname
                d[CITY] = extra.city
                d[ZIPCODE] = extra.zipcode

        return d

class Struct:
    def __init__(self, d, c):
        self.d = c.consolidate(d)

        if FIRSTNAME not in d.keys():
            self.d[FIRSTNAME] = self.d[USERNAME]
            self.d[LASTNAME] = ""
            self.d[CITY] = ""
            self.d[ZIPCODE] = ""

    def __repr__(self):
        return f"{self.d[USERNAME]}"

    def PK(self):
        return f"#USER#{self.d[USERNAME].upper()}"

    def SK(self, id):
        return f"#STORY_ID#{id}"

    def payload(self):
        return json.dumps({
            USERNAME: self.d[USERNAME],
            FAVORITE_TEAM_1: self.d[FAVORITE_TEAM_1],
            FAVORITE_TEAM_2: self.d[FAVORITE_TEAM_2],
            FAVORITE_TEAM_3: self.d[FAVORITE_TEAM_3],
            FAVORITE_TEAM_4: self.d[FAVORITE_TEAM_4],
            FAVORITE_TEAM_5: self.d[FAVORITE_TEAM_5],
            NB_BET_FAVORITE_TEAM_1: self.d[NB_BET_FAVORITE_TEAM_1],
            NB_BET_FAVORITE_TEAM_2: self.d[NB_BET_FAVORITE_TEAM_2],
            NB_BET_FAVORITE_TEAM_3: self.d[NB_BET_FAVORITE_TEAM_3],
            NB_BET_FAVORITE_TEAM_4: self.d[NB_BET_FAVORITE_TEAM_4],
            NB_BET_FAVORITE_TEAM_5: self.d[NB_BET_FAVORITE_TEAM_5],

            LEAST_FAVORITE_TEAM_1: self.d[LEAST_FAVORITE_TEAM_1],
            NB_BET_LEAST_FAVORITE_TEAM_1: self.d[NB_BET_LEAST_FAVORITE_TEAM_1],
            BIGGEST_WIN_1: self.d[BIGGEST_WIN_1],
            BIGGEST_WIN_2: self.d[BIGGEST_WIN_2],
            BIGGEST_WIN_3: self.d[BIGGEST_WIN_3],
            BIGGEST_WIN_4: self.d[BIGGEST_WIN_4],
            BIGGEST_WIN_5: self.d[BIGGEST_WIN_5],
            DATE_BIGGEST_WIN_1: str(self.d[DATE_BIGGEST_WIN_1] if self.d[DATE_BIGGEST_WIN_1] else ""),
            DATE_BIGGEST_WIN_2: str(self.d[DATE_BIGGEST_WIN_2] if self.d[DATE_BIGGEST_WIN_2] else ""),
            DATE_BIGGEST_WIN_3: str(self.d[DATE_BIGGEST_WIN_3] if self.d[DATE_BIGGEST_WIN_3] else ""),
            DATE_BIGGEST_WIN_4: str(self.d[DATE_BIGGEST_WIN_4] if self.d[DATE_BIGGEST_WIN_4] else ""),
            DATE_BIGGEST_WIN_5: str(self.d[DATE_BIGGEST_WIN_5] if self.d[DATE_BIGGEST_WIN_5] else ""),
            NB_SELECTION_BIGGEST_WIN_1: self.d[NB_SELECTION_BIGGEST_WIN_1],
            NB_SELECTION_BIGGEST_WIN_2: self.d[NB_SELECTION_BIGGEST_WIN_2],
            NB_SELECTION_BIGGEST_WIN_3: self.d[NB_SELECTION_BIGGEST_WIN_3],
            NB_SELECTION_BIGGEST_WIN_4: self.d[NB_SELECTION_BIGGEST_WIN_4],
            NB_SELECTION_BIGGEST_WIN_5: self.d[NB_SELECTION_BIGGEST_WIN_5],
            BIGGEST_ODD_1: float(self.d[BIGGEST_ODD_1] if self.d[BIGGEST_ODD_1] else 0.0),
            BIGGEST_ODD_2: float(self.d[BIGGEST_ODD_2] if self.d[BIGGEST_ODD_2] else 0.0),
            BIGGEST_ODD_3: float(self.d[BIGGEST_ODD_3] if self.d[BIGGEST_ODD_3] else 0.0),
            BIGGEST_ODD_4: float(self.d[BIGGEST_ODD_4] if self.d[BIGGEST_ODD_4] else 0.0),
            BIGGEST_ODD_5: float(self.d[BIGGEST_ODD_5] if self.d[BIGGEST_ODD_5] else 0.0),
            DATE_BIGGEST_ODD_1: str(self.d[DATE_BIGGEST_ODD_1] if self.d[DATE_BIGGEST_ODD_1] else ""),
            DATE_BIGGEST_ODD_2: str(self.d[DATE_BIGGEST_ODD_2] if self.d[DATE_BIGGEST_ODD_2] else ""),
            DATE_BIGGEST_ODD_3: str(self.d[DATE_BIGGEST_ODD_3] if self.d[DATE_BIGGEST_ODD_3] else ""),
            DATE_BIGGEST_ODD_4: str(self.d[DATE_BIGGEST_ODD_4] if self.d[DATE_BIGGEST_ODD_4] else ""),
            DATE_BIGGEST_ODD_5: str(self.d[DATE_BIGGEST_ODD_5] if self.d[DATE_BIGGEST_ODD_5] else ""),
            NB_SELECTION_BIGGEST_ODD_1: self.d[NB_SELECTION_BIGGEST_ODD_1],
            NB_SELECTION_BIGGEST_ODD_2: self.d[NB_SELECTION_BIGGEST_ODD_2],
            NB_SELECTION_BIGGEST_ODD_3: self.d[NB_SELECTION_BIGGEST_ODD_3],
            NB_SELECTION_BIGGEST_ODD_4: self.d[NB_SELECTION_BIGGEST_ODD_4],
            NB_SELECTION_BIGGEST_ODD_5: self.d[NB_SELECTION_BIGGEST_ODD_5],

            LUCKIEST_TEAM_1: self.d[LUCKIEST_TEAM_1],
            LUCKIEST_TEAM_2: self.d[LUCKIEST_TEAM_2],
            LUCKIEST_TEAM_3: self.d[LUCKIEST_TEAM_3],
            LUCKIEST_TEAM_4: self.d[LUCKIEST_TEAM_4],
            LUCKIEST_TEAM_5: self.d[LUCKIEST_TEAM_5],
            WIN_RATE_LUCKIEST_TEAM_1: self.d[WIN_RATE_LUCKIEST_TEAM_1],
            WIN_RATE_LUCKIEST_TEAM_2: self.d[WIN_RATE_LUCKIEST_TEAM_2],
            WIN_RATE_LUCKIEST_TEAM_3: self.d[WIN_RATE_LUCKIEST_TEAM_3],
            WIN_RATE_LUCKIEST_TEAM_4: self.d[WIN_RATE_LUCKIEST_TEAM_4],
            WIN_RATE_LUCKIEST_TEAM_5: self.d[WIN_RATE_LUCKIEST_TEAM_5],

            BEST_DAY_DATE_1: str(self.d[BEST_DAY_DATE_1] if self.d[BEST_DAY_DATE_1] else ""),
            BEST_DAY_DATE_2: str(self.d[BEST_DAY_DATE_2] if self.d[BEST_DAY_DATE_2] else ""),
            BEST_DAY_DATE_3: str(self.d[BEST_DAY_DATE_3] if self.d[BEST_DAY_DATE_3] else ""),
            BEST_DAY_DATE_4: str(self.d[BEST_DAY_DATE_4] if self.d[BEST_DAY_DATE_4] else ""),
            BEST_DAY_DATE_5: str(self.d[BEST_DAY_DATE_5] if self.d[BEST_DAY_DATE_5] else ""),

            BEST_DAY_WIN_AMOUNT_1: self.d[BEST_DAY_WIN_AMOUNT_1],
            BEST_DAY_WIN_AMOUNT_2: self.d[BEST_DAY_WIN_AMOUNT_2],
            BEST_DAY_WIN_AMOUNT_3: self.d[BEST_DAY_WIN_AMOUNT_3],
            BEST_DAY_WIN_AMOUNT_4: self.d[BEST_DAY_WIN_AMOUNT_4],
            BEST_DAY_WIN_AMOUNT_5: self.d[BEST_DAY_WIN_AMOUNT_5],

            BEST_DAY_NB_BET_1: self.d[BEST_DAY_NB_BET_1],
            BEST_DAY_NB_BET_2: self.d[BEST_DAY_NB_BET_2],
            BEST_DAY_NB_BET_3: self.d[BEST_DAY_NB_BET_3],
            BEST_DAY_NB_BET_4: self.d[BEST_DAY_NB_BET_4],
            BEST_DAY_NB_BET_5: self.d[BEST_DAY_NB_BET_5]
        })

    def base(self):
        id = uuid4()
        return {
            "PK": self.PK(),
            "SK": self.SK(id),
            "story_id": str(id),
            "payload": self.payload(),
            "date": calendar.timegm(time.gmtime()),
            "username": self.d[USERNAME].upper(),
            "firstname": self.d[FIRSTNAME],
            "lastname": self.d[LASTNAME],
            "city": self.d[CITY],
            "zipcode": self.d[ZIPCODE],
            "title": "Retro 2021",
            "isRead": False,
        }

    def to_intro_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 0,
                "cardType": "INTRO"
            }
        }

    def to_favorite_team_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 1,
                "cardType": "FAVORITE_TEAM",
            }
        }

    def to_favorite_team_list_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 2,
                "cardType": "FAVORITE_TEAM_LIST",
            }
        }

    def to_least_prefered_team_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 3,
                "cardType": "LEAST_PREFERED_TEAM",
            }
        }

    def to_biggest_win_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 4,
                "cardType": "BIGGEST_WIN",
            }
        }

    def to_biggest_win_list_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 5,
                "cardType": "BIGGEST_WIN_LIST",
            }
        }

    def to_biggest_odds_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 8,
                "cardType": "BIGGEST_ODDS",
            }
        }

    def to_biggest_odds_list_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 9,
                "cardType": "BIGGEST_ODDS_LIST",
            }
        }

    def to_best_day_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 10,
                "cardType": "BEST_DAY",
            }
        }

    def to_best_day_list_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 11,
                "cardType": "BEST_DAY_LIST",
            }
        }

    def to_luckiest_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 6,
                "cardType": "LUCKIEST_WIN",
            }
        }

    def to_luckiest_list_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 7,
                "cardType": "LUCKIEST_WIN_LIST",
            }
        }

    def to_thanks_card_dynamo_item(self):
        return {
            **self.base(),
            **{
                "rank": 12,
                "cardType": "THANKS",
            }
        }

class SnowflakeClient:
    def __init__(self):
        self._connection = None

    def _get_connection(self):
        if not self._connection:
            self._connection = connector.connect(
                user=os.getenv("SF_USER"),
                password=os.getenv("SF_PASS"),
                account=os.getenv("SF_ACCOUNT"),
                role=os.getenv("SF_ROLE"),
                database=os.getenv("SF_DB"),
                warehouse=os.getenv("SF_WH"),
                schema=os.getenv("SF_SCHEMA"),
            )

        return self._connection

    def cursor(self) -> connector.DictCursor:
        return self._get_connection().cursor(connector.DictCursor)

    def read_table(self):
        with self.cursor() as cursor:
            content = cursor.execute("SELECT * FROM retro_info").fetchall()

        print(f"{len(content)} users has been loaded")
        return content



class DynamoClient:
    def __init__(self):
        self.table = boto3.resource('dynamodb').Table('stories_demo')

    def byebye(self):
        scan = self.table.scan()
        with self.table.batch_writer() as batch:
            for each in scan['Items']:
                batch.delete_item(
                    Key={
                        'PK': each['PK'],
                        'SK': each['SK']
                    }
                )

    def put_dynamo(self, s):
        self.table.put_item(Item=s.to_intro_card_dynamo_item())

        if s.d[FAVORITE_TEAM_1]:
            self.table.put_item(Item=s.to_favorite_team_card_dynamo_item())
            self.table.put_item(Item=s.to_favorite_team_list_card_dynamo_item())

        if s.d[LEAST_FAVORITE_TEAM_1]:
            self.table.put_item(Item=s.to_least_prefered_team_card_dynamo_item())

        if s.d[BIGGEST_WIN_1]:
            self.table.put_item(Item=s.to_biggest_win_card_dynamo_item())
            self.table.put_item(Item=s.to_biggest_win_list_card_dynamo_item())

        if s.d[LUCKIEST_TEAM_1]:
            self.table.put_item(Item=s.to_luckiest_card_dynamo_item())
            self.table.put_item(Item=s.to_luckiest_list_card_dynamo_item())

        if s.d[BIGGEST_ODD_1]:
            self.table.put_item(Item=s.to_biggest_odds_card_dynamo_item())
            self.table.put_item(Item=s.to_biggest_odds_list_card_dynamo_item())

        if s.d[BEST_DAY_WIN_AMOUNT_1]:
            self.table.put_item(Item=s.to_best_day_card_dynamo_item())
            self.table.put_item(Item=s.to_best_day_list_card_dynamo_item())

        self.table.put_item(Item=s.to_thanks_card_dynamo_item())


def lambda_handler(event, context):
    stories = []

    consolid = ConslidateDataSource()
    # for line in SnowflakeClient().stub():
    for line in SnowflakeClient().read_table():
        print(line)
        stories.append(
            Struct(line, consolid)
        )

    print(f"{len(stories)} stories loaded from snow")

    dynamo_cli = DynamoClient()

    print('flushing dynamo table')
    dynamo_cli.byebye()

    for story in stories:
        print(story)
        dynamo_cli.put_dynamo(story)



if __name__ == '__main__':
    lambda_handler(None, None)
