drop database if exists registros_climaticos;

create database registros_climaticos;

use registros_climaticos;

create table usuario(
    id int primary key not null auto_increment,
    nome varchar (100) not null,
    email varchar (100) not null unique,
    senha   varchar (100) not null    
);

create table evento(
    id int primary key not  null auto_increment,
    usuarioId int not null,
    cidade varchar (100) not null,
    tipoEvento varchar(100) not null,
    temperaturaMaxima decimal (10,2) not null,
    data date default(now()) not null,
    nivelImpacto enum ('Alto', 'Médio', 'Baixo') default('Médio') not null
);

alter table evento add constraint registra foreign key (usuarioId) references usuario(id);

show tables;
describe usuario;
describe evento;