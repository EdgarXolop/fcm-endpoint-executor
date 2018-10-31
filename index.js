var admin = require("firebase-admin");

var serviceAccount = require("./credentials.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<project>.firebaseio.com"
});
var message = {
    notification:{
        title: 'Hola',
        body:'puto el que lo lea'
    },
    data:{
        msg:'puta vida pero mas puto Kevin con K'
    },
    topic: 'news'
}


admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });