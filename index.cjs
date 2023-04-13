const express = require("express")
const app = express()
const port = 3000

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


app.post("/recupera", async (req, res) => {
	const NOME_FORM = await req.body.nome
	console.log(NOME_FORM)
  
	res.send(`Il nome del form è:  ${NOME_FORM}`)
  })

 