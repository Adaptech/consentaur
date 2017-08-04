# Consentaur

link to discussion: https://t.me/joinchat/DIfB9wqLLzn8mvB7irBdqA

![eventstorming](consentaur-eventstorming.png "Consentaur Event Storming")

 ( https://webeventstorming.com )

## Installing & running the API

### Change to api directory

```cd api```

### Install modules

```npm install```

### Run the API

```npm start```

## Event Markdown:

```
# Consentaur

Initiate-> // projectId, name
Project Initiated // projectId
Request Data-> // projectId, dataRequestId, dataDescription
Project Data Requested // projectId, dataRequestId, dataDescription
Project List*
Project*

Record Data Review-> //  projectId, dataRequestId, amended, allowable, consentRequired
Project Data Reviewed // projectId, dataRequestId, amended, allowable, consentRequired
Project Data Request*

Identify Candidate -> // projectId, candidateId, email
Candidate Identified // projectId, candidateId, email

Verify Identity-> // candidateId, administratorId
Candidate Identity Verified // candidateId, administratorId
Candidate List*
Candidate Profile*

Contact Candidate -> // candidateId, projectId
Candidate Contacted // candidateId, projectId
Enroll Candidate-> // candidateId, projectId, email, password
Candidate Enrolled // candidateId, projectId, email, password

Record Consent-> // candidateId, projectId, dataRequestId
Candidate Consented // candidateId, projectId, dataRequestId

Record Data Collection-> // candidateId, projectId
Candidate Data Collected // candidateId, projectId
Collected Data*

Revoke Consent-> //  candidateId, projectId, dataRequestId
Candidate Consent Revoked // candidateId, projectId, dataRequestId

```


