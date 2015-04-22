/**
 * Created by netadmin on 2014/12/29.
 */


module.exports = (function(){
    var _redis = require("redis");
    var redis = _redis.createClient({auth_pass :"A9"});

    return new function () {
        this.set=function(key,val){
            redis.set(key,val);
        }
        this.get=function(key,callback){
            redis.get(key,callback);
        }
        this.keys=function(pattern,callback){
            redis.keys(pattern,callback);
        }
    }

})();