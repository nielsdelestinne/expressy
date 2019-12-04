import express = require('express');
import {Server} from './src/server';
import {Application} from './src/application';
import {UserController} from './src/controllers/users/user.controller';

console.log('=======================================');
console.log('=================     =================');
console.log('==============          ===============');
console.log('=============  EXPRESSY  ==============');
console.log('==============          ===============');
console.log('=================     =================');
console.log('=======================================');

console.log('\n===> Starting up...');

const server =
    new Server(
        new Application(
            [new UserController()],
            express()));

console.log('===> Shut server down using CTRL + C');
console.log('=======================================');

server.start();



