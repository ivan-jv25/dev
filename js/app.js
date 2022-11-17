var programacion = [ {nombre:'Python'}, {nombre:'Javascript'}, {nombre:'Java'}, {nombre:'Php'}, ];
var DDBB         = [ {nombre:'Mysql'}, {nombre:'Sql Server'}, ];
var herramienta  = [ {nombre:'Visual Estudio code'}, {nombre:'Mysql Workbench'}, {nombre:'Windows Terminal'}, {nombre:'AWS'}, {nombre:'S3'}, {nombre:'RDL'}, {nombre:'Postman'}, {nombre:'Photoshop'}, {nombre:'AnyDesck'}, {nombre:'Obs'}, ];
var estilos_btn  = [ {style:'btn-primary'}, {style:'btn-secondary'}, {style:'btn-success'}, {style:'btn-danger'}, {style:'btn-warning'}, {style:'btn-info'}, {style:'btn-light'}, {style:'btn-dark'}, ];

window.onload = () =>{
    __init__()
}

const __init__ = () =>{
    document.getElementById('id_btn_wsp').setAttribute('onclick','envio_whatsapp()')
    lenguajes_programacion();
    herramientas_trabajo();
    bases_de_datos()
}

const envio_whatsapp = () =>{
    let url = 'https://api.whatsapp.com/send/?phone=56938728797&app_absent=0'
    let win = window.open(url, '_blank');
    win.focus();
}

const lenguajes_programacion = () =>{
    let lista = ``
    programacion.forEach(element => { lista +=`<p type="button" class="btn ${estilo_random_btn()}">${element.nombre}</p> ` });
    document.getElementById('id_lista_lenguajes').innerHTML = lista;
}

const bases_de_datos = () =>{
    let lista = ``
    DDBB.forEach(element => { lista +=`<p type="button" class="btn ${estilo_random_btn()}">${element.nombre}</p> ` });
    document.getElementById('id_lista_ddbb').innerHTML = lista;
}

const herramientas_trabajo = () =>{
    let lista = ``
    herramienta.forEach(element => { lista +=`<p type="button" class="btn ${estilo_random_btn()}">${element.nombre}</p> ` });
    document.getElementById('id_lista_herramienta').innerHTML = lista;
}


const estilo_random_btn = () =>{
    let max          = estilos_btn.length    
    let min          = 0
    let index_random = 0
    index_random     = Math.floor(Math.random() * (max - min)) + min

    return estilos_btn[index_random].style
}