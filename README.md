# Servicios Google Cloud
## Google Cloud Storage
Es un servicio en la nube de Google que se podrá usar fácilmente para crear un almacén de datos de los estudiantes y libros disponibles en cada una de las bibliotecas que la CUN tenga a disposición. Es un lugar seguro y escalable para almacenar la información de los libros que la universidad presta a los estudiantes y adicionalmente para almacenar los libros digitales. Se pueden organizar los libros en diferentes buckets y establecer permisos de acceso según sea necesario.

Está diseñado para ofrecer una alta disponibilidad y escalabilidad, esto garantizará que los libros estén disponibles para los estudiantes, docentes y plantel administrativo en general, disponible en todo momento y el almacenamiento se puede ampliar fácilmente a medida que crece la colección de libros digitales.

A nivel de seguridad el servicio de Google Cloud Storage ofrece características robustas, como el cifrado de datos en reposo y en tránsito, lo que garantiza que los libros estén protegidos contra accesos no autorizados.

Tiene una facilidad de acceso ya que proporciona una API fácil de usar que nos permite acceder y gestionar los libros almacenados de forma programática, esto facilita la integración con la página web principal de la CUN y con alguna otra aplicación que se necesite desarrollar como aplicaciones móviles. Finalmente se puede integrar fácilmente con otros servicios dentro del entorno de Foogle Cloud, abriendo las posibilidades para construir una aplicación completa y varios servicios de Google Cloud juntos.  

## Google Cloud Functions
Se pueden manejar solicitudes HTTP directamente, esto es útil para este caso para implementar funciones backend sin servidor que pueden realizar acciones como autenticar usuarios, verificar permisos de acceso, procesar solicitudes de préstamos de libros y actualizar la base de datos constantemente.

Este servicio es interesante ya que si se integra con otros servicios en la nube de Google Cloud se puede configurar una función que se active cada vez que un libro es solicitado en préstamo y que actualice la base de datos de préstamos en Cloud Firestore 

Cuenta con una escalabilidad automática según la demanda. Esto es importante ya que no nos debemos preocupar por administrar la infraestructura subyacente; Google Cloud de forma automática se encarga de escalar las funciones según la necesidad para manejar el volumen de solicitudes. Adicionalmente porque sigue el modelo de “pago por uso”, lo que significa que solo se paga por el tiempo de ejecución de funciones y os recursos que consumen. Esto puede ser más rentable que mantener servidores en funcionamiento todo el tiempo, especialmente parar picos de tráfico variable, eso quiere decir que estará disponible todo el tiempo, pero la disponibilidad se priorizará en ciertos momentos donde el calendario académico sea tenido en cuenta. 

Este servicio permite un desarrollo ágil, ya que se puede escribir y desplegar funciones de forma independiente unas de otras, lo que hace es iterar rápidamente y actualizar partes específicas de la aplicación que se esté desarrollando sin tener que afectar otras áreas.

## Google Cloud Firestore
Este servicio es una base de datos NoSQL completamente administrada que escala automáticamente para satisfacer las demandas de la aplicación. Esto significa que puede manejar grandes volúmenes de datos y un alto número de transacciones, lo que es crucial para una aplicación que maneja préstamos de libros para una universidad. 

Ofrece un modelo de datos flexible basado en documentos y colecciones. Se pueden organizar los datos de los libros, estudiantes, sedes, préstamos y demás información relacionada en una estructura jerárquica que se adapte a las necesidades específicas de la aplicación.

Proporciona sincronización en tiempo real entre las aplicaciones cliente y la base de datos en la nube. Esto permite que los cambios realizados en la base de datos se reflejan instantáneamente en la interfaz de usuario de la aplicación lo que es ideal para mostrar una disponibilidad de libros en tiempo real y notificar a los estudiantes cuando un libro está disponible para préstamo y en qué sede.

Cuenta con una seguridad integrada que permite controlar quién tiene acceso a qué datos y se puede configurar reglas de seguridad a nivel de documento y colección para garantizar que solo los usuarios autorizados pueden acceder a modificar la información de los libros y los préstamos y se puede integrar fácilmente con otros servicios de Google Cloud como todos los servicio, para construir una aplicación completa aprovechando las ventajas de cada uno de estos servicios.

## Google Cloud Pub/Sub
Este servicio proporciona un sistema de mensajería escalable y confiable que permite la comunicación asíncrona entre los diferentes componentes de tu aplicación. Se puede usar para enviar mensajes entre servicios y procesos, lo que es útil para notificar a los estudiantes sobre la disponibilidad de libros.

Ayuda a desacoplar los diferentes servicios de la aplicación, al actuar como intermediario para la comunicación, esto significa que los servicios pueden operar de forma independiente y a su propio ritmo, lo que facilita la escalabilidad y la gestión de la carga de trabajo. 

Está diseñado para ser altamente escalable y con alta disponibilidad, se pueden manejar grandes volúmenes de mensajes y así asegurarte de que los mensajes se entreguen de forma confiable, incluso en situaciones de alto tráfico. Como se ha mencionado con los demás servicios se puede integrar fácilmente con otros servicios dentro del entorno de Google Cloud, por ejemplo, integrar Functions, Storage y Firestore para construir flujos de trabajo complejos que respondan a eventos específicos en la aplicación como la solicitud de un libro por parte de un estudiante.

Es útil para procesar eventos en tiempo real. Puede ser usado para capturar eventos como solicitudes de préstamo de libros y desencadenar acciones en repuesta a ellos, como actualizar la base de datos de préstamo o enviar notificaciones a los estudiantes.

## Google Cloud Vision API
La API de Vision puede extraer texto de imágenes de libros escaneados. Esta función es útil si la universidad desea digitalizar libros físicos para hacerlos disponibles en formato electrónico para los estudiantes.

Además de extraer texto, la API puede identificar y clasificar objetos, rostros, logotipos, y otras entidades visuales en las imágenes. Puede ser útil para organizar y catalogar la biblioteca digital de la universidad, así como para mejorar la experiencia de búsqueda de los estudiantes.

La capacidad de convertir texto de imágenes a texto digital hace que el contenido de los libros sea accesible incluso para personas con discapacidades visuales o para aquellos que prefieren consumir contenido en formatos electrónicos o mediante lectores de pantalla. 

Puede automatizar tareas relacionadas con el procesamiento de imágenes, como el etiquetado y la clasificación de libris, lo que puede ahorrar tiempo de esfuerzo en la gestión de la biblioteca digital y como se ha mencionado se puede integrar con otras herramientas y servicios como Storage y Functions parar crear flujos de trabajo completos y automatizados para la gestión de contenido visual.

## Google Cloud Identity Platform
Con este servicio se puede proporcionar una forma centralizada de gestionar las identidades de los usuarios en la aplicación. Se puede autenticar a los estudiantes cuando acceden a la página web de la universidad, lo que garantiza que solo los usuarios autorizados pueden acceder al contenido y realizar acciones como solicitar libros en préstamo. 

Ofrece funciones de inicio de sesión seguro, incluido el soporte para la autenticación multifactor (MFA) y el inicio de sesión único (SSO). Esto garantiza que los estudiantes puedan acceder a la página web de la universidad de forma segura, utilizando métodos de autenticación robustos que protegen sus cuentas de accesos no autorizados. 

Permite definir y gestionar roles y permisos para los usuarios de la aplicación. Puede controlar quién tiene acceso a qué partes de la aplicación, lo que es importante parar proteger la información confidencial y garantizar que los estudiantes solo puedan realizar acciones para las cuales están autorizados.

Se integra fácilmente con otros servicios dentro del entorno de Google Cloud, como Storage y Functions para usar, por ejemplo, autenticación de Identity Platform en toda la aplicación, desde el frontend hasta el backend, proporciona una experiencia de usuario coherente y segura en todos los aspectos de la aplicación.

Está diseñado con medidas de seguridad robustas y cumple con altos estándares de seguridad reconocidos a nivel mundial, como ISO 27001 y SOC 2. Esto garantiza que la aplicación cumpla con las normativas de seguridad y protección de datos relevantes. 

## Google Cloud App Engine
Ofrece escalabilidad automática para una aplicación que podría experimentar picos de tráfico durante periodos de alta demanda, como el inicio de un nuevo semestre académico. Maneja la administración de la infraestructura por el administrador, lo que facilita que el administrador desarrolle otras funciones de la aplicación en lugar de preocuparse por la configuración y mantenimiento de servidores. Esto implica el proceso de implementación y reduce la carga operativa. 

Escala horizontalmente, lo que nos indica es que puede distribuir automáticamente el tráfico entre múltiples instancias de la aplicación para mantener un rendimiento óptimo, esto garantiza que la página web de la universidad permanezca receptiva incluso durante periodos de alta demanda. 

Es fácil de usar, proporciona una variedad de herramientas y servicios integrados para facilitar el desarrollo y la implementación de aplicaciones. Dentro de un entorno de Google Cloud se pueden incluir servicios como Storage, SQL y Stackdriver para agregar funcionalidades adicionales a la aplicación sin tener que configurarlos por separado. 

# Características Técnicas del Proyecto
## Autenticación y Autorización:
- Implementar un sistema de autenticación utilizando Google Cloud Identity Platform para garantizar que solo los usuarios autorizados pueden acceder a la aplicación.
- Definir roles y permisos para los usuarios, como estudiantes, docentes y personal administrativo, utilizando las capacidades de gestión de identidades de Google Cloud Identity Platform

## Almacenamiento de datos:
- Utilizar Google Cloud Storage para almacenar libros digitales, imágenes escaneadas y otros archivos relacionados con la biblioteca.
- Organizar los libros en diferentes buckets o categorías para facilitar la gestión y el acceso.
- Configurar permisos de acceso para controlar quién puede ver, agregar o modificar los archivos de la biblioteca.

## Base de Datos: 
- Utilizar Google Cloud Firestore como base de datos para almacenar información sobre libros, estudiantes, préstamos, sedes de la universidad, etc.
- Diseñar un modelo de datos flexible basado en documentos y colecciones que se adapten a las necesidades específicas de la aplicación.

## Procesamiento de Eventos:
- Utilizar Google Cloud Functions para procesar eventos en tiempo real, como solicitudes de préstamo de libros, y actualizar la base de datos en Cloud Firestore en respuesta a estos eventos.
- Configurar Google Cloud Pub/Sub para enviar mensajes entre servicios y procesos, lo que facilita la comunicación asíncrona y la gestión de la carga de trabajo

## Integración con API Externas:
- Integrar la API de Google Cloud Vision para extraer texto de imágenes de libros escaneados y mejorar la búsqueda y organización de la biblioteca digital.
- Utilizar otras APIs externas, como servicio de información bibliotecaria, para enriquecer la información de los libros y facilitar la gestión de la biblioteca.

## Interfaz de Usuario:
- Desarrollar una interfaz de usuario intuitiva y fácil de usar para que los estudiantes, docentes y personal administrativo puedan acceder a la biblioteca y realizar acciones como buscar libros, solicitar préstamos y gestionar cuentas.
- Utilizar tecnologías web modernas como HTML, CSS y JavaScript para construir la interfaz de usuario y garantizar una experiencia fluida y receptiva.

## Seguridad: 
- Implementar medidas de seguridad robustas, como cifrado de datos en reposo y en tránsito, para proteger la información confidencial de los usuarios y los libros de la biblioteca.
- Configurar reglas de seguridad a nivel de documento y colección en Google Cloud Firestore para controlar quién puede acceder y modificar la información.

## Escalabilidad y Disponibilidad:
- Diseñar la aplicación para que sea altamente escalable y disponible, utilizando servicios como Google Cloud App Engine que ofrecen escalabilidad automática según la demanda. 
- Utilizar la replicación de datos y la redundancia para garantizar la disponibilidad de la aplicación incluso durante picos de tráfico o fallas de hardware.

# Conformación de equipo de trabajo

## Gerente de Proyecto:
Responsable de la planificación general del proyecto, coordinación del equipo y comunicación con los interesados tanto del personal de la biblioteca como la de los usuarios finales. Adicionalmente, se encarga de supervisar el progreso del proyecto y se asegura de que se cumplan los plazos y los objetivos asignando tareas y planificando los hitos.

**Rol IAM - Propietario:** Este rol proporciona acceso completo a todos los recursos del proyecto y es adecuado para el gerente de proyecto que necesita supervisar y coordinar todo el proyecto.

## Desarrolladores de Software:
Encargados de desarrollar la aplicación web y las funciones backend utilizando las tecnologías adecuadas como HTML, CSS, JavaScript, y las herramientas de Google Cloud como Google Cloud Functions y se puede dividir en equipos de frontend y backend.
- Desarrollador Frontend: Creará la interfaz de usuario para la búsqueda de libros, solicitudes de préstamos y gestión de cuentas de usuario.
- Desarrollador Backend: Construirá la lógica del servidor, integrando los servicios de Google Cloud para el almacenamiento y procesamiento de datos.

**Rol IAM - Desarrollador de Google Cloud:** Este rol permite a los desarrolladores crear y administrar recursos en Google Cloud, lo que les permite trabajar en el desarrollo de la aplicación y la configuración de los servicios.

## Arquitecto de Soluciones:
Encargado de diseñar la arquitectura de la aplicación, incluyendo la integración de los diferentes servicios de Google Cloud y definir los estándares de desarrollo y las mejores prácticas.

**Rol IAM - Desarrollador de Google Cloud o Administrador de IAM:** Dependiendo de las responsabilidades específicas del arquitecto de soluciones, podrían necesitar los permisos proporcionados por uno de estos roles.

## Especialista en Google Cloud:
Experto en los servicios de Google Cloud como Google Cloud Storage para almacenar los libros digitales, Firestore, Pub/Sub, etc. Adicionalmente asesora al equipo sobre cómo utilizar eficientemente estos servicios y resolver problemas técnicos relacionados.

**Rol IAM - Desarrollador de Google Cloud o Administrador de IAM:** Dependiendo de las responsabilidades específicas del especialista en Google Cloud, podrían necesitar los permisos proporcionados por uno de estos roles.

## Especialista en Seguridad Informática:
Encargado de la seguridad de la aplicación y la protección de los datos almacenados en Google Cloud, define también las políticas de seguridad, realiza pruebas de penetración y audita la infraestructura para identificar posibles vulnerabilidades. Finalmente configurará las reglas de seguridad en Google Cloud Firestore para garantizar el cifrado de datos en reposo y en tránsito.

**Rol IAM - Administrador de IAM:** Este rol proporciona permisos para administrar los permisos de acceso, lo que es crucial para la gestión de la seguridad en Google Cloud

## Diseñador de Interfaz de Usuario (UI/UX):
Responsable de diseñar una interfaz de usuario intuitiva, fácil de usar y atractiva para la aplicación. Trabaja en colaboración con los desarrolladores de frontend para implementar el diseño y garantizar una experiencia de usuario óptima.

**Rol IAM - Editor de Proyecto:** Este rol permite al diseñador trabajar en recursos específicos del proyecto, como archivos de configuración y desarrollo de la interfaz de usuario

## Especialista en Integración y Pruebas:
Encargado de integrar los diferentes componentes de la aplicación y realizar pruebas exhaustivas de funcionamiento y rendimiento. Desarrolla también casos de prueba, automatiza pruebas y coordina la resolución de problemas.

**Rol IAM - Desarrollador de Google Cloud:** Este rol proporciona los permisos necesarios para trabajar en la integración y pruebas de la aplicación

## Especialista en Soporte Técnico: 
Proporciona soporte técnico tanto durante el desarrollo como después del lanzamiento de la aplicación y responde a consultas de usuarios, soluciona problemas técnicos y gestiona actualizaciones y parches de seguridad.

**Rol IAM - Lector de Proyecto:** Este rol proporciona permisos de solo lectura en los recursos del proyecto, lo que permite al especialista en soporte técnico acceder a la información necesaria para proporcionar asistencia

## Estructura de conformación roles
### Alam Pachecho (Gerente proyecto)
```
{
  "bindings": [
    {
      "role": "roles/accesscontextmanager.policyAdmin",
      "members": [
        "user:alam.pacheco@cun.edu.co",
        "serviceAccount:my-other-app@appspot.gserviceaccount.com",
        "group:admins@example.com",
        "domain:google.com"
    ]
} 
```
### Alam Pachecho (Soporte Técnico)
```
{
  "role": " roles/cloudsupport.techSupportEditor",
  "members": [
    "user:alam.pacheco@cun.edu.co"
            ]
        }
    ]
}
```
### Ronal Ramirez (Especialista en Seguridad Informática)
```
{
  "bindings": [
    {
      "role": "roles/iam.securityAdmin",
      "members": [
        "user:ronal.ramirezc@cun.edu.co",
        "serviceAccount:my-other-app@appspot.gserviceaccount.com",
        "group:admins@example.com",
        "domain:google.com"
    ]
}
```
### Juan Camilo Bernal (Especialista en Seguridad Informática)
```
{
  "role": " roles/iam.securityAdmin ",
  "members": [
    "user:juan.bernalccacab@cun.edu.co"
            ]
        }
    ]
}
```
### Jhojan Mendoza (Especialista en Google Cloud)
```
{
  "bindings": [
    {
      "role": "roles/apigee.serviceAgent",
      "members": [
        "user:”jhojan.mendozar@cun.edu.co",
        "serviceAccount:my-other-app@appspot.gserviceaccount.com",
        "group:admins@example.com",
        "domain:google.com"
           ]
        }
    ]
}
```
### Jhojan Mendoza (Especialista en Google Cloud)
```
{
    "bindings": [
        {
            "role": " roles/managedidentities.admin",
            "members: [
                "user: “juan.bernalccacab@cun.edu.co",
                "serviceAccount:my-other-app@appspot.gserviceaccount.com",
                "group:admins@example.com",
                "domain:google.com"
            ]
}
{
    "role": " roles/apigee.serviceAgent ",
    "members": [
        "user:Daniel.gonzalezhe@cun.edu.co "
            ]
        }
    ]
}
```
```
{
    "bindings": [
    {
        "role": "roles/managedidentities.backupAdmin",
        "members": [
            "user:juan.bernalccacab@cun.edu.co",
            "serviceAccount:my-other-app@appspot.gserviceaccount.com",
            "group:admins@example.com",
            "domain:google.com"
    ]
}
{
    "role": " roles/managedidentities.backupAdmin",
    "members": [
        "user:jhojan.mendozar@cun.edu.co"
            ]
        }
    ]
}
```

```
{
    "bindings": [
    {
        "role": " roles/cloudsupport.techSupportEditor",
        "members": [
            "user:ronal.ramirezc@cun.edu.co",
            "serviceAccount:my-other-app@appspot.gserviceaccount.com",
            "group:admins@example.com",
            "domain:google.com"
            ]
        }
    ]
}
```