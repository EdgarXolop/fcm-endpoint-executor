const functions = require('firebase-functions');
var admin = require("firebase-admin");

admin.initializeApp();


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
                    return res.json(202,{ message:"Successfully sent message" })
                })
                .catch((error) => {
                    console.log('Error sending message:', error);
                    return res.json(500,{ message:"Error excecutiong fcm. please se the logs." })
                });
});