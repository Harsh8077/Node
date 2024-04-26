//importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from "pusher"
import cors from 'cors'


//app config
const app = express()
const port = 9000

const pusher = new Pusher({
    appId: "1625611",
    key: "7f0b0992ce6452e34abd",
    secret: "ad6067553ef00f6f264a",
    cluster: "eu",
    useTLS: true
  });

//middleware
app.use(express.json())
app.use(cors());


//DB config 
const connection_url = 'mongodb+srv://admin-harsh:Harsh123@atlascluster.nq2mv.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db = mongoose.connection

db.once("open",()=>{
    console.log("Db Connected");

    const msgCollection = db.collection('messagecontents');
    const changeStream  = msgCollection.watch();

    changeStream.on('change',(change)=>{
        console.log(change);

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',
            {
                name : messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received:messageDetails.received,
            })
        }else{
            console.log("Error triggering pusher");
        }

    });
});

//???

//api routes
app.get('/',(req,res)=>res.status(200).send("hello world")); 

app.get("/messages/sync", async(req,res)=>{
    try{

        const data =await Messages.find();
        res.status(200).send(data);
    }
    catch(err){
        res.status(500).send(err);
    }
    
})

app.post('/messages/new',async (req,res)=>{
    try{
        const dbMessage = req.body;
        const dbMessagess = new Messages(dbMessage);
        const data = await dbMessagess.save();
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
    }
})

//listen
app.listen(port,()=>console.log(`Listening on localhost:${port}`));