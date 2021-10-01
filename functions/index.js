const functions = require('firebase-functions');

var admin = require("firebase-admin");

var serviceAccount = require("./app-permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "your_db_url"
});

const express = require('express');
const cors = require('cors');
const app = express();
const db = admin.firestore();

app.use( cors( { origin:true} ));





app.post('/api/AddUser', (req,res) => {

    (async() => {

        try{
            await db.collection('Users').doc('/'+ req.body.id+ '/').create(
                {
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address,
                    phoneno : req.body.phoneno
                }
            )

            return res.status(200).send({status: 'User added succesfully!'});
        }
        catch(error){
            console.log(error);
            return res.status(500).send({error: error});
        }
    })();
    
});





app.get('/api/GetUser/:id', (req,res) => {

    (async() => {

        try{
            const document = db.collection('Users').doc(req.params.id);
            let user = await document.get();
            let response = user.data(); 
            return res.status(200).send(response);
        }
        catch(error){
            console.log(error);
            return res.status(500).send({error: error});
        }
    })();
    
});



app.get('/api/GetAllUsers', (req,res) => {

    (async() => {

        try{
            let userquery = db.collection('Users');
            let response = [];
            await userquery.get().then(snapshot =>{
                let docs = snapshot.docs;

                for(let doc of docs){
                    
                    const userdata ={
                        id : doc.id,
                        name: doc.data().name,
                        email: doc.data().email,
                        address: doc.data().address,
                        phoneno: doc.data().phoneno
                    }
                    response.push(userdata);
                }
                return response;
            })
           return res.status(200).send(response);
        }
        catch(error){
            console.log(error);
            return res.status(500).send({error: error});
        }
    })();
    
});



app.put('/api/UpdateUser/:id', (req,res) => {

    (async() => {

        try{
            const document = db.collection('Users').doc(req.params.id);
            let user = await document.update({
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                phoneno : req.body.phoneno
            });
            
            return res.status(200).send({status: 'User updated succesfully!'});
        }
        catch(error){
            console.log(error);
            return res.status(500).send({error: error});
        }
    })();
    
});


app.delete('/api/DeleteUser/:id', (req,res) => {

    (async() => {

        try{
            const document = db.collection('Users').doc(req.params.id);
            let user = await document.delete();
            return res.status(200).send({status: 'User deleted succesfully!'});
        }
        catch(error){
            console.log(error);
            return res.status(500).send({error: error});
        }
    })();
    
});

exports.app = functions.https.onRequest(app);
