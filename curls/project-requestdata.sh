#!/bin/bash
curl -X POST \
http://localhost:3001/api/v1/project/RequestData \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"projectId": "projectId-1"
, "dataRequestId": "dataRequestId-1"
, "dataDescription": "dataDescription-1"
}'


