const express =require("express")
const mongoose= require("mongoose")
const dotenv=require("dotenv")
const routsurl=require("./routes/routes")
const cors=require("cors")

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS)

const app=express()

app.use(express.json())
app.use(cors())
app.use('/app', routsurl)
const port=process.env.PORT || 8080 ;
app.listen(port,()=>{
    console.log("server is up ans running")
});

//Z4EJBvruzdSCJETM
// tejasjadhav055
// Z4EJBvruzdSCJETM
//https://nita-ee-2024-album-m4st.vercel.app/