import {Server} from "./src/server";
import {Application} from "./src/application";

console.log('Starting up...');
const server = new Server(new Application());
server.start();
