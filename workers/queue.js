const Queue = require("bull");

let redis={
    host: 'redis-11156.c308.sa-east-1-1.ec2.redns.redis-cloud.com',
    port: 11156,
    password: '9t8RBEK2xXLR8Gkp5n0JktUt0kEtYoVR'
}

const {
    testJobJob: testJobWorker,
}=require("./workers");


const testjob = new Queue('testJob',{ redis }); 
testjob.process(1, (job,done)=>{ testJobWorker(job,done) });

const queues = [{
    name:'myJob',
    hostId: 'job de test de configuracion',
    redis
}]

module.exports = {
    testjob,
    queues
}
