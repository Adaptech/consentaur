/* eslint-env mocha */
 import Organization from '../src/domain/Organization';
 import CreateOrganization from '../src/commands/CreateOrganization';
 import OrganizationCreated from '../src/events/OrganizationCreated';
 import assert from 'assert';

describe('Creating Organizations', function() {
  describe('Given a Organization doesn\'t exist yet, when CreateOrganization is called', function() {
     var organization = new Organization();
     var result = organization.execute(new CreateOrganization("134","Coquitlam-Maillardville BC Provincial Electoral District", "admin-1"));
    it('it should publish a OrganizationCreated event', function() {
      assert.ok(result[0] instanceof OrganizationCreated);
    }),
    it('one event should have occurred', function() {
      assert.ok(result.length == 1)
    }),
    it('it should have the organization id', function() {
      assert.equal(result[0].organizationId, "134");
    });
    it('it should have the organization name', function() {
      assert.equal(result[0].name, "Coquitlam-Maillardville BC Provincial Electoral District", "admin-1");
    });  
  })
  describe('Given an existing organization, when CreateOrganization is called', function() {
     var organization = new Organization();
     organization.hydrate(
         organization.execute(
           new CreateOrganization("134",
           "Burnaby-Deer Lake BC Provincial Electoral District", "admin-1"
           )
      )[0]
    );
     it('should return an "already exists" error', function() {
        assert.throws(
          () => {
            organization.execute(new CreateOrganization("134",
            "Coquitlam-Maillardville BC Provincial Electoral District", "admin-1"))
          },
          function(err) {
            if (err.name == "ValidationFailed" && err.message.find(m => m.msg === "Organization already exists.") ) {
              return true;
            }
          },
          'unexpected error'
        );
     })
  });
describe('Given CreateOrganization is called with a blank name', function() {
    it('the change should be rejected.', function() {
      assert.throws(
        () => {
           var organization = new Organization();
           organization.execute(new CreateOrganization("134",
            null, "admin-1"));
        },
        function(err) {
          if (err.name == "ValidationFailed" && err.message.find(m => m.field && m.msg === "Organization name is a required field.")){
            return true;
          }
        },
        'unexpected error'
      );
    });
  });
  
  describe('When CreateOrganization is called with a blank organization id', function() {
    it('then the change should be rejected.', function() {
      assert.throws(
        () => {
           var organization = new Organization();
           organization.execute(new CreateOrganization("",
            "Coquitlam-Maillardville BC Provincial Electoral District", "admin-1"))}, 
        function(err) {
          if (err.name == "ValidationFailed" && err.message.find(m => m.field && m.msg === "Organization does not exist.")){
            return true;
          }
        },
        'unexpected error'
      );
    });
  });
})


