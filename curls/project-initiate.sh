#!/bin/bash


curl -X POST \
http://localhost:3001/api/v1/project/Initiate \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"projectId": "projectId-1"
, "name": "name-1"
}'

