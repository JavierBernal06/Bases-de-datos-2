var salida= "";
 
const apellidosMexico = [
    "Villanueva", "Quiroz", "Palacios", "Zavala", "Aguirre", "Castañeda", "Valenzuela", "Salas", "Paredes", "Salgado",
    "Leyva", "Escobar", "Rendón", "Montes", "Cano", "Córdova", "Rosas", "Pacheco", "Navarrete", "Cisneros",
    "Guerra", "Mora", "Peña", "Cárdenas", "Villarreal", "Barrera", "Peralta", "Arroyo", "Bernal", "Soto",
    "Higuera", "Ochoa", "Valdez", "Zúñiga", "Ceballos", "Gallardo", "Olvera", "Mata", "Barajas", "Falcón",
    "Govea", "Sosa", "Rico", "Zendejas", "Lira", "Carranza", "Uribe", "Becerra", "Toscano", "Verdugo",
    "Santamaría", "Montoya", "Del Río", "Figueroa", "Bravo", "Leal", "Treviño", "Vela", "Munguía", "Corona",
    "Ocampo", "Rentería", "Arriaga", "Ponce", "Briones", "Chavarría", "Viedma", "Solís", "Rosales", "Enríquez",
    "Magaña", "Barrios", "Tovar", "Bustamante", "Quezada", "Aranda", "Granados", "Galván", "Tapia", "Villar",
    "Montaño", "Téllez", "Gamboa", "Saucedo", "Reséndiz", "Madrigal", "Arévalo", "Coria", "Ugalde", "Vergara",
    "Bañuelos", "Jaimes", "Calvillo", "Cabrero", "Soria", "Velasco", "Manzano", "Alcántar", "Posadas", "Murillo"
];

const apellidosItalianos = [ 
    "NULL", "Rossi", "Ferrari", "Esposito", "Bianchi", "Romano", "Colombo", "Ricci", "Marino", "Greco",
    "Bruno", "Gallo", "Conti", "De Luca", "Mancini", "Costa", "Giordano", "Rizzo", "Lombardi", "Moretti",
    "Barbieri", "Fontana", "Santoro", "Mariani", "Rinaldi", "Caruso", "Ferrara", "Galli", "Martini", "Leone",
    "Longo", "Gentile", "Martinelli", "Vitale", "Lombardo", "Serra", "Coppola", "De Santis", "D'Angelo", "Marchetti",
    "Parisi", "Villa", "Conte", "Ferraro", "Ferri", "Fabbri", "Bianco", "Marra", "Pagano", "Sorrentino",
    "Farina", "Donati", "Pellegrini", "Carbone", "Benedetti", "Silvestri", "Mazza", "Piras", "Sanna", "Grassi",
    "Russo", "D'Amico", "Amato", "Bellini", "Basile", "Riva", "Donati", "Vicini", "Basso", "Puccini",
    "Guerra", "Festa", "Mura", "Palumbo", "Sanna", "Valenti", "Neri", "Sala", "Tosi", "Vitali",
    "Baresi", "Maldini", "Zoff", "Pirlo", "Baggio", "Totti", "Del Piero", "Buffon", "Nesta", "Cannavaro",
    "Chiellini", "Bonucci", "Verratti", "Insigne", "Zola", "Vieri", "Riva", "Mazzola", "Facchetti", "Scirea"
];

const nombresMexicanos = [ 
    "Sebastian", "Ximena", "Iker", "Regina", "Mateo", "Camila", "Leonardo", "Valentina", "Nicolas", "Renata",
    "Emiliano", "Victoria", "Dante", "Natalia", "Mauricio", "Fernanda", "Gabriel", "Luciana", "Julian", "Daniela",
    "Rodrigo", "Mariana", "Samuel", "Andrea", "Fabian", "Elena", "Elias", "Paola", "Adrian", "Sofia",
    "Humberto", "Gloria", "Salvador", "Estela", "Benito", "Alicia", "Rogelio", "Berta", "Arnulfo", "Dolores",
    "Hipolito", "Luz", "Filemon", "Imelda", "Primitivo", "Petra", "Tiburcio", "Socorro", "Zenon", "Pura",
    "Joaquín", "Mireya", "Agustín", "Xóchitl", "Leobardo", "Yolanda", "Eusebio", "Fabiola", "Guadalupe", "Ofelia",
    "Rodolfo", "Leticia", "Genaro", "Blanca", "Amado", "Beatriz", "Faustino", "Consuelo", "Crispín", "Raquel",
    "Silvestre", "Adela", "Pascual", "Graciela", "Dionisio", "Rosario", "Efraín", "Margarita", "Aurelio", "Silvia",
    "Bonifacio", "Teresa", "Cornelio", "Guillermina", "Donato", "Josefina", "Eleuterio", "Antonia", "Fidencio", "Amalia",
    "Heriberto", "Virginia", "Modesto", "Lidia", "Casimiro", "Eulalia", "Toribio", "Rufina", "Anacleto", "Trinidad"
];

const nombresJaponeses = [ 
    "Hiroshi", "Takumi", "Kenji", "Akira", "Yuki", "Haruto", "Sota", "Ren", "Itsuki", "Sho",
    "Sakura", "Hana", "Aoi", "Yui", "Mei", "Hinata", "Rio", "Anzu", "Koharu", "Mio",
    "Kaito", "Daiki", "Tsubasa", "Riku", "Sora", "Hayate", "Kota", "Yuto", "Arata", "Ryusei",
    "Natsumi", "Ayaka", "Misaki", "Nanami", "Rina", "Miyu", "Emi", "Kanon", "Hina", "Saki",
    "Takeshi", "Kazuo", "Shinji", "Tadashi", "Yoshio", "Mitsuo", "Katsumi", "Isao", "Masao", "Toshiro",
    "Keiko", "Yumiko", "Tomoko", "Sachiko", "Hiroko", "Atsuko", "Miyuki", "Yoshiko", "Naoko", "Michiko",
    "Ryota", "Shun", "Taiga", "Kyosuke", "Haru", "Kosei", "Takeru", "Satoshi", "Kenta", "Yusei",
    "Akane", "Hikari", "Nozomi", "Asuka", "Shiori", "Kyoko", "Mika", "Suzu", "Ayame", "Kohana",
    "Ryu", "Ken", "Chun-Li", "Gen", "Guy", "Sodom", "Adon", "Birdie", "Eagle", "Geki",
    "Ibuki", "Makoto", "Elena", "Yun", "Yang", "Oro", "Necro", "Remy", "Q", "Twelve"
];
function generar() {
    var opcion = document.getElementById("opcion").value;
 
    switch (opcion) {
        case "1": generarSQL(); break;
        case "2": generarSQL(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
 
    }
 
 
}
 
function generarSQL() {
     salida = "INSERT INTO alumnos VALUES ";
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nombreFrances = "";
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoItal = apellidosItalianos[Math.floor(Math.random() * apellidosItalianos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;
        if (apellidoItal === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `UPPER('${apellidoItal}')`;
        }
        nombre = "";
        nombreJapones = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreJapones = nombresJaponeses[Math.floor(Math.random() * nombresJaponeses.length)];
            nombre += ` ${nombreJapones}`;
        }
        salida += `(${matricula + i},UPPER('${apellidoMex}'), ${segundoApellido}, '${nombre}','a${matricula + i}@unison.mx'),
 
`;
    }
    salida = salida.slice(0, -4) + ";";
    document.getElementById("salida").innerHTML = salida;
}
function generarSQLpostgresql() {
 
}
function generarSQLCSV() {
    salida = "matricula, apellido1, apellido2, nombre, correo\n";
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nombreJapones = "";
    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoItal = apellidosItalianos[Math.floor(Math.random() * apellidosItalianos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;
        if (apellidoItal === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${apellidoItal}`;
        }
        nombre = "";
        nombreJapones = "";
        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreJapones = nombresJaponeses[Math.floor(Math.random() * nombresJaponeses.length)];
            nombre += ` ${nombreJapones}`;
        }
        salida += `${matricula + i},${apellidoMex},${segundoApellido},${nombre},a${matricula + i}@unison.mx\n`;
    }
    // salida = salida.slice(0, 0);
    document.getElementById("salida").innerHTML = salida;
}
function generarJSON() {
    salida = "[\n"; 
    var matricula = 224250000;
    var registros = document.getElementById('registros').value;

    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoItal = apellidosItalianos[Math.floor(Math.random() * apellidosItalianos.length)];
        let nombreMex = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        
        let nombreCompleto = nombreMex;
        if (Math.random() < 0.5) {
            let nombreJapones = nombresJaponeses[Math.floor(Math.random() * nombresJaponeses.length)];
            nombreCompleto += ` ${nombreJapones}`;
        }

        salida += `  {\n`;
        salida += `    "matricula": ${matricula + i},\n`;
        salida += `    "apellido1": "${apellidoMex}",\n`;
        salida += `    "apellido2": "${apellidoItal}",\n`;
        salida += `    "nombre": "${nombreCompleto}",\n`;
        salida += `    "correojson": "a${matricula + i}@unison.mx"\n`;
        
        salida += (i < registros - 1) ? `  },\n` : `  }\n`;
    }

    salida += "]";
    
    document.getElementById('salida').innerHTML = salida.replace(/\n/g, "<br>");
    
    return salida; 
}
function guardarArchivo() {
   
    let contenidoLimpio = salida.split('<br>').join('\n');
    
    
    var blob = new Blob([contenidoLimpio], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    
    var var1 = document.createElement("a");
    var1.setAttribute("href", url);

    var opcion = document.getElementById("opcion").value;

    switch (opcion) {
        case "1": 
            var1.setAttribute("download", "sistema_escolar.sql"); 
            alert("Generando archivo SQL"); 
            break;
        case "2": 
            var1.setAttribute("download", "sistema_escolar.sql"); 
            alert("Generando archivo Postgres"); 
            break;
        case "3": 
            var1.setAttribute("download", "sistema_escolar.csv"); 
            alert("Generando archivo CSV"); 
            break;
        case "4": 
            var1.setAttribute("download", "sistema_escolar.json"); 
            alert("Generando archivo JSON"); 
            break;
    }

    var1.style.display = "none";
    document.body.appendChild(var1);
    var1.click();
    
    document.body.removeChild(var1);
    setTimeout(() => URL.revokeObjectURL(url), 100);
}