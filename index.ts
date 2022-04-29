import express from 'express';
import cors from 'cors';
import fileController from './controllers/fileController';
const app = express();
app.use(cors({origin: '*'}));
const port: number = 3001;

app.use('/file', fileController);
app.listen(port, () => {
    console.log(`app started at port ${port}`);
});
// import { v4 as uuidv4 } from 'uuid';
// import fs from "fs";
// import path from 'path';
// const memesFolder = './files';
// const files = fs.readdirSync(memesFolder);
// files.forEach((file) => {
//     const newFileName = `${memesFolder}/${uuidv4()}`;
//     fs.renameSync(`${memesFolder}/${file}`, newFileName);
// });
