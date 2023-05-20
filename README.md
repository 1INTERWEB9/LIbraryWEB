# The Cosmic Library ![](https://media.discordapp.net/attachments/908798431064109098/1106227725141807176/image.png?width=412&height=385)
Un universo de historias en The Cosmic Library

La biblioteca online desarrollada con Node.js, MongoDB, Bootstrap, Git y Handlebars es una plataforma intuitiva y completa para la visualización y gestión de libros. Proporciona a los usuarios una experiencia fluida al mostrar los libros en tarjetas en una página principal, permitiéndoles acceder a información detallada de cada libro de su interés. Además, se ha implementado un sistema de inicio de sesión exclusivo para administradores, quienes tienen la capacidad de agregar, editar y eliminar libros existentes, así como gestionar la información relacionada con editoriales y géneros literarios. 

Si deseas probar la biblioteca, puedes acceder a la versión desplegada en el siguiente enlace: https://libreria-zgg5.onrender.com/home. Para acceder a las herramientas de administrador, utiliza la cuenta por defecto con nombre de usuario "admin" y contraseña "admin". Con una combinación efectiva de tecnologías modernas y una interfaz amigable, esta biblioteca online es una solución poderosa y eficiente para organizar y explorar colecciones literarias.


## Modulos
En nuestro proyecto de la Biblioteca Online, hemos aprovechado diferentes módulos y bibliotecas para potenciar su funcionalidad y facilitar su desarrollo. Estos módulos nos brindan herramientas clave para gestionar la visualización de libros, la autenticación de usuarios y la manipulación de datos relacionados con editoriales y géneros literarios. A continuación, se presentan los módulos utilizados junto con sus versiones específicas para comprender mejor su papel en nuestra Biblioteca Online.

   - [bcryptjs](https://www.npmjs.com/package/bcrypt): Esta biblioteca se utiliza para la encriptación de números aleatorios, lo que mejora la seguridad de los datos.
    
- [connect-flash](https://www.npmjs.com/package/connect-flash): Se utiliza para incluir mensajes emergentes que notifican al usuario sobre diferentes acciones, desde alertas de errores hasta confirmaciones de que la acción se ha realizado correctamente.
    
- [express](https://www.npmjs.com/package/express): Proporciona una serie de funciones y herramientas para simplificar la creación de aplicaciones web, incluyendo el manejo de rutas, la gestión de middleware, la configuración de servidores y la conexión con bases de datos, entre otros.
    
- [express-handlebars](https://www.npmjs.com/package/express-handlebars): Ofrece la posibilidad de crear plantillas reutilizables que se pueden compartir en varias páginas y rutas de la aplicación.
    
- [express-session](https://www.npmjs.com/package/express-session): Se utiliza para almacenar y administrar la información de sesión del usuario en una forma segura. Utiliza cookies para identificar la sesión del usuario y mantener los datos de sesión entre solicitudes HTTP.
    
- [method-override](https://www.npmjs.com/package/method-override): Se utiliza para enviar solicitudes HTTP PUT o DELETE al servidor.
    
- [mongoose](https://www.npmjs.com/package/mongoose): Es una biblioteca que proporciona una interfaz de modelado de objetos (ODM, por sus siglas en inglés) para MongoDB. Esto ayuda a interactuar con la base de datos MongoDB desde una aplicación Node.js de una manera más fácil y estructurada.
    
- [passport](https://www.npmjs.com/package/passport): Es un módulo de autenticación de usuario para Node.js. Simplifica la autenticación en aplicaciones web mediante el uso de diversas estrategias de autenticación, incluyendo la autenticación local por medio de un usuario y contraseña.

- [verify-image-url](https://www.npmjs.com/package/verify-image-url): Esta biblioteca permite verificar si una URL de imagen es válida y accesible. Es útil para garantizar que las imágenes utilizadas en la aplicación sean correctas y se puedan cargar correctamente.

A continuación se presenta una tabla con las versiones específicas de cada módulo utilizado:
|  Modulo |  Version|
|--|--|
| bcryptjs | 2.4.3 |
|connect-flash|0.1.1|
| express | 4.18.2 |
|express-handlebars|6.0.6|
|express-session| 1.17.3 |
|method-override|3.0.0|
|mongoose| 6.7.0 |
|passport|0.6.0|
|passport-local|1.0.0|
|verify-image-url|1.3.0|








