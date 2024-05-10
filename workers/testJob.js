module.exports = async(job, done) =>{
    try{
        console.log('test de job');
    }catch(error){
        return done(error);
    }

}