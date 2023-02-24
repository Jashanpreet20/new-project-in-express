

const path=require('path');



    
exports.getcontactuscontroller=(req,res,next) =>{
    console.log('contact page');
    res.sendFile(path.join(__dirname ,"../" ,"views", "contact.html"));
};