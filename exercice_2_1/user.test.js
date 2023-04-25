const User = require('./user');

test('je test mon user', ()=>{
    const user = new User("robin.sobasto@gmail.com","Sobasto", "Robin","1997-02-09");

    user.isValid();
    expect(user.isValid()).toBeTruthy();
});