var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://weatherAppUser:pass@cluster0.gl5x5.mongodb.net/weatherapp?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err);
    }
)