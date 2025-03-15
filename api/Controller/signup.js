const databasefile = require('../config/db');

const getdata = async(req,res)=>{
    const db=await databasefile()
    const collection = await db.collection('hotelsignup');
    
    const findresult=await collection.find({}).toArray();
    console.log('find documents=>',findresult);
    res.send({
        status:200,
        msg:findresult
    })
}

const insertdata = async (req, res) => {
    try {
        const db = await databasefile();
        const collection = db.collection('hotelsignup');

        const insertresult = await collection.insertOne(req.body);
        console.log("Inserted document:", insertresult);

        return res.status(201).json({
            status: 201,
            msg: "User registered successfully",
            data: insertresult,
        });
    } catch (error) {
        console.error("Error inserting data:", error);
        return res.status(500).json({
            status: 500,
            msg: "Error inserting data",
        });
    }
};

const updatedata = async(req,res)=>{
    const db = await databasefile()
    const collection = await db.collection('hotelsignup');
   
    const updateresult=await collection.updateOne({name:req.query.name},{$set:req.body})
    console.log("updated documents =>", updateresult)
    if(updateresult.modifiedCount>0){
    res.send({
        status:200,
        msg:updateresult
    })
}
else{
    res.send({
        status:400,
        msg:"data is not updated"
    })
}
}

const deletedata = async(req,res)=>{
    const db=await databasefile()
    const collection = await db.collection('hotelsignup');
  
    const deleteresult=await collection.deleteOne({name:req.query.name})
    console.log("deleted documents =>", deleteresult)
     if(deleteresult.deletedCount>0){

        res.send({
        status:200,
        msg:deleteresult
    })
}
else{
    res.send({
        status:"400",
        msg:"something went wrong"
    })
}
}

module.exports = { insertdata,getdata ,updatedata,deletedata};
