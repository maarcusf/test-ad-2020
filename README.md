# test-ad-2020

## 📋 Descrição
Projeto para processo de seleção para Adireto

Problema do Amigo Secreto

1. Crie um backend simples usando mongoose e algum framework web qualquer para salvar as pessoas (nome, email, amigo). Um CRUD bem simples mesmo.

2. Crie um frontend bem simples usando Angular ou React para listar, cadastrar, editar e apagar as pessoas e realizar o sorteio.

3. Crie um botão no frontend para realizar o sorteio e enviar para cada pessoa um email contendo o amigo sorteado. Salve o nome de cada amigo sorteado (campo amigo)

##  :rocket: Tecnologias

### Backend:
-  NodeJs
-  NestJs
-  MongoDB
-  Mongoose
-  Nodemailer

### Frontend:
-  ReactJS
-  React Bootstrap

## :arrow_forward: Como Instalar e Rodar Projeto
```bash

  # Clone this repository
  $ git clone https://github.com/maarcusf/test-ad-2020.git

  $ cd backend

  #Mudar as configurações do arquivo '.env.example' 
  #Conf do email - adicionar email e senha de um e-mail válido para ser o "Remetente"

  #Se já tiver o MongoDB instalado, só iniciar com o comando:
  	$ mongod

  #Necessário instalar MongoDB
  #Instalação Linux:
	  #Import the public key used by the package management system
	  $ wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
	  #Install gnupg and its required libraries using the following command:
	  $ sudo apt-get install gnupg
	  #Once installed, retry importing the key:
	  $ wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

	  #Create a list file for MongoDB.
	  $ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

	  #Reload local package database
	  $ sudo apt-get update

	  #Install the MongoDB packages.
	  $sudo apt-get install -y mongodb-org

	  #Start MongoDB
	  $ sudo systemctl start mongod

	#If you receive an error similar to the following when starting mongod:
	#Failed to start mongod.service: Unit mongod.service not found. Run the following command first:
	$sudo systemctl daemon-reload

	#You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:
	$ sudo systemctl enable mongod

#Instalação MongoDB Windows:
	<a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/">Clique Aqui para Ver o tutorial de instalação do MongoDB no Windows.</a>

#Instalando Dependências
	#backend
		$ cd backend
		$ npm install
		$ npm run start:dev 

	#frontend
		$ cd ..
		$ cd frontend
		$ npm install
		$ npm start

```
- Se tudo ocorrer bem a aplicação vai estar disponível no endereço: http://localhost:3000/


