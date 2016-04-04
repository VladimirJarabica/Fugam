import express from 'express'
import path from 'path'
import config from './webpack.config.js'

export default () => {
	let app = express();

	app.use(express.static('./public'));

	app.use('/', (req, res) => {
	    res.sendFile(path.resolve('public/index.html'));
	});

	let port = 3000;

	app.listen(port, error => {
	  if (error) throw error;
	  console.log("Express server listening on port", port);
	});

}