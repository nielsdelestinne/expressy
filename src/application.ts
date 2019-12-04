import express = require('express');
import {Express} from 'express';

export class Application {

    private expressApp: Express;

    constructor() {
        this.expressApp = express();
    }

    launchOn(port: number) {
        this.expressApp.listen(port, () => console.log(`Example app listening on port ${port}!`));
        this.enableRouting();
    }

    private enableRouting() {
        this.expressApp.get('/', (req, res) => res.send('Hello World!'));
    }
}
