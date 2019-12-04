import express = require('express');
import {Server} from "./src/server";
import {Application} from "./src/application";
import {UserController} from "./src/controllers/users/user.controller";

console.log('Starting up...');

const server =
    new Server(
        new Application(
            [new UserController()],
            express()));

server.start();
