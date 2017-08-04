import project from '../domain/project';
import Initiate from '../commands/Initiate';
import RequestData from '../commands/RequestData';
import RecordDataReview from '../commands/RecordDataReview';


export default class projectController {
  constructor(app, readRepository, commandHandler, logger) {
	
    function initiate(req, res) {
      const command = new Initiate(req.body.name, req.body.projectId);
      commandHandler(command.projectId, new project(), command)
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
    app.post('/api/v1/project/Initiate', initiate);
		
    function requestdata(req, res) {
      const command = new RequestData(req.body.dataDescription, req.body.dataRequestId, req.body.projectId);
      commandHandler(command.projectId, new project(), command)
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
    app.post('/api/v1/project/RequestData', requestdata);
		
    function recorddatareview(req, res) {
      const command = new RecordDataReview(req.body.allowable, req.body.amended, req.body.consentRequired, req.body.dataRequestId, req.body.projectId);
      commandHandler(command.projectId, new project(), command)
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
    app.post('/api/v1/project/RecordDataReview', recorddatareview);
		
	}
}
