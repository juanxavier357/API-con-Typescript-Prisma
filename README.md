# API-con-Typescript-Prisma

# Make It Real - API con Typescript Prisma - Sprint 5

This is a solution to the API con Typescript Prisma project of the Make It Real course.

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

**The challenge**

Vamos a construir una API usando express, typescript y prisma basados en el siguiente diagrama. 

![Diagrama]("https://s3.amazonaws.com/makeitreal/images/classroom-prod/16913cae1f82b2ad0024ff93f06506ef.png")

Recuerden que debemos construir nuestro proyecto con todos lo lineamientos y buenas practicas que hemos visto hasta el dia de hoy.

Debemos tener los endpoints necesarios para realizar las operaciones CRUD de las 3 entidades (users, reviews, posts)

La estructura de carpetas debera ser muy similar a esta:

my-app
├── api
│    ├── review
│    │    ├── review.controller.ts
│    │    └── review.service.ts
│    └── user
│         ├── user.controller.ts
│         └── user.service.ts
├── prisma
│    ├── migrations
│    │    └── 20210923150339_init
│    │         └── migration.sql
│    └── schema.prisma
├── config
│    └── express.ts
├── routes.ts
└── index.ts

Cada estudiante debera entregar el link del repositorio.

Create an API using postgreSQL and Prisma
This API is a simple CRUD to manage a list of users, posts, reviews. 
The API has the following endpoints:

- GET / using findMany() to get all contacts
- GET /:id using findUnique() to get a contact by id
- POST / using create() to create a new contact
- PATCH /:id using update() to update a contact by id
- DELETE /:id using delete() to delete a contact by id

## My process

**Built with**
* PostgreSQL
* pgAdmin4
* Express
* Prisma
* Node JS
* TypeScript

**What I learned**
* A poner en práctica los conocimientos adquiridos en el Curso de Preparación de Make It Real.
* A conectar una base de datos remota con una base de datos creadas de forma local usando pgAdmin4.
* A usar el código de express junto a prisma para crear, leer actualizar y borrar (CRUD) los datos 
  de un tablas de columnas y registros, enlazadas por sus PK y FK desde un host local hacia un host remoto (render.com)

**Continued development**
  Seguiré practicando con la documentación de express, postgres, prisma, typescript y las guías de Make It Real 
  para implementar bien los códigos en las bases de datos SQL de mis proyectos de sitios web.

**Useful resources**
  Git, GitHub, imagen de instrucciones, vsc, render.com

## Author
  Website - [Agencia Web Móvil](www.agenciawebmovil.com/)
  GitHub - @juanxavier357

## Acknowledgments
  Agradezco a mis mentores Cristian y Juan Lorza por sus enseñanzas y revisiones de este trabajo.
