const express = require("express");
const cors = require("cors");
const testTblRouter = require('./routes/testtbl.routes')
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', testTblRouter)

app.listen(PORT, () => console.log(`started on ${PORT}`));
