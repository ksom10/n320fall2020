var _db;

export function initFirebase(){
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            console.log(user);
            _db=firebase.firestore();
        }else{
            console.log("No User");
            _db = [];
        }
    });
}

export function userSignUp(uName, pWord){
    firebase.auth().createUserWithEmailAndPassword(uName, pWord)
    .then((result) =>{
        console.log(result.user.uid);
    })
    .catch((error) =>{
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(`Error Code ${errorCode} Error Message ${errorMessage}`);
        });
}

export function logOutUser(){
    firebase.auth().signOut().then(() =>{
        console.log("User Signed Out");
    })
    .catch((error) =>{
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(`Error Code ${errorCode} Error Message ${errorMessage}`);
        });
}

export function logInUser(uName, pWord){
    firebase.auth().signInWithEmailAndPassword(uName, pWord).then((result) =>{
        console.log(result.user.uid);
    })
    .catch((error) =>{
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(`Error Code ${errorCode} Error Message ${errorMessage}`);
        });

    }

export function addStudent(studentData){
    _db.collection("Students").add(studentData).then((doc) =>{
        console.log(`Student added ${doc} id ${doc.id}`);
    })
    .catch((error) =>{
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(`Error Code ${errorCode} Error Message ${errorMessage}`);
        });
}

export function getData(){
    _db.collection("Students").get().then((querySnapShot)=>{
        querySnapShot.forEach((doc) =>{
            console.log(doc.data());
            console.log(doc.id);
        })
    })
}