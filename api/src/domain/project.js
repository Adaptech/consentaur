import Initiate from '../commands/Initiate';
	import RequestData from '../commands/RequestData';
	import RecordDataReview from '../commands/RecordDataReview';
	
	import ProjectInitiated from '../events/ProjectInitiated';
	import ProjectDataRequested from '../events/ProjectDataRequested';
	import ProjectDataReviewed from '../events/ProjectDataReviewed';
	
	import errors from '../domain/Errors';

	export default class project {
		constructor() {
				this._id = null;
		}

		hydrate(evt) {
			if(evt instanceof ProjectInitiated) {
				this._onProjectInitiated(evt);
			}
			if(evt instanceof ProjectDataRequested) {
				this._onProjectDataRequested(evt);
			}
			if(evt instanceof ProjectDataReviewed) {
				this._onProjectDataReviewed(evt);
			}
			
		}

		
		_onProjectInitiated(evt) {
				this._projectId = evt.projectId;
				
		}
		
		_onProjectDataRequested(evt) {
				this._dataDescription = evt.dataDescription;
				this._dataRequestId = evt.dataRequestId;
				this._projectId = evt.projectId;
				
		}
		
		_onProjectDataReviewed(evt) {
				this._allowable = evt.allowable;
				this._amended = evt.amended;
				this._consentRequired = evt.consentRequired;
				this._dataRequestId = evt.dataRequestId;
				this._projectId = evt.projectId;
				
		}
		

		execute(command) {
			if (command instanceof Initiate) {
				return this._Initiate(command);
			}
			if (command instanceof RequestData) {
				return this._RequestData(command);
			}
			if (command instanceof RecordDataReview) {
				return this._RecordDataReview(command);
			}
			
			throw new Error('Unknown command.');
		}

		
		_Initiate(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new ProjectInitiated(command.projectId));
			return result;
		}
		
		_RequestData(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new ProjectDataRequested(command.dataDescription, command.dataRequestId, command.projectId));
			return result;
		}
		
		_RecordDataReview(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new ProjectDataReviewed(command.allowable, command.amended, command.consentRequired, command.dataRequestId, command.projectId));
			return result;
		}
		
	}
	