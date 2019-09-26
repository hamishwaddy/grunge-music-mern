//create the madMen database and connect to it
var db = connect('127.0.0.1:27017/students'),
students = null;

db.createUser({user:"admin", pwd: "admin123", roles:[{role: "readWrite", db: "students"}]})

db.createCollection('names')

//create the names collection and add documents to it
db.names.insert({'name' : 'Don Draper'});
db.names.insert({'name' : 'Peter Campbell'});
db.names.insert({'name' : 'Betty Draper'});
db.names.insert({'name' : 'Joan Harris'});

db.createCollection('subjects')

db.subjects.insert({'name': 'COMP.7214'})
db.subjects.insert({'name': 'COMP.7212'})
db.subjects.insert({'name': 'COMP.7211'})
db.subjects.insert({'name': 'COMP.7213'})