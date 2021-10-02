import fs from 'fs'
import https from 'https'

for(let i = 0; i < 100; i++){
	const id = Number(process.env.BASE) + i
	const url = process.env.URL +`fd${id}.jpg`
	console.log(id,url);
	const file = fs.createWriteStream(`./img/${id}.jpg`)
	const req = https.get(url, (res) => {
		res.pipe(file)
		res.on('end', ()=>{
			file.close()
		})
	})
	req.on('error', (err) => {
		console.log(id,err);
	})
	continue
}



