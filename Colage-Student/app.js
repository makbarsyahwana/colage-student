import express from "express"
import parser from "body-parser"
import cors from "cors"

const app = express()

app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))
app.use(cors())

app.listen(3000, () => console.log("Hello World"))
