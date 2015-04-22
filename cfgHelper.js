/**
 * Created by netadmin on 2014/12/30.
 */

module.exports = (function(){


    //this.constructor.prototype._redis=require("redis");
    //this.constructor.prototype.mredis=null;

    _redis=require("redis");
    mredis=null;
    this._cfg={};


    return new function(){

        mredis || (mredis = _redis.createClient({auth_pass :"A9"}));

        this.rSet=function(key,obj){
            if(typeof obj == "object")
            {
                mredis.set(key,JSON.stringify(obj));
            }
            else
            {
                mredis.set(key,JSON.stringify(obj));
            }

        };


        this.rGet=function(key,callback){
            mredis.get(key,callback);
        };

        this.rKeys=function(pattern,callback){
            mredis.keys(pattern,callback);
        };

        this.cfgGet=function(){
            return _cfg;
        }

        this.cfgAdd=function(key,val){
            //var str='_cfg.' + key + '="' + val + '"';
            //typeof val ==='object' && (val=JSON.stringify(val), str='_cfg.' + key + '=' + val )  ;
            //eval(str);
            _cfg[key]=val;
        }

        this.cfgSave=function(){
            this.rSet(_cfg.email,_cfg);
        }

        this.cfgLoad=function(email,callback){
            this.rGet(email,callback);
        }
    }
})();