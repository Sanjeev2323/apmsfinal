const nodemailer=require('nodemailer');
const tenants=require('./models/tenants');
const cron = require('node-cron');

 
function mail(receipeintmail){

    const transporter =nodemailer.createTransport({
        service:'gmail',
        auth: {
          user : 'sanjeevpadma2323@gmail.com',
          pass : 'S@njeev123'
        }
      });


      const mailOptions={
    
        from:'sanjeevpadma2323@gmail.com',
        to: receipeintmail,
        subject:'hi all this is a system genrated email',
        text: 'payment to be paid on or before 5 th of the month below is the link'
      };
      
    

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("email sent to "+mailOptions.to);
        }
      })
    }


   

module.exports=mail