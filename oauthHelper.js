/**
 * Created by Administrator on 2014/12/27.
 */

var google = require('../lib/googleapis.js');

var secrets = require('../cfg/secrets.json');

module.exports =  {
    oauth2Client :function(){
        if(!this._oauthClient)
            this._oauthClient=
                new google.auth.OAuth2(
                secrets.web.client_id,
                secrets.web.client_secret,
                secrets.web.redirect_uris[0]);
        return this._oauthClient;
    },

    refresh:function(rToken,callback){
        var oauth2Client=this.oauth2Client();
        oauth2Client.credentials = {refresh_token: rToken};
        oauth2Client.refreshAccessToken(function (err, tokens) {
            if(typeof callback=='function') {
                callback(err,tokens);
            }
        });;


    }
}