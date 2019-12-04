import {Express} from 'express';

export interface Controller {

    enableRouting(expressApp: Express): void

}
