import IdentifyCandidate from '../commands/IdentifyCandidate';
	import VerifyIdentity from '../commands/VerifyIdentity';
	import ContactCandidate from '../commands/ContactCandidate';
	import EnrollCandidate from '../commands/EnrollCandidate';
	import RecordConsent from '../commands/RecordConsent';
	import RecordDataCollection from '../commands/RecordDataCollection';
	import RevokeConsent from '../commands/RevokeConsent';
	
	import CandidateIdentified from '../events/CandidateIdentified';
	import CandidateIdentityVerified from '../events/CandidateIdentityVerified';
	import CandidateContacted from '../events/CandidateContacted';
	import CandidateEnrolled from '../events/CandidateEnrolled';
	import CandidateConsented from '../events/CandidateConsented';
	import CandidateDataCollected from '../events/CandidateDataCollected';
	import CandidateConsentRevoked from '../events/CandidateConsentRevoked';
	
	import errors from '../domain/Errors';

	export default class candidate {
		constructor() {
				this._id = null;
		}

		hydrate(evt) {
			if(evt instanceof CandidateIdentified) {
				this._onCandidateIdentified(evt);
			}
			if(evt instanceof CandidateIdentityVerified) {
				this._onCandidateIdentityVerified(evt);
			}
			if(evt instanceof CandidateContacted) {
				this._onCandidateContacted(evt);
			}
			if(evt instanceof CandidateEnrolled) {
				this._onCandidateEnrolled(evt);
			}
			if(evt instanceof CandidateConsented) {
				this._onCandidateConsented(evt);
			}
			if(evt instanceof CandidateDataCollected) {
				this._onCandidateDataCollected(evt);
			}
			if(evt instanceof CandidateConsentRevoked) {
				this._onCandidateConsentRevoked(evt);
			}
			
		}

		
		_onCandidateIdentified(evt) {
				this._candidateId = evt.candidateId;
				this._email = evt.email;
				this._projectId = evt.projectId;
				
		}
		
		_onCandidateIdentityVerified(evt) {
				this._administratorId = evt.administratorId;
				this._candidateId = evt.candidateId;
				
		}
		
		_onCandidateContacted(evt) {
				this._candidateId = evt.candidateId;
				this._projectId = evt.projectId;
				
		}
		
		_onCandidateEnrolled(evt) {
				this._candidateId = evt.candidateId;
				this._email = evt.email;
				this._password = evt.password;
				this._projectId = evt.projectId;
				
		}
		
		_onCandidateConsented(evt) {
				this._candidateId = evt.candidateId;
				this._dataRequestId = evt.dataRequestId;
				this._projectId = evt.projectId;
				
		}
		
		_onCandidateDataCollected(evt) {
				this._candidateId = evt.candidateId;
				this._projectId = evt.projectId;
				
		}
		
		_onCandidateConsentRevoked(evt) {
				this._candidateId = evt.candidateId;
				this._dataRequestId = evt.dataRequestId;
				this._projectId = evt.projectId;
				
		}
		

		execute(command) {
			if (command instanceof IdentifyCandidate) {
				return this._IdentifyCandidate(command);
			}
			if (command instanceof VerifyIdentity) {
				return this._VerifyIdentity(command);
			}
			if (command instanceof ContactCandidate) {
				return this._ContactCandidate(command);
			}
			if (command instanceof EnrollCandidate) {
				return this._EnrollCandidate(command);
			}
			if (command instanceof RecordConsent) {
				return this._RecordConsent(command);
			}
			if (command instanceof RecordDataCollection) {
				return this._RecordDataCollection(command);
			}
			if (command instanceof RevokeConsent) {
				return this._RevokeConsent(command);
			}
			
			throw new Error('Unknown command.');
		}

		
		_IdentifyCandidate(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new CandidateIdentified(command.candidateId, command.email, command.projectId));
			return result;
		}
		
		_VerifyIdentity(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new CandidateIdentityVerified(command.administratorId, command.candidateId));
			return result;
		}
		
		_ContactCandidate(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new CandidateContacted(command.candidateId, command.projectId));
			return result;
		}
		
		_EnrollCandidate(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new CandidateEnrolled(command.candidateId, command.email, command.password, command.projectId));
			return result;
		}
		
		_RecordConsent(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new CandidateConsented(command.candidateId, command.dataRequestId, command.projectId));
			return result;
		}
		
		_RecordDataCollection(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new CandidateDataCollected(command.candidateId, command.projectId));
			return result;
		}
		
		_RevokeConsent(command) {
			// TODO: Validation Errors
			const validationErrors = [];
			if(validationErrors.length > 0) {
				throw new errors.ValidationFailed(validationErrors);
			}

			const result = [];
			result.push(new CandidateConsentRevoked(command.candidateId, command.dataRequestId, command.projectId));
			return result;
		}
		
	}
	