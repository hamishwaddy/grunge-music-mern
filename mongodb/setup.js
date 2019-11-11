//create the madMen database and connect to it
var db = connect('127.0.0.1:27017/albums'),
  albums = null;

db.createUser({ user: "user", pwd: "1234", roles: [{ role: "readWrite", db: "albums" }] })

db.createCollection('albums')
db.albums.insert({
  title: "Where You Been",
  artist: {
    "name": "Dinosaur Jr",
    "bio": "blah"
  },
  releaseYear: "1993",
  recordLabel: "",
  albumArt: ""
})

//create the names collection and add documents to it
// db.names.insert({ 'name': 'Don Draper' });
// db.names.insert({ 'name': 'Peter Campbell' });
// db.names.insert({ 'name': 'Betty Draper' });
// db.names.insert({ 'name': 'Joan Harris' });

db.createCollection('artists')
db.artists.insert({ 'name': 'Dinosaur Jr', 'bio': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' })
// db.subjects.insert({ 'name': 'COMP.7214' })
// db.subjects.insert({ 'name': 'COMP.7212' })
// db.subjects.insert({ 'name': 'COMP.7211' })
// db.subjects.insert({ 'name': 'COMP.7213' })

db.createCollection('users')
db.users.insert({ 'name': 'admin', 'email': 'test@test.com', 'password': 'admin1234' })
db.users.insert({ 'name': 'orrie', 'email': 'test@test.com', 'password': '1234' })
db.users.insert({ 'name': 'sam', 'email': 'test@test.com', 'password': '1234' })
