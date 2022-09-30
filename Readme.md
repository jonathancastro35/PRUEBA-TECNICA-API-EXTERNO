
Ing Jhonatan Castro Cardona
jhcascardona@gmail.com
git: jonathancastro35
1) Herramientas utilizadas:
BD: Mongodb
Lenguaje: Nodejs, 
Express
React

--La aplicacion contiene un backend y un frontend
para arrancar el backend nos ubicamos en I4DIGITAL-CONSUMO-API-EXTERNA seguido nos ubicamos en el backend
estando ahí le damos la instruccion npm run dev, con la anterior instruccion arrancamos el backend.

para arrancar el frontend, nos ubicamos en la misma carpeta(I4DIGITAL-CONSUMO-API-EXTERNA) seguido en frontend, y damos
la instruccion npm start

--ya teniendo el backend y frontend arrancado, el fronten nos muestra los botones 
a) CONSULTAR USUARIOS JSONPLACEHOLDER--el cual lo que hace es consumir de la api dada y almacernar en la base de datos local
los usuarios, colocandole, su fecha y hora de consulta.
b) CONSULTAR PUBLICACIONES(POSTS) JSONPLACEHOLDER--el cual lo que hace es consumir de la api dada y almacernar en la base de datos local
los posts, colocandole, su fecha y hora de consulta.
c) CONSULTAR FOTOS JSONPLACEHOLDER--el cual lo que hace es consumir de la api dada y almacernar en la base de datos local
las foto, colocandole, su fecha y hora de consulta.

-en los puntos a,b y c se va almacenado cada vez que se consulta, pero van quedando con difrentes
fechas u horas

d) BUSCAR FOTOS, busca fotos de un usuario dando su id primero, el software priemero
busca los albunes y despues genera las fotos pertenecientes al usuario.

e) los botones que dicen VER, son aquellos donde se envidencia lo que ya a sido consultado

f) el boton ELIMINAR USUARIO DEL REGISTRO, lo que hace es eliminar un usuario
pero que ya esta en la base de datos local, osea que se guardo al monto de consultar,
pero al mismo timpo quedo guardado en el mongo db

g) en la pagina de inicio solo le coloco a lista las primeras mil fotos, por medio de un filtro. Todo lo anterior es por lo que pone la maquina pesada
pero cuando, le damos en el boton consultar fotos. El software las guarda toda, pero toma minutos para guardar

h) el boton eliminar usuario, escoge un usuario de la bd local y lo elimina, al mismo tiempo queda registrado, un historial
de todo lo que se va eliminando.

i) tenemos el boton de historial de usuarios, pero en base 64. cada vez que se elimina un usuario, queda registrado, tanto en el historial, normal como
en el historial donde se encuentra con base 64.
