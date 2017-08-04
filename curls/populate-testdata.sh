#!/bin/bash

# Project:

curl -X POST \
http://localhost:3001/api/v1/project/Initiate \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"projectId": "projectId-1"
, "name": "name-1"
}'

curl -X POST \
http://localhost:3001/api/v1/project/RequestData \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"projectId": "projectId-1"
, "dataRequestId": "dataRequestId-1"
, "dataDescription": "dataDescription-1"
}'

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

# Candidate:

curl -X POST \
http://localhost:3001/api/v1/candidate/IdentifyCandidate \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"projectId": "projectId-1"
, "candidateId": "candidateId-1"
, "email": "email-1"
}'

curl -X POST \
http://localhost:3001/api/v1/candidate/ContactCandidate \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"candidateId": "candidateId-1"
, "projectId": "projectId-1"
}'

curl -X POST \
http://localhost:3001/api/v1/candidate/EnrollCandidate \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"candidateId": "candidateId-1"
, "projectId": "projectId-1"
, "email": "email-1"
, "password": "password-1"
}'

curl -X POST \
http://localhost:3001/api/v1/candidate/VerifyIdentity \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"candidateId": "candidateId-1"
, "administratorId": "administratorId-1"
}'

curl -X POST \
http://localhost:3001/api/v1/candidate/RecordConsent \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"candidateId": "candidateId-1"
, "projectId": "projectId-1"
, "dataRequestId": "dataRequestId-1"
}'

curl -X POST \
http://localhost:3001/api/v1/candidate/RecordDataCollection \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"candidateId": "candidateId-1"
, "projectId": "projectId-1"
}'

curl -X POST \
http://localhost:3001/api/v1/candidate/RevokeConsent \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
"candidateId": "candidateId-1"
, "projectId": "projectId-1"
, "dataRequestId": "dataRequestId-1"
}'
