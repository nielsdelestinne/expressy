import bodyParser = require('express');

import {Controller} from './controllers/controller';
import {Express} from 'express';

export class Application {

    constructor(private controllers: Controller[], private expressApp: Express) {}

    launchOn(port: number) {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.listen(port, () => console.log(`Server started and listening on port ${port}!`));
        this.enableRouting();
    }

    private enableRouting() {
        this.expressApp.get('/', (req, res) => res.send('Up and running!'));
        this.controllers
            .forEach(controller => controller.enableRouting(this.expressApp))

    }
}
