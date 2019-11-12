const { expect } = require('chai');
const db = require('../../models');
const {
  ValidateUserExists
} = require('../../Services/Users/User_Service');

describe('User Test Suite', () => {
  it('should see if a username already exists on non existent user', async () => {
    const user = await ValidateUserExists('testuser');
    expect(user).to.be.null;
  });

  it('should see if a user already exists on an existent username', async () => {
    const test = await CreateDummyUser();
    const user = await ValidateUserExists('testuser');
    expect(user).to.be.an('object');
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
