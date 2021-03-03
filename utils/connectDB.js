import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const connectDb = () => {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected');
        return;
    }
    mongoose.connect(process.env.MONGODB_URL,{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }, err =>{
        if(err){throw err;}
        console.log('Connected to mongodb');
    });
};
