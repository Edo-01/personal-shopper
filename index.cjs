const express = require("express")
const app = express()
const port = 3000


var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
		  user: 'manaweb.milano@gmail.com',
		  pass: 'bX5u7B3.sZ?'
	  }
  });









app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/contatti.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.post("./", async (req, res) => {
	const NOME_FORM = await req.body.nome;
	console.log(NOME_FORM);
	let mailOptions = {
		from: 'tua_email@gmail.com',
		to: 'manaweb.milano@gmail.com',
		subject: 'Test Nodemailer',
		text: 'Ciao da Node.js!'
		// html: ''
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	}); 
  
	// res.send(`Il nome del form è:  ${NOME_FORM}`);

	

  })




 
  
  