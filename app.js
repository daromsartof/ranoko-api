import express from 'express';
import router from './src/routes/index.js';
import './src/proto/prototypes.js'
const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
