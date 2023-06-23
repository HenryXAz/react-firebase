# Práctica CRUD con roles de usuario react/firebase

Se trata de una pequeña aplicación que pretende administrar las operaciones CRUD de productos y almacenarlos en Firebase/Firestore, además, implementa un login simple con roles de acceso utilizando Firebase/Auth

Para acceder a la aplicación hay que autenticarse, la aplicación ya posee un usuario de ejemplo llamado user@example.com.

Los roles de autenticación pretenden controlar lo siguiente:

* Solo los usuarios con rol de administrador tienen acceso a la actualización de ciertos datos de los usuarios que están registrados en la aplicación.
* Solo los usuarios con rol de administrador pueden ver el dashboard que muestra la información del producto más caro, el producto más barato y la cantidad total de productos.
* Los usuarios con rol de vendedor solo pueden hacer operaciones CRUD de los productos.