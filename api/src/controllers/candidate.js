import candidate from '../domain/candidate';
import IdentifyCandidate from '../commands/IdentifyCandidate';
import VerifyIdentity from '../commands/VerifyIdentity';
import ContactCandidate from '../commands/ContactCandidate';
import EnrollCandidate from '../commands/EnrollCandidate';
import RecordConsent from '../commands/RecordConsent';
import RecordDataCollection from '../commands/RecordDataCollection';
import RevokeConsent from '../commands/RevokeConsent';


export default class candidateController {
  constructor(app, readRepository, commandHandler, logger) {
	
    function identifycandidate(req, res) {
      const command = new IdentifyCandidate(req.body.candidateId, req.body.email, req.body.projectId);
      commandHandler(command.candidateId, new candidate(), command)
          .then(() => {
            res.status(202).json(command);
          })
          .catch(err => {
            if(err.name == "ValidationFailed") {
              res.status(400).json({message: err.message});
            } else {
              logger.error(err.stack);
              res.status(500).json({message: err.message});
            }
          });
		}
    app.post('/api/v1/candidate/IdentifyCandidate', identifycandidate);
		
    function verifyidentity(req, res) {
      const command = new VerifyIdentity(req.body.administratorId, req.body.candidateId);
      commandHandler(command.candidateId, new candidate(), command)
          .then(() => {
            res.status(202).json(command);
          })
          .catch(err => {
            if(err.name == "ValidationFailed") {
              res.status(400).json({message: err.message});
            } else {
              logger.error(err.stack);
              res.status(500).json({message: err.message});
            }
          });
		}
    app.post('/api/v1/candidate/VerifyIdentity', verifyidentity);
		
    function contactcandidate(req, res) {
      const command = new ContactCandidate(req.body.candidateId, req.body.projectId);
      commandHandler(command.candidateId, new candidate(), command)
          .then(() => {
            res.status(202).json(command);
          })
          .catch(err => {
            if(err.name == "ValidationFailed") {
              res.status(400).json({message: err.message});
            } else {
              logger.error(err.stack);
              res.status(500).json({message: err.message});
            }
          });
		}
    app.post('/api/v1/candidate/ContactCandidate', contactcandidate);
		
    function enrollcandidate(req, res) {
      const command = new EnrollCandidate(req.body.candidateId, req.body.email, req.body.password, req.body.projectId);
      commandHandler(command.candidateId, new candidate(), command)
          .then(() => {
            res.status(202).json(command);
          })
          .catch(err => {
            if(err.name == "ValidationFailed") {
              res.status(400).json({message: err.message});
            } else {
              logger.error(err.stack);
              res.status(500).json({message: err.message});
            }
          });
		}
    app.post('/api/v1/candidate/EnrollCandidate', enrollcandidate);
		
    function recordconsent(req, res) {
      const command = new RecordConsent(req.body.candidateId, req.body.dataRequestId, req.body.projectId);
      commandHandler(command.candidateId, new candidate(), command)
          .then(() => {
            res.status(202).json(command);
          })
          .catch(err => {
            if(err.name == "ValidationFailed") {
              res.status(400).json({message: err.message});
            } else {
              logger.error(err.stack);
              res.status(500).json({message: err.message});
            }
          });
		}
    app.post('/api/v1/candidate/RecordConsent', recordconsent);
		
    function recorddatacollection(req, res) {
      const command = new RecordDataCollection(req.body.candidateId, req.body.projectId);
      commandHandler(command.candidateId, new candidate(), command)
          .then(() => {
            res.status(202).json(command);
          })
          .catch(err => {
            if(err.name == "ValidationFailed") {
              res.status(400).json({message: err.message});
            } else {
              logger.error(err.stack);
              res.status(500).json({message: err.message});
            }
          });
		}
    app.post('/api/v1/candidate/RecordDataCollection', recorddatacollection);
		
    function revokeconsent(req, res) {
      const command = new RevokeConsent(req.body.candidateId, req.body.dataRequestId, req.body.projectId);
      commandHandler(command.candidateId, new candidate(), command)
          .then(() => {
            res.status(202).json(command);
          })
          .catch(err => {
            if(err.name == "ValidationFailed") {
              res.status(400).json({message: err.message});
            } else {
              logger.error(err.stack);
              res.status(500).json({message: err.message});
            }
          });
		}
    app.post('/api/v1/candidate/RevokeConsent', revokeconsent);
		
	}
}
