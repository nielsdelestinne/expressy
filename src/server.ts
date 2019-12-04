import { Application} from './application';

export class Server {
    private static readonly PORT = 3000;

    constructor(private app: Application, private port = Server.PORT) { }

    start() {
        this.app.launchOn(this.port);
    }
}

