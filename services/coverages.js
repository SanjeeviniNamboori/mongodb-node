var db = require('../database/configdb1');
var check_value = "popins";
/*exports.getCache =  function(){
    db.get().collection('products').insert({"item":"food","qty":"17"}, function(err, result) {
        if(err) console.log(err)
        if (result) console.log("result inserted");

    });

} */

exports.getCache = function(){
    db.get().collection('products').findOne({"item":check_value}, function(error,result){
        if(error) console.log(error);
        else{
            if(result==null)
            db.get().collection('products').insert({"item":check_value,"qty":"8"},function(err,res){
                if(err) console.log(err);
                else return res;
            })
            else  return result;
        
    }
    })
}
