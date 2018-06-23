var db = require('../database/configdb1');
exports.getCache =  function(){
    db.get().collection('products').insert({"item":"food","qty":"17"}, function(err, result) {
        if(err) console.log(err)
        if (result) console.log("result inserted");

    });

}