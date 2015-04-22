/**
 * Created by zhaoyao on 12/25/2014.
 */

var mongodb = require("mongodb");

module.exports =  {
    add:function(calData){
        mongodb.connect('mongodb://laptop.solutis.com:27017/gcal', function (err, conn) {
            //mongodb.connect('mongodb://admin:Abd9@laptop.soldnkeys.com:27017/gcal', function (err, conn) {

            if (!err) {

                conn.authenticate('admin','Ad9',function(a,b){
                    if(!a){

                        conn.collection('events', function (err, coll) {

                            coll.remove({}, function (err,obj) {
                                console.log('abc');
                            });


                            coll.insert(calData, function (err, obj) {
                                conn.close();
                                if(err)
                                {
                                    console.log(err);
                                }
                                else
                                {
                                    console.log(obj);
                                }

                            });
                        });
                    }
                });




                //conn.close();
            }
            else {
                conn.close();
                console.log(err);
            }


        });

    },
    addGmail:function(userEmail,mailEntry){//userEmail is the relation ID,mails is the real data
        mongodb.connect('mongodb://laptop.soldys.com:27017/gmail', function (err, conn) {
            //mongodb.connect('mongodb://admin:Ad9@laptop.sodys.com:27017/gcal', function (err, conn) {

            if (!err) {

                conn.authenticate('admin', 'Ab9', function (a, b) {
                    if (!a) {


                        //conn.createCollection(userEmail,function(err,collection){
                        //    console.log('create collection');
                        //    if(!err)
                        //    {
                        //
                        //    }
                        //})

                        conn.collection('mails', function (err, coll) {

                            coll.remove({'mailEntry.guid':mailEntry.guid,'mailEntry.msgid':mailEntry.msgid}, function (err,obj) {
                                console.log('abc');

                                var mailForPersists={user:userEmail,mailEntry:mailEntry}
                                coll.insert(mailForPersists, function (err, obj) {
                                    conn.close();
                                    if(err)
                                    {
                                        console.log(err);
                                    }
                                    else
                                    {
                                        console.log(obj);
                                    }

                                });

                            });




                        });


                    }
                });
            }
        });
    },
    b:function(){
        return "b";
    }
}
