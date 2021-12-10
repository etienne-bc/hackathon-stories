import json
import boto3

client = boto3.client('dynamodb')

def lambda_handler(event, context):

    #table = client.Table('stories')

    response = client.scan(TableName='stories')
    
    result = []
    print (response["Items"] )
    for item in response["Items"] :
        temp_payload = (item)["username"]["S"]
        result.append(temp_payload)
        
    
    result = list(set(result))
    print(result)
    
      
    return {
        "statusCode": 200,
        "headers" : {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        "body": json.dumps(result)
    }
