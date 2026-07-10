import mongoose from "mongoose";

export const db = async () => {
try{
   mongoose.connect(process.env.MONGO_URL)
   console.log("connected to db")
}catch(err){
  process.exit(1)
  console.log(err.message)
}
};
