#!/bin/bash


curl -X POST \
http://localhost:3001/api/v1/project/RecordDataReview \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"projectId": "projectId-1"
, "dataRequestId": "dataRequestId-1"
, "amended": "amended-1"
, "allowable": "allowable-1"
, "consentRequired": "consentRequired-1"
}'

