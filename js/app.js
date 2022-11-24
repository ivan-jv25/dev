var programacion = [ {nombre:'Python'}, {nombre:'Javascript'}, {nombre:'Java'}, {nombre:'Php'}, ];
var DDBB         = [ {nombre:'Mysql'}, {nombre:'Sql Server'}, ];
var herramienta  = [ {nombre:'Visual Estudio code'}, {nombre:'Mysql Workbench'}, {nombre:'Windows Terminal'}, {nombre:'AWS'}, {nombre:'S3'}, {nombre:'RDL'}, {nombre:'Postman'}, {nombre:'Photoshop'}, {nombre:'AnyDesck'}, {nombre:'Obs'}, ];
var actividades  = [ {nombre:'Coffe', icon:'bi bi-cup-hot-fill'}, {nombre:'Code', icon:'bi-code-slash'}, {nombre:'Game', icon:'bi-controller'}, {nombre:'Music', icon:'bi-music-note-beamed'}, {nombre:'Repeat', icon:'bi-arrow-repeat'}, ]
var estilos_btn  = [ {style:'btn-primary'}, {style:'btn-secondary'}, {style:'btn-success'}, {style:'btn-danger'}, {style:'btn-warning'}, {style:'btn-info'}, {style:'btn-light'}, {style:'btn-dark'}, ];
var estilos_text = [  {style:'text-primary'},  {style:'text-orange'},  {style:'text-success'},  {style:'text-red'},  {style:'text-warning'},  {style:'text-cyan'},  {style:'text-blue'},  {style:'text-dark'}, ];


window.onload = () =>{
    __init__()
}

const __init__ = () =>{
    document.getElementById('id_btn_wsp').setAttribute('onclick','envio_whatsapp()')
    lenguajes_programacion();
    herramientas_trabajo();
    bases_de_datos();
    actividades_diarias();
    cargar_proyectos();
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

const actividades_diarias = () =>{
    let lista = ``
    actividades.forEach(element => { lista+= `<div class="col-1"> <i class="${element.icon} actividades"></i> <p class="p-actvidades">${element.nombre} <span class="${estilo_random_text()}"><strong>();</strong></span></p> </div>` });
    document.getElementById('div_actividades').innerHTML = lista;
}


const cargar_proyectos = () =>{
    
    fetch('./asset/proyectos.json')
    .then(response => response.json())
    .then(response =>{
        let list = ``
        response.forEach(element => { list += `<div class="item"><a href="${element.URL}" target="_blank"><div class="image" style="width:300%"><img class=" rounded" src="${element.Imagen}" ></div></a></div>` });
        document.getElementById('id_lista_proyectos').innerHTML = list;

        let owl = $('.owl-carousel');
        owl.owlCarousel({ items:5, loop:true, margin:200, autoplay:true, autoplayTimeout:500, autoplayHoverPause:true,responsiveClass:true, responsive:{ 0:{ items:1,margin:200, nav:true }, 600:{ items:3,margin:200, nav:true }, 1000:{ items:5,margin:200, nav:true } } });
        owl.trigger('play.owl.autoplay',[2000])
    })
}


const estilo_random_btn = () =>{
    let index_random = ramdon_list(estilos_btn.length, 0)
    return estilos_btn[index_random].style
}

const estilo_random_text = () =>{
    let index_random = ramdon_list(estilos_text.length, 0)
    return estilos_text[index_random].style
}

const ramdon_list = (max, min) =>{ return Math.floor(Math.random() * (max - min)) + min }

const test = () =>{
    
}