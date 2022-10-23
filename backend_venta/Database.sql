USE master;  
GO  
CREATE DATABASE pruebas 
 

CREATE TABLE productos(
id          int IDENTITY(1,1),
producto    varchar(50) NOT NULL,
precio      decimal(18,0) NOT NULL,
imagen      varchar(50) NULL,
PRIMARY KEY (ID)
)


CREATE TABLE pedidos(
id          int IDENTITY(1,1),
id_producto varchar(50) NULL,
producto    varchar(50) NULL,
cantidad    varchar(50) NULL,
precio      varchar(50) NULL,
total       varchar(50) NULL,
cedula      varchar(50) NULL,
direccion   varchar(50) NULL,
created_at  varchar(50) NULL,
PRIMARY KEY (ID)
)


INSERT INTO productos (producto,precio,imagen)
VALUES ('Televisor LG','2500000','20221020153156_tv_lg.jpg'),
       ('Lavadora Mabe','1800000','20221020153140_lavadora_mabe.jpg'),
       ('Nevera Mabe','2000000','20221020153150_nevera_mabe.jpg');

