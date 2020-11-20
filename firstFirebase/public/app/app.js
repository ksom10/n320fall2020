import * as MODEL from '../model/model.js';

var userNumber = 0;

function init(){
    $(".get").click(() => {
        console.log("name ", MODEL.myName);
        console.log("secret name", MODEL.getMyName());
    });

    //this is for a user signing in
    $("#submitBtn").click((e) => {
        e.preventDefault();

        let un = $("#uName").val();
        let pw = $("#pWord").val();
        MODEL.userSignUp(un, pw);
    });
    //user logging out
    $("#logOut").click((e) => {
        e.preventDefault();
        MODEL.logOutUser();
    });
    //user log in
    $("#logIn").click((e) => {
        e.preventDefault();

        let un = "t@t.com";
        let pw = "password";
        MODEL.logInUser(un, pw);
    });

    //we are adding data
    $("#addData").click((e) => {
        e.preventDefault();

        let studentName = "Student " + userNumber;
        let studentClass = "class" + userNumber;
        userNumber++;

        let stuObject = {
            "studentName": studentName,
            "studentClassNumber": studentClass,
        };

        MODEL.addStudent(stuObject);
    });

    //this gets all data
    $("#getData").click((e) => {
        e.preventDefault();

        MODEL.getData();
        });

}
$(document).ready(function(){
    MODEL.initFirebase();
    init();
});