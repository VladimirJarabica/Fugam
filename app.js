import express from 'express'
import path from 'path'
import config from './webpack.config.js'

export default () => {
	let app = express()
	
	let port = process.env.PORT || 3000
	let ip = process.env.IP || 'localhost'

	app.use(express.static('./public'))

	app.use('/', (req, res) => {
	    res.sendFile(path.resolve('public/index.html'))
	})


	app.listen(port, ip, error => {
	  if (error) throw error;
	  console.log("Express server listening on port", port)
	})
	
}