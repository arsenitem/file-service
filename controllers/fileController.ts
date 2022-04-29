import express, { Request, Response } from 'express';
import fs from 'fs';
const router = express.Router();
const filesFolder = './files'

router.get('/', async (req: Request, res: Response) => {
    const id = req.query.id;
    const fileDir = `${filesFolder}/${id}`;
    const img = await fs.readFileSync(fileDir);
    res.write(img); 
});

router.get('/list', async (req: Request, res: Response) => {
    const links = req.query.links;
    let files = fs.readdirSync(filesFolder);
    if(links === 'true') {
        const fileLinks = files.map((file) => {
            return {id: file, link: `${req.headers.host}/file?id=${file}`};
        })
        res.json(fileLinks);
    } else {
        res.json(files);
    }
})

router.get('/random', async (req: Request, res: Response) => {
    const files = fs.readdirSync(filesFolder);
    const randomFile = files[Math.floor(Math.random()*files.length)];
    const fileDir = `${filesFolder}/${randomFile}`;
    const img = await fs.readFileSync(fileDir);
    res.write(img);  
});

export default router;