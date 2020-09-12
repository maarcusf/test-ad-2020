import { User } from './../user';
import { UsersService } from '../services/users.service';
import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { async } from 'rxjs';
import { json } from 'express';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    //console.log('Função Draw: ' + this.draw());
    // const array = await this.usersService.getAll();
    // const retorno = await this.sort(array);
    // console.log('Retorno da função: ' + retorno);
    //this.draw();
    return this.usersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.usersService.delete(id);
  }

  //Lógica do sorteio
  sort(array) {
    let index_current = array.length;
    let value_temp = null;
    let index_random = null;
    const index_aux = 0;
    while (index_aux !== index_current) {
      index_random = Math.floor(Math.random() * index_current);
      index_current -= 1;
      value_temp = array[index_current];
      array[index_current] = array[index_random];
      array[index_random] = value_temp;
    }
    return array;
  }

  //Função para realizar o sorteio
  async draw() {
    const users = await this.usersService.getAll();
    console.log('Há ' + users.length + ' participantes');
    //verificar se há participantes suficientes para ter amigo secreto (no mínimo 3)
    if (users.length < 3) {
      console.log('Necessário ao menos 3 participantes cadastrados');
    }

    //montando objeto com o resultado da consulta
    console.log('Montando objeto com o resultado da consulta!');
    const allFriendsSecrets = users.map(user => {
      return {
        name: user.name,
        email: user.email,
        secretFriend: user.secretFriend,
      };
    });

    console.log('Tamanho array montado: ' + allFriendsSecrets.length);
    console.log('Realizando lógica do sorteio');
    const drawnUsers = this.sort(allFriendsSecrets);
    const allUsers = [];

    console.log('Adicionando o primeiro amigo secreto para o último do array.');
    allUsers.push({
      name: drawnUsers[Object.keys(drawnUsers).length - 1].name,
      email: drawnUsers[Object.keys(drawnUsers).length - 1].email,
      secretFriend: drawnUsers[0].name,
    });

    console.log(
      'Adicionando o próximo amigo para o primeiro do array até o tamanho do array -1.',
    );
    for (let i = 0; i < Object.keys(drawnUsers).length - 1; i++) {
      console.log(
        'Dentro do For - "Tamanho":' + (Object.keys(drawnUsers).length - 1),
      );
      console.log(drawnUsers[i].name);
      console.log(drawnUsers[i].email);
      console.log(drawnUsers[i + 1].name);
      allUsers.push({
        name: drawnUsers[i].name,
        email: drawnUsers[i].email,
        secretFriend: drawnUsers[i + 1].name,
      });
    }

    console.log('Fazendo Update no campo secretFriend!');
    const usersUpdated = await Promise.all(
      allUsers.map(async user => {
        return await this.usersService.addSecretFriend(
          user.email,
          user.secretFriend,
        );
      }),
    );
    console.log('Após update:');
    console.log(usersUpdated);
    //FAZER ENVIO DE E-MAIL AQUI
    //
    //
  }
}
