import express from "express"
import parser from "body-parser"
import cors from "cors"

const app = express()

app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))
app.use(cors())
app.get("/", (req, res) => res.send("Hello World!"))

app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => {
  console.log("Hello world!")
})
