const functions = require('firebase-functions');
const crednetials = require('./credentials.json')
var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(crednetials),
    databaseURL: "https://arqui2umg.firebaseio.com"
});


exports.sendFancyMessage = functions.https.onRequest((req, res) => {
  
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


        return  admin.messaging().send(message)
                .then((response) => {
                    console.log('Successfully sent message:', response);
                    return res.json(202,{ message:"Successfully sent message",response })
                })
                .catch((error) => {
                    console.log('Error sending message:', error);
                    return res.json(500,{ message:"Error excecutiong fcm. please se the logs." })
                });
});