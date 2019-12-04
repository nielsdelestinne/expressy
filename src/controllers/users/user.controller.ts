import {Controller} from '../controller';
import {Express, Request, Response} from 'express';
import {MOCK_USERS} from "../../domain/users.mock";
import {ErrorDto} from "../error.dto";
import {User} from "../../domain/user.model";

export class UserController implements Controller {

    private static readonly PATH = '/users';

    enableRouting(expressApp: Express): void {
        expressApp.get(UserController.PATH, (req: Request, res: Response) => this.getAll(req, res));
        expressApp.get(`${UserController.PATH}/:id`, (req: Request, res: Response) => this.getById(req, res));
    }

    getAll(req: Request, res: Response) {
        res.send(MOCK_USERS.map(user => {
            return {id: user.id, name: user.name};
        }));
    }

    getById(req: Request, res: Response) {
        if (!req.params.id || !parseInt(req.params.id)) {
            res.status(400).send(new ErrorDto('400', `The provided ID is an `
                + `invalid ID (${req.params.id}). Try again by providing a numerical ID`));
        }
        const user = this.findUserForId(parseInt(req.params.id));
        user ? res.send({id: user.id, name: user.name, nickname: user.nickname, emailAddress: user.email})
             : res.status(400).send(new ErrorDto('400', `No user found for ID = ${req.params.id}`));
    }

    private findUserForId(id: number): User {
        return MOCK_USERS.find(user => user.id === id);
    }
}
