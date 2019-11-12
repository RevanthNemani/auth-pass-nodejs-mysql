const { expect } = require('chai');
const { UsernameExists } = require('../../Services/Users/User_DB');
const db = require('../../models');

describe('User Test Suite', () => {
  it('should see if a username already exists in db', async () => {
    const check = await UsernameExists('kdsjfhg');
    expect(check).to.be.null;
    expect(check === undefined).to.be.false;
    expect(check === false).to.be.false;
  });

  it('should throw an error because no username was passed', async () => {
    try {
      const check = await UsernameExists();
    } catch (err) {
      expect(err).to.be.an('Error');
      expect(err.message).to.equal(
        'No Username was passed as an arugument'
      );
    }
  });

  it('should create a user, see if username already exists, and fail', async () => {
    const test = await CreateDummyUser();
    const check = await UsernameExists('testuser');
    expect(check).to.be.an('object');
    await DestroyDummyUser(test);
  });
});

// Create Dummy user async function
async function CreateDummyUser() {
  return db.userbase.create({
    firstName: 'testingonly',
    lastName: 'lasttestingonly',
    username: 'testuser',
    password: 'testpassword'
  });
}

// destroy a summy user async function
async function DestroyDummyUser(user) {
  return user.destroy({ force: true });
}
