var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Song = require('../../models/Song');

router.get('/', function(req, res){
	res.render('index')
});

router.route('/insert')
.post(function(req,res) {
	var song = new Song();
		song.url = req.body.url;
		song.type = req.body.type;

	song.save(function(err) {
		if (err)
			res.send(err);
		res.send('Song successfully added!');
	});
})

router.route('/update')
.post(function(req, res) {
	const doc = {
		url: req.body.url,
		type: req.body.type
	};
	console.log(doc);
		Song.update({_id: req.body._id}, doc, function(err, result) {
			if (err)
				res.send(err);
			res.send('Song successfully updated!');
		});
});

router.get('/delete', function(req, res) {
	var id = req.query.id;
	Song.find({_id: id}).remove().exec(function(err, expense) {
		if(err)
			res.send(err)
		res.send('Song successfully deleted!');
	})
});

router.get('/getAll', function(req, res) {
	var typeRec = req.query.type;
	if(typeRec && typeRec != 'All'){
		Song.find({$and: [ {type: typeRec}]},
		function(err, songs) {
			if (err)
				res.send(err);
			res.json(songs);
		});
	} else {
		Song.find({type: typeRec}, function(err, songs) {
			if (err)
				res.send(err);
			res.json(songs);
		});
	}
});

// router.get('/getAll', function(req, res) {
// 	Song.findAll().then(function(err, songs) {
// 		if (err)
// 			res.send(err);
// 		res.json(songs);
// 	});
// })

module.exports = router;