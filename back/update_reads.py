import json
import boto3

client = boto3.client('dynamodb')

def lambda_handler(event, context):

   # print(event)
    
    body = json.loads(event["body"])

    story_id = body["story_id"]
    user =  body["username"]
    
    print(f"#STORY_ID#{story_id}")
    print(f"#USER#{user}")
    print("toto")
    data = client.get_item(
    TableName='stories',
    Key={
        'PK': {
          'S':  f"#USER#{user}"
        },
        'SK': {
          'S': f"#STORY_ID#{story_id}"
        }
    }
    )

    #data["isRead"] = bool("true")
    #print(type(data"payload"]))
    print(data)
    print(data["Item"]["payload"])
    client.put_item(TableName='stories', Item = {
        'PK': {
          'S':  f"#USER#{user}"
        },
        'SK': {
          'S': f"#STORY_ID#{story_id}"
        },
        'payload': {
          'S': data["Item"]["payload"]["S"]
        },
        'story_id': {
          'S': story_id
        },
        'date': {
          'N': data["Item"]["date"]["N"]
        },
        'username': {
          'S':data["Item"]["username"]["S"]
        },
        'cardType': {
          'S': data["Item"]["cardType"]["S"]
        },
        'rank': {
          'N': data["Item"]["rank"]["N"]
        },
        'isRead': {
          'BOOL': bool("True")
        },
        'title': {
          'S': data["Item"]["title"]["S"]
        }
    })
  
    return {
        "statusCode": 200,
        "headers" : {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        }
    }
