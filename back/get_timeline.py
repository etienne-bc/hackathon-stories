import json
import boto3

client = boto3.client('dynamodb')

def lambda_handler(event, context):

    if event['queryStringParameters'] is None or 'username' not in event['queryStringParameters'].keys():
       return {
            "statusCode": 404,
            "headers" : {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            }
        } 
    
    user = event["queryStringParameters"]['username']
    if user is None:
       return {
            "statusCode": 404,
            "headers" : {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            }
        } 

    data = client.query(
    TableName='stories',
    KeyConditionExpression='PK = :value',
    ExpressionAttributeValues={
      ':value': {
        'S': f"#USER#{user}"
      }
    })
    
    result = []

    for item in data["Items"] :
        temp_payload = json.loads(item["payload"]["S"])

        dictionary ={ 
            "title": item["title"]["S"], 
            "date": item["date"]["N"], 
            "firstname": item["firstname"]["S"], 
            "story": item["story"]["N"], 
            "cardType": item["cardType"]["S"],
            "payload": temp_payload,
            "username": item["username"]["S"],
            "is_read": item["isRead"]["BOOL"]
        } 
        result.append(dictionary)
  
    return {
        "statusCode": 200,
        "headers" : {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        "body": json.dumps(result)
    }
