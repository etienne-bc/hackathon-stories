import json
import boto3

client = boto3.client('dynamodb')

def lambda_handler(event, context):
    data = client.query(
    TableName='stories',
    KeyConditionExpression='PK = :value',
    ExpressionAttributeValues={
      ':value': {
        'S': '#USER#1234'
      }
    })
    
    result = []

    for item in data["Items"] : 
        dictionary ={ 
            "title": item["title"]["S"], 
            "date": item["date"]["N"], 
            "firstname": item["firstname"]["S"], 
            "story": item["story"]["S"], 
            "cardType": item["cardType"]["S"], 
            "is_read": item["isRead"]["BOOL"]
        } 
        result.append(dictionary)
  
    return {
        "statusCode": 200,
        "body": json.dumps(result)
    }
