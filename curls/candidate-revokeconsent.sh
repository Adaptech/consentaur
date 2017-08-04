#!/bin/bash

curl -X POST \
http://localhost:3001/api/v1/candidate/RevokeConsent \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"candidateId": "candidateId-1"
, "projectId": "projectId-1"
, "dataRequestId": "dataRequestId-1"
}'


