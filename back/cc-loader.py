import boto3
import json

s3 = boto3.resource('s3')


def lambda_handler(event, context):

    content_object = s3.Object('source-stories-hack', 'content-center.json')
    #file_content = content_object.get()['Body'].read().decode('utf-8')
    #json_content = json.loads(file_content)
    print(type(file_content))
  
    return {
        "statusCode": 200,
        "headers" : {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        }
    }
