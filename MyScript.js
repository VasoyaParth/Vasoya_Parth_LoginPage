const firebaseConfig = {
    apiKey: "AIzaSyCj_JUBfyGPoNF6zzw0W-RLwAmfkSZhrB8",
    authDomain: "logininfo-31298.firebaseapp.com",
    databaseURL: "https://logininfo-31298-default-rtdb.firebaseio.com",
    projectId: "logininfo-31298",
    storageBucket: "logininfo-31298.appspot.com",
    messagingSenderId: "937305996923",
    appId: "1:937305996923:web:a652f5861e24e2c934ecde",
    measurementId: "G-5F3DY0QMDN"
};

//initialized database
firebase.initializeApp(firebaseConfig);

//reference of database
const LoginInformationDB = firebase.database().ref('LoginInformation');
document.getElementById('LoginInformation').addEventListener("submit", submiteform);


function submiteform(e){
    e.preventDefault();

    var UsernameR = getElementval('Username');
    var EmailIdR = getElementval('EmailId');
    var PasswordR = getElementval('Password');

    saveMessage(UsernameR, EmailIdR, PasswordR);
    
}

const saveMessage = (UsernameR, EmailIdR, PasswordR) => {
    var newLoginInformation = LoginInformationDB.push();

    newLoginInformation.set({
        Username: UsernameR,
        EmailId: EmailIdR,
        Password: PasswordR,

    });
};

const getElementval = (id) => {
    return document.getElementById(id).value;
}