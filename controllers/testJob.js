const testjob = require("../workers/queue")

var controller = {
    test_job: function (req, res) {
        testjob.queues
        console.log("Hola mundo desde el controlador de my job my job");
    }
}

module.exports = controller