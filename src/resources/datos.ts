// datos.ts
export const datos = {
    embarcaciones: [
        {

            matricula: 'EMB001',
            manga: 5.2,
            eslora: 15.8,
            origen: 'España',
            titular: 'Juan Pérez',
            imagen: 'url_imagen_1.jpg',
            numero_registro: 'REG001',
            datos_tecnicos: 'Especificaciones técnicas 1',
            modelo: 'Modelo A',
            nombre: 'Barco 1',
            tipo: 'Velero',
        },
        {

            matricula: 'EMB002',
            manga: 4.5,
            eslora: 12.3,
            origen: 'Italia',
            titular: 'Ana Rodríguez',
            imagen: 'url_imagen_2.jpg',
            numero_registro: 'REG002',
            datos_tecnicos: 'Especificaciones técnicas 2',
            modelo: 'Modelo B',
            nombre: 'Barco 2',
            tipo: 'Yate',
        },
        {

            matricula: 'EMB003',
            manga: 6.0,
            eslora: 18.5,
            origen: 'Grecia',
            titular: 'Pedro Martínez',
            imagen: 'url_imagen_3.jpg',
            numero_registro: 'REG003',
            datos_tecnicos: 'Especificaciones técnicas 3',
            modelo: 'Modelo C',
            nombre: 'Barco 3',
            tipo: 'Catamarán',
        },
        {

            matricula: 'EMB004',
            manga: 4.8,
            eslora: 14.2,
            origen: 'Francia',
            titular: 'Elena García',
            imagen: 'url_imagen_4.jpg',
            numero_registro: 'REG004',
            datos_tecnicos: 'Especificaciones técnicas 4',
            modelo: 'Modelo D',
            nombre: 'Barco 4',
            tipo: 'Lancha',
        },
        {

            matricula: 'EMB005',
            manga: 5.5,
            eslora: 16.7,
            origen: 'Portugal',
            titular: 'Luisa Sánchez',
            imagen: 'url_imagen_5.jpg',
            numero_registro: 'REG005',
            datos_tecnicos: 'Especificaciones técnicas 5',
            modelo: 'Modelo E',
            nombre: 'Barco 5',
            tipo: 'Velero',
        },
        {

            matricula: 'EMB006',
            manga: 6.2,
            eslora: 19.0,
            origen: 'Alemania',
            titular: 'Mario López',
            imagen: 'url_imagen_6.jpg',
            numero_registro: 'REG006',
            datos_tecnicos: 'Especificaciones técnicas 6',
            modelo: 'Modelo F',
            nombre: 'Barco 6',
            tipo: 'Yate',
        },
        {

            matricula: 'EMB007',
            manga: 5.0,
            eslora: 14.8,
            origen: 'Holanda',
            titular: 'Carmen Ruiz',
            imagen: 'url_imagen_7.jpg',
            numero_registro: 'REG007',
            datos_tecnicos: 'Especificaciones técnicas 7',
            modelo: 'Modelo G',
            nombre: 'Barco 7',
            tipo: 'Catamarán',
        },
        {

            matricula: 'EMB008',
            manga: 4.3,
            eslora: 11.5,
            origen: 'Suecia',
            titular: 'Javier García',
            imagen: 'url_imagen_8.jpg',
            numero_registro: 'REG008',
            datos_tecnicos: 'Especificaciones técnicas 8',
            modelo: 'Modelo H',
            nombre: 'Barco 8',
            tipo: 'Lancha',
        },
        {

            matricula: 'EMB009',
            manga: 5.8,
            eslora: 17.3,
            origen: 'Noruega',
            titular: 'Isabel Martínez',
            imagen: 'url_imagen_9.jpg',
            numero_registro: 'REG009',
            datos_tecnicos: 'Especificaciones técnicas 9',
            modelo: 'Modelo I',
            nombre: 'Barco 9',
            tipo: 'Velero',
        },
        {

            matricula: 'EMB010',
            manga: 6.5,
            eslora: 20.2,
            origen: 'Dinamarca',
            titular: 'Miguel Rodríguez',
            imagen: 'url_imagen_10.jpg',
            numero_registro: 'REG010',
            datos_tecnicos: 'Especificaciones técnicas 10',
            modelo: 'Modelo J',
            nombre: 'Barco 10',
            tipo: 'Yate',
        },
    ],
    tripulantes: [
        {

            numero_documento: 'DOC001',
            nombre: 'María López',
            sexo: 'Femenino',
            nacionalidad: 'Argentina',
        },
        {

            numero_documento: 'DOC002',
            nombre: 'Carlos González',
            sexo: 'Masculino',
            nacionalidad: 'Española',
        },
        {

            numero_documento: 'DOC003',
            nombre: 'Laura Pérez',
            sexo: 'Femenino',
            nacionalidad: 'Mexicana',
        },
      
    ],

    roles: [
        {
            RolID: 1,
            NombreRol: "Concesionario",
            Permisos: "lectura,modificacion,eliminacion",
            Descripcion: "Rol con permisos de administrador"
        },
        {
            RolID: 2,
            NombreRol: "Guardamuelles",
            Permisos: "lectura,modificacion",
            Descripcion: "Rol para guardamuelles"
        },
        {
            RolID: 3,
            NombreRol: "Administrativo",
            Permisos: "lectura,modificacion",
            Descripcion: "Rol para editar y publicar contenido"
        },
        {
            RolID: 4,
            NombreRol: "Invitado",
            Permisos: "lectura",
            Descripcion: "Rol con permisos de solo lectura"
        },
        {
            RolID: 5,
            NombreRol: "Guardacivil",
            Permisos: "lectura,modificacion",
            Descripcion: "Rol con permisos de solo lectura"
        }
    ],
    usuarios: [
        {
            UsuarioID: 1,
            NombreCompleto: "Juan Pérez",
            NombreUsuario: "juanperez",
            Perfil: "Concesionario",
            Habilitado: true,
            InstalacionID: 1,
            DNI: "123456789",
            Contraseña: "hashed_password",
            Teléfono: "123-456-789",
            Email: "juan@example.com",
            Direccion: "Calle Principal 123",
            Imagen: "avatar_juan.png",
            Descripcion: "Usuario administrador principal",
            TipoUsuario: "concesionario"
        },
        {
            UsuarioID: 2,
            NombreCompleto: "María García",
            NombreUsuario: "mariag",
            Perfil: "Guardamuelles ",
            Habilitado: true,
            InstalacionID: 1,
            DNI: "987654321",
            Contraseña: "hashed_password",
            Teléfono: "987-654-321",
            Email: "maria@example.com",
            Direccion: "Avenida Secundaria 456",
            Imagen: "avatar_maria.png",
            Descripcion: "Usuario guardamuelles del sistema",
            TipoUsuario: "Guardamuelles r"
        },
        {
            UsuarioID: 3,
            NombreCompleto: "Carlos López",
            NombreUsuario: "carlosl",
            Perfil: "Invitado",
            Habilitado: true,
            InstalacionID: null,
            DNI: "456789123",
            Contraseña: "hashed_password",
            Teléfono: "456-789-123",
            Email: "carlos@example.com",
            Direccion: "Plaza Central 789",
            Imagen: "avatar_carlos.png",
            Descripcion: "Usuario invitador",
            TipoUsuario: "Invitado"
        },
        {
            UsuarioID: 4,
            NombreCompleto: "Laura Martínez",
            NombreUsuario: "lauram",
            Perfil: "Administrativo",
            Habilitado: true,
            InstalacionID: 1,
            DNI: "789123456",
            Contraseña: "hashed_password",
            Teléfono: "789-123-456",
            Email: "laura@example.com",
            Direccion: "Avenida Principal 987",
            Imagen: "avatar_laura.png",
            Descripcion: "Usuario administrativo",
            TipoUsuario: "Administrativo"
        },
        {
            UsuarioID: 5,
            NombreCompleto: "Pedro Rodríguez",
            NombreUsuario: "pedror",
            Perfil: "Guardacivil",
            Habilitado: true,
            InstalacionID: null,
            DNI: "321654987",
            Contraseña: "hashed_password",
            Teléfono: "321-654-987",
            Email: "pedro@example.com",
            Direccion: "Calle Secundaria 654",
            Imagen: "avatar_pedro.png",
            Descripcion: "Usuario de fuerzas de seguridad",
            TipoUsuario: "Guardacivil"
        }
    ],
    instalaciones: [
        {
            InstalacionID: 1,
            CodigoInstalacion: "PT001",
            Ubicacion: "Puerto A",
            Dimensiones: "500m x 200m",
            Descripcion: "Terminal de carga y descarga para barcos pequeños",
            Estado: "Operativo",
            FechaCreacion: "2022-01-01"
        },
        {
            InstalacionID: 2,
            CodigoInstalacion: "PT002",
            Ubicacion: "Puerto B",
            Dimensiones: "800m x 300m",
            Descripcion: "Terminal especializada en cruceros turísticos",
            Estado: "En mantenimiento",
            FechaCreacion: "2022-02-01"
        },
        {
            InstalacionID: 3,
            CodigoInstalacion: "PT003",
            Ubicacion: "Puerto C",
            Dimensiones: "600m x 250m",
            Descripcion: "Puerto de pesca con modernas instalaciones de procesamiento",
            Estado: "Operativo",
            FechaCreacion: "2022-03-01"
        },
        {
            InstalacionID: 4,
            CodigoInstalacion: "PT004",
            Ubicacion: "Puerto D",
            Dimensiones: "700m x 400m",
            Descripcion: "Terminal de carga para contenedores",
            Estado: "En mantenimiento",
            FechaCreacion: "2022-04-01"
        },
        {
            InstalacionID: 5,
            CodigoInstalacion: "PT005",
            Ubicacion: "Puerto E",
            Dimensiones: "550m x 220m",
            Descripcion: "Puerto deportivo con servicios exclusivos",
            Estado: "Operativo",
            FechaCreacion: "2022-05-01"
        }
    ],
    pantalanes: [
        {
            PantalanID: 1,
            NombrePantalan: "Pantalan A",
            Ubicacion: "Muelle 1",
            Descripcion: "Pantalan para barcos de carga",
            InstalacionID: 1,
            Capacidad: 10
        },
        {
            PantalanID: 2,
            NombrePantalan: "Pantalan B",
            Ubicacion: "Muelle 2",
            Descripcion: "Pantalan para embarcaciones de recreo",
            InstalacionID: 2,
            Capacidad: 15
        },
        {
            PantalanID: 3,
            NombrePantalan: "Pantalan C",
            Ubicacion: "Muelle 3",
            Descripcion: "Pantalan especializado en pesca comercial",
            InstalacionID: 3,
            Capacidad: 20
        },
        {
            PantalanID: 4,
            NombrePantalan: "Pantalan D",
            Ubicacion: "Muelle 4",
            Descripcion: "Pantalan para barcos de carga y descarga de contenedores",
            InstalacionID: 4,
            Capacidad: 25
        },
        {
            PantalanID: 5,
            NombrePantalan: "Pantalan E",
            Ubicacion: "Muelle 5",
            Descripcion: "Pantalan exclusivo para yates de lujo",
            InstalacionID: 5,
            Capacidad: 30
        }
    ],
    incidencias:
        [
            {
                IncidenciaID: 1,
                Titulo: "Problema en grúas de carga",
                GuardamuellesID: 1,
                Foto: "problema_gruas.jpg",
                Descripcion: "Se detectó un mal funcionamiento en las grúas de carga del muelle 1.",
                AdministrativoID: 1
            },
            {
                IncidenciaID: 2,
                Titulo: "Fuga de combustible",
                GuardamuellesID: 2,
                Foto: "fuga_combustible.jpg",
                Descripcion: "Se reportó una fuga de combustible en el área del muelle 2.",
                AdministrativoID: 2
            },
            {
                IncidenciaID: 3,
                Titulo: "Equipamiento dañado",
                GuardamuellesID: 3,
                Foto: "equipamiento_danado.jpg",
                Descripcion: "Se identificó equipamiento dañado en el pantalán del muelle 3.",
                AdministrativoID: 3
            },
            {
                IncidenciaID: 4,
                Titulo: "Accidente en el muelle 4",
                GuardamuellesID: 4,
                Foto: "accidente_muelle.jpg",
                Descripcion: "Ocurrió un accidente durante las operaciones en el muelle 4.",
                AdministrativoID: 4
            },
            {
                IncidenciaID: 5,
                Titulo: "Robo de equipos",
                GuardamuellesID: 5,
                Foto: "robo_equipos.jpg",
                Descripcion: "Se denunció el robo de equipos en el área del muelle 5.",
                AdministrativoID: 5
            }
        ],
    transitos:[
        {
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Barco1",
            instalacion: "Puerto A",
            pantalan: "Pantalan-1",
            amarre: "Amarre-123",
            patron: "Capitán Juan",
            proposito: "Turismo"
          },
        
        
        {
   
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Yate Elegante",
            instalacion: "Marina XYZ",
            pantalan: "P-42",
            amarre: "A-789",
            patron: "Capitán Maria",
            proposito: "Recreativo"
          },
        
        {
          
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Velero Rápido",
            instalacion: "Club Náutico Z",
            pantalan: "P-10",
            amarre: "A-456",
            patron: "Capitán Carlos",
            proposito: "Competición"
          },
        
        {
          
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Lancha Deportiva",
            instalacion: "Puerto B",
            pantalan: "P-23",
            amarre: "A-987",
            patron: "Capitán Luis",
            proposito: "Pesca"
          },
          {
          
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Lancha Deportiva",
            instalacion: "Puerto B",
            pantalan: "P-23",
            amarre: "A-987",
            patron: "Capitán Luis",
            proposito: "Pesca"
          },
          {
          
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Lancha Deportiva",
            instalacion: "Puerto B",
            pantalan: "P-23",
            amarre: "A-987",
            patron: "Capitán Luis",
            proposito: "Pesca"
          },
          {
          
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Lancha Deportiva",
            instalacion: "Puerto B",
            pantalan: "P-23",
            amarre: "A-987",
            patron: "Capitán Luis",
            proposito: "Pesca"
          },
          {
          
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Lancha Deportiva",
            instalacion: "Puerto B",
            pantalan: "P-23",
            amarre: "A-987",
            patron: "Capitán Luis",
            proposito: "Pesca"
          },
          {
          
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Lancha Deportiva",
            instalacion: "Puerto B",
            pantalan: "P-23",
            amarre: "A-987",
            patron: "Capitán Luis",
            proposito: "Pesca"
          },
          {
          
            fecha_entrada: "2024-01-14T12:00:00",
            fecha_salida: "2024-01-14T18:00:00",
            embarcacion: "Lancha Deportiva",
            instalacion: "Puerto B",
            pantalan: "P-23",
            amarre: "A-987",
            patron: "Capitán Luis",
            proposito: "Pesca"
          },
    ],
    plazaBase 
 :[
        {
            fecha_entrada: "2024-01-14T12:00:00",
            embarcacion: "Barco Azul",
            instalacion: "Puerto Norte",
            pantalan: "P-7",
            amarre: "A-234",
            autorizaciones: "Permiso 123",
            titular: "Juan Pérez",
            datos_estancia: "A",
              inicio: "2024-01-14"
            
          },
        
        {
          
            fecha_entrada: "2024-01-14T12:00:00",
            embarcacion: "Velero Rápido",
            instalacion: "Marina XYZ",
            pantalan: "P-10",
            amarre: "A-456",
            autorizaciones: "Autorización A",
            titular: "María Rodríguez",
            datos_estancia: "A",
              inicio: "2024-01-14"
        },
          
        
        {
          
            fecha_entrada: "2024-01-14T12:00:00",
            embarcacion: "Lancha Deportiva",
            instalacion: "Puerto B",
            pantalan: "P-23",
            amarre: "A-987",
            autorizaciones: "Permiso 789",
            titular: "Luis González",
            datos_estancia: "A",
              inicio: "2024-01-14"
            
          
        },
        {
         
            fecha_entrada: "2024-01-14T12:00:00",
            embarcacion: "Catamarán Explorer",
            instalacion: "Marina Aventura",
            pantalan: "P-5",
            amarre: "A-654",
            autorizaciones: "Autorización XYZ",
            titular: "Ana Martínez",
            datos_estancia: "A",
            inicio: "2024-01-14",
         },

         {
            fecha_entrada: "2024-02-03T08:30:00",
            embarcacion: "Velero Blanco",
            instalacion: "Puerto Sur",
            pantalan: "P-3",
            amarre: "A-102",
            autorizaciones: "Permiso 456",
            titular: "María García",
            datos_estancia: "B",
            inicio: "2024-02-03"
         },
         {
            fecha_entrada: "2024-02-10T13:15:00",
            embarcacion: "Barco Gris",
            instalacion: "Puerto Noroeste",
            pantalan: "P-6",
            amarre: "A-512",
            autorizaciones: "Permiso 789",
            titular: "Pedro Sánchez",
            datos_estancia: "B",
            inicio: "2024-02-10"
        },
        {
            fecha_entrada: "2024-02-05T10:45:00",
            embarcacion: "Velero Negro",
            instalacion: "Puerto Suroeste",
            pantalan: "P-11",
            amarre: "A-201",
            autorizaciones: "Permiso 456",
            titular: "Sofía Ramírez",
            datos_estancia: "A",
            inicio: "2024-02-05"
        },
        {
            fecha_entrada: "2024-02-12T09:00:00",
            embarcacion: "Yate Azul",
            instalacion: "Puerto Noreste",
            pantalan: "P-2",
            amarre: "A-403",
            autorizaciones: "Permiso 654",
            titular: "Andrés García",
            datos_estancia: "C",
            inicio: "2024-02-12"
        },
        {
            fecha_entrada: "2024-02-08T14:30:00",
            embarcacion: "Catamarán Amarillo",
            instalacion: "Puerto Sureste",
            pantalan: "P-4",
            amarre: "A-610",
            autorizaciones: "Permiso 123",
            titular: "Lucía Fernández",
            datos_estancia: "B",
            inicio: "2024-02-08"
        },
        {
            fecha_entrada: "2024-02-15T11:20:00",
            embarcacion: "Crucero Blanco",
            instalacion: "Puerto Surcentral",
            pantalan: "P-10",
            amarre: "A-705",
            autorizaciones: "Permiso 321",
            titular: "Manuel Martínez",
            datos_estancia: "A",
            inicio: "2024-02-15"
        }
        
         

          
    ]


};
