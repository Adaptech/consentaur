#/bin/bash

curl -X POST \
http://localhost:3001/api/v1/candidate/RecordDataCollection \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"candidateId": "candidateId-1"
, "projectId": "projectId-1"
}'

