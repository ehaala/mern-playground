var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Task = require('../../models/Task');

router.get('/', function(req, res){
	res.render('index')
});

router.route('/insert')
.post(function(req,res) {
	var task = new Task();
		task.description = req.body.desc;
		task.time = req.body.time;
		task.day = req.body.day;

	task.save(function(err) {
		if (err)
			res.send(err);
		res.send('Task successfully added!');
	});
})

router.route('/update')
.post(function(req, res) {
	const doc = {
		description: req.body.description,
		time: req.body.time,
		day: req.body.day
	};
	console.log(doc);
		Task.update({_id: req.body._id}, doc, function(err, result) {
			if (err)
				res.send(err);
			res.send('Task successfully updated!');
		});
});

router.get('/delete', function(req, res) {
	var id = req.query.id;
	Task.find({_id: id}).remove().exec(function(err, expense) {
		if(err)
			res.send(err)
		res.send('Task successfully deleted!');
	})
});

router.get('/getAll', function(req, res) {
	var dayRec = req.query.day;
	if(dayRec && dayRec != 'All'){
		Task.find({$and: [ {day: dayRec}]},
		function(err, tasks) {
			if (err)
				res.send(err);
			res.json(tasks);
		});
	} else {
		Task.find({day: dayRec}, function(err, tasks) {
			if (err)
				res.send(err);
			res.json(tasks);
		});
	}
});

module.exports = router;