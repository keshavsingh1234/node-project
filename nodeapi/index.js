const http=require("http");
const express=require("express")
const app=express();
const fs=require("fs");
var requests=require("requests");
const conn=require("./conn.js");
const path=require("path")
const ejs=require("ejs")

const temp=path.join(__dirname,"../nodeapi/temp/views")
app.set("view engine","ejs")
//app.set("views",temp);

//app.set("views",template_path)

const mongoose=require("mongoose")
const Registerdatas=require("../nodeapi/register.js")
app.use(express.urlencoded({extended:false}));
//console.log(Registerdatas)
app.use(express.json());





/*app.get("/l",async(req,res)=>{
  try{
  const data= await Registerdatas.find({})
  console.log(data)
         res.render("index",{data})
//aisa b kar skte h isse jo niche likha h
        /* try{
          await MensRanking.find({})
           .then((x)=>{
             res.render("index",{x})
             console.log(x)
           } )
  //  const a=[read];
    
   /* read.forEach(function(table){
      const tn=table.name;
      console.log(tn)
   
      res.render("index",{
        name:read
       /* dob:table.dob,
        country:table.country,
        score:table.score*/
     // })
      
//})*/

    
    
   
  //  console.log(a[0].name)
  /*  for(i=0;i<a.length;i++){
     const e= a[i].name;
      console.log(a[i])
    }
   // const realtime=map(a);
//console.log(realtime)
      /*  const name=read[0].name
     /* res.render("index",{
        name:read[0].name,
        dob:read[0].dob,
        country:read[0].country,
        score:read[0].score
      })*/
     // 
  /*}catch(e){
    console.log("error aa gya")
  }

})*/
/*app.post("/l" , async(req,res) =>{
  const name=req.body.phone;
  console.log(name)
  const registeremp=new Registerdatas({
                
    name:req.body.name,
    email:req.body.email,
    address:req.body.address,
    phone:req.body.phone
    
   
 })
*/
//console.log(registeremp)



/*const datas=await registeremp.save();
console.log(`success ${datas}`)

const data= await Registerdatas.find({})
console.log(data)
       res.render("index",{data}) 
})

*/
/*
app.set("view engine","hbs")
app.set('views',)
*/


app.get("/service" , (req,res) =>{
  
    try{
  requests("https://pixabay.com/api/?key=35090557-81b1ebcd01c2abcd83516d61f&q=yellow+flowers&image_type=photo&pretty=true", )
  .on('data', (chunk) => {
   
  const obj=JSON.parse(chunk);
  //res.send([obj])
  const ent=[obj]
  // const typee=ent[0];
   const typee=ent[0].hits;
   //console.log(ent[0].hits[0].tags)
  res.render("index2",{typee})
/*res.send(ent[0].hits[19])
const v=ent.map(function(element, index, ent){
  console.log(ent)*/
})



}catch(e){
    console.log("error in net")
}
})


app.post("/service",(req,res)=>{
  
 
  try{
    const searchtext=req.body.search;
    requests(`https://pixabay.com/api/?key=35090557-81b1ebcd01c2abcd83516d61f&q=${searchtext}&image_type=photo&pretty=true`, )
    .on('data', (chunk) => {
     
    const obj=JSON.parse(chunk);
    //res.send([obj])
    const ent=[obj]
    // const typee=ent[0];
     const typee=ent[0].hits;
     if(typee.length==0){
      console.log("if working")
      //const typeee=["error"]
      res.render("index2",{typee})
     }else{
     //console.log(ent[0].hits[0].tags)
    res.render("index2",{typee})
  /*res.send(ent[0].hits[19])
  const v=ent.map(function(element, index, ent){
    console.log(ent)*/
  }
  })
  
  
  
  }catch(e){
      console.log("error in net")
  }
  })
  
  
/*
//const homefile= fs.readFileSync("home.html","utf-8");

/*const replaceval=(file,origval) =>{
    const a=new Date();
   let temper=file.replace("{%tempval%}",origval.main.temp);
  // console.log(temper);
   temper=temper.replace("{%tempmin%}",origval.main.temp_min);
   temper=temper.replace("{%tempmax%}",origval.main.temp_max);
   temper=temper.replace("{%city%}",origval.name);
   temper=temper.replace("{%country%}",origval.sys.country);
   temper=temper.replace("{%tempstatus%}",origval.weather[0].main);
   temper=temper.replace("{%num%}",a);
   return temper;
    
    

};*/

/*const server=http.createServer((req,res) =>{
  if(req.url=="/"){
    res.end("jshdgh")
  }
if(req.url=="/service"){
    requests("https://api.genderize.io?name=luc", )
    .on('data', (chunk) => {
      console.log(chunk)
    const obj=JSON.parse(chunk);
    console.log(obj)
      const arraydata=[obj];
      console.log(arraydata[0].name);
   //  console.log(arraydata.map())
    /*  const realtime=arraydata
      .map((val) => replaceval(homefile,val))
      .join("");
       res.write(realtime)*/
       
    //  })
       //console.log(arraydata[0].name);
    //})
  /*  .on('end', (err) => {
      if (err) return console.log('connection closed due to errors', err);
     
      console.log('end');
    });
}
});
*/
/*app.get("/l",(req,res)=>{
  res.render("index")
})
*/
app.get("/weather" , (req,res) =>{
  
  try{
requests("http://api.openweathermap.org/data/2.5/weather?q=udhampur&appid=89e713c8df167532ea4c6f7872847ddc", )
.on('data', (chunk) => {
 
const obj=JSON.parse(chunk);
//res.send([obj])
const ent=[obj]
// const typee=ent[0];
 const typee=ent[0];
 //console.log(typee)
 //console.log(ent[0].hits[0].tags)
res.render("weather",{typee})
/*res.send(ent[0].hits[19])
const v=ent.map(function(element, index, ent){
console.log(ent)*/
})



}catch(e){
  console.log("error in net")
}
})
app.post("/weather",(req,res)=>{
  try{
    const name=req.body.name;
    console.log(name)
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=89e713c8df167532ea4c6f7872847ddc`, )
    .on('data', (chunk) => {
     
    const obj=JSON.parse(chunk);
  
    //res.send([obj])
    const ent=[obj];
    
   console.log(ent[0])
    
    const typee=ent[0];
    // console.log(typee.length)
     //console.log(typee)
     res.render("weather",{typee})
    // const typee=ent[0].hits;
    /* if(typee.length==0){
      console.log("if working")
      //const typeee=["error"]
      res.render("weather",{typee})
     }else{
     //console.log(ent[0].hits[0].tags)
    res.render("weather",{typee})
     }
  /*res.send(ent[0].hits[19])
  const v=ent.map(function(element, index, ent){
    console.log(ent)*/
  
  })
  
  
  
  }catch(e){
      console.log("error in net")
  }
  
})

app.listen(8000,()=>{
  console.log("heyc  dfws")
});