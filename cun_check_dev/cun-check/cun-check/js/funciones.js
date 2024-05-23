
const datos = [
    {
      nombre: "jhojan fernando mendoza remiso",
      email: "jhojan@cun.edu.co",
      cargo: "sistemas",
      estado: "activo",
      documento: "1105146589",
      area: "sistemas",
      foto: "img/fondo.jpg",
      fecha_ingreso: "22-05-2024 03:45:00",
      fecha_salida:""

    },
    {
      nombre: "JUAN CAMILO BERNAL CABRERA",
      email: "maria@cun.edu.co",
      cargo: "contabilidad",
      estado: "Activo",
      documento: "1105158459",
      area: "contabilidad",
      foto: "img/foto-predeterminada.webp",
      fecha_ingreso: "22-05-2024 01:20:00",
      fecha_salida:""
    },
    {
        nombre: "RONAL JEFERSON RAMIREZ CANDIA",
        email: "maria@cun.edu.co",
        cargo: "disenno",
        estado: "Activo",
        documento: "1115125959",
        area: "disenno",
        foto: "img/foto-predeterminada.webp",
        fecha_ingreso: "22-05-2024 06:00:00",
        fecha_salida:""
      },
      {
        nombre: "ALAM SEBASTIAN PACHECO PRADA",
        email: "maria@cun.edu.co",
        cargo: "disenno",
        estado: "Activo",
        documento: "1109846623",
        area: "disenno",
        foto: "img/foto-predeterminada.webp",
        fecha_ingreso: "",
        fecha_salida:""
      }
  ];
  
  var nombreUser = document.getElementById("nombre_user");
  var emailUser = document.getElementById("email_user");
  var cargoUser = document.getElementById("cargo_user");
  var estadoUser = document.getElementById("estado_user");
  var docUser = document.getElementById("doc_user");
  var areaUser = document.getElementById("area_user");
  var fotoUser = document.getElementById("foto_user");
  var fech_ingreso = document.getElementById("");
  var fech_salida = document.getElementById("");
  
  nombreUser.textContent = datos[0].nombre;
  emailUser.textContent = datos[0].email;
  cargoUser.textContent = datos[0].cargo;
  estadoUser.textContent = datos[0].estado;
  docUser.textContent = datos[0].documento;
  areaUser.textContent = datos[0].area;
  fotoUser.src = datos[0].foto;
  fech_ingreso = datos[0].fecha_ingreso;
  fech_salida = datos[0].fecha_salida;

  const botonBuscar = document.getElementById('searchInput');
  botonBuscar.addEventListener('click', buscarusuario);
  
  function buscarusuario() {
    const busqueda = document.getElementById('searchInput').value;
    const usuarioencontrado = datos.filter(usuario => usuario.documento.includes(busqueda));
    resultados(usuarioencontrado);
    historial(busqueda);
    reg_historial();
  }
  
  function resultados(usuarios) {
    const resultados = document.getElementById('card_cun');
    resultados.innerHTML = '';
    usuarios.forEach(usuario => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.width = '18rem';
      card.style.margin = 'auto';
      card.innerHTML = `
        <div class="card-body">
          <img style="display: block; margin: auto; height: 100px; width: 100px;" src="${usuario.foto}" class="card-img-top m-auto py-2  rounded-circle position-relative" alt="...">
          <h5 class="card-title text-center">${usuario.nombre}</h5>
          <p class="card-text text-center">Email: ${usuario.email}</p>
          <p class="card-text text-center">Cargo: ${usuario.cargo}</p>
          <p class="card-text text-center">Estado: ${usuario.estado}</p>
          <p class="card-text text-center">Documento: ${usuario.documento}</p>
          <p class="card-text text-center">&Aacute;rea: ${usuario.area}</p>
        </div>
      `;
      resultados.appendChild(card);
    });
  }
  
  function reg_historial() {
    const historialElement = document.getElementById('cun_histo');
    historialElement.innerHTML = '';
  
    
    const reg_busqueda = mostrar_busqueda();
  
    // organiza el historial 
    const reg_busqueda_orden = reg_busqueda.slice().reverse();
  
    reg_busqueda_orden.forEach((busqueda, index) => {
      const item = document.createElement('div');
      item.textContent = `${index + 1}. Documento: ${busqueda.documento} - Nombre: ${busqueda.nombre} -correo:${busqueda.email} -cargo: ${busqueda.cargo} - area: ${busqueda.area} - Fecha ingreso: ${busqueda.fecha_ingreso} - Fecha salida: ${busqueda.fecha_salida}`;
      historialElement.appendChild(item);
    });
  }
  

  function mostrar_busqueda() {
    // se obtiene la busqueda del array de manera local :,v
    const reg_busqueda = JSON.parse(localStorage.getItem('reg_busqueda')) || [];
    return reg_busqueda;
  }
  function obtenerNombrePorDocumento(documento) {
    const usuario = datos.find(usuario => usuario.documento === documento);
    return usuario ? usuario.nombre : 'Nombre no encontrado';
  }

  function obtener_datos(documento) {
  const usuario = datos.find(usuario => usuario.documento === documento);
  if (usuario) {
    return {
      nombre: usuario.nombre,
      email: usuario.email,
      cargo: usuario.cargo,
      fecha_ingreso: usuario.fecha_ingreso,
      fecha_salida: usuario.fecha_salida,
      area: usuario.area
    };
  } else {
    return {
      nombre: 'Nombre no encontrado',
      correo: 'Correo no encontrado',
      cargo: 'Cargo no encontrado',
      fecha_ingreso: 'Fecha no registrada',
      fecha_salida: 'Fecha no registrada',
      area: 'area no encontrada'
    };
  }
}
  
  function historial(busqueda) {
    const reg_busqueda = mostrar_busqueda();
    const informacion = obtener_datos(busqueda);
    reg_busqueda.unshift({
      documento: busqueda,
      nombre: informacion.nombre,
      email: informacion.email,
      cargo: informacion.cargo,
      fecha_ingreso: informacion.fecha_ingreso,
      fecha_salida: informacion.fecha_salida,
      area: informacion.area
    });
  
    // pone las busquedas de manera local
    localStorage.setItem('reg_busqueda', JSON.stringify(reg_busqueda));
  }

