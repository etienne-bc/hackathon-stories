import json
import boto3

res = boto3.resource('dynamodb')

def lambda_handler(event, context):

    table = res.Table('stories_demo')

    result = []
    response = table.scan()
    data = response['Items']

    while 'LastEvaluatedKey' in response:
        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])

        for item in response["Items"] :
            username = (item)["username"]
            result.append(username)

    result = list(set(result))


    return {
        "statusCode": 200,
        "headers" : {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        "body": json.dumps(result)
    }
