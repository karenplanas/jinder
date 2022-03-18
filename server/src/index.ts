const express = require('express');
const cors = require('cors');
const router = require('./router');
const db = require('./models/db')
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(router);

const server = app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
	await db.connect()
});
