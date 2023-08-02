// another example:-
// register
// send welcome email
//  login
// get user data
// display user data .....
function register(callback) {
    setTimeout(() => {
        console.log('register end');
        callback();
    }, 1000);
}
function email(callback) {
    setTimeout(() => {
        console.log("email send");
        callback();
    }, 2000);
}
function login(callback) {
    setTimeout(() => {
        console.log("login end");
        callback();
    }, 3000);
}
function userData(callback) {
    setTimeout(() => {
        console.log("User data send");
        callback();
    }, 1000);
}
function displayData() {
    setTimeout(() => {
        console.log("data displayed");
    }, 5000);
}
console.log("account created !!!");
// this is called callback hell & pyramid of doom
//  the which we are seeing below is pyramid of doom :-
// when we have callback inside callback , the code gets difficult to manage
register(function () {
        email(function () {
            login(function () {
                userData(function () {
                    displayData();
                });
           });
      });
});
//  as calls become more nested , the code becomes deeper and deeper & increasingly more difficult to manage
//  this is called as callback hell or pyramid odf doom
//   the pyramid of these calls grows towards the right with every asynchronous action .
//     soon it spirals out of the control.
//  and this is not a proper approch to handle callback
// -----------------------------------------------------------------------------------------------------------------------------------------------------
//  soln for this is ----> promises. !!!!!!


