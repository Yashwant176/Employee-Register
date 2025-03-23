const mongoose = require('mongoose');

const dburl = 'mongodb+srv://Yashwant:Yashwant@cluster0.slz2ljp.mongodb.net/eformdb?retryWrites=true&w=majority&appName=Cluster0';

module.exports = () => {
    return mongoose.connect(dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
