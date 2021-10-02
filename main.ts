import fs from 'fs'
import https from 'https'

for(let i = 0; i < 100; i++){
	const id = Number(process.env.BASE) + i
	const url = process.env.URL +`fd${id}.jpg`
	const req = https.get(url, (res) => {
		if(res.statusCode !== 404){
			const file = fs.createWriteStream(`./img/${id}.jpg`)
			res.pipe(file)
			res.on('end', ()=>{
				console.log(`add ${url}`);
				file.close()
			})
		}
	})
	req.on('error', (err) => {
		console.log(id,err);
	})
	continue
}



