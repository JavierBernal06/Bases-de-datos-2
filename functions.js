var contenidoGenerado= "";
 
const apellidosPaternos = [
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

const apellidosMaternos = [ 
    "NULL", "Rossi", "Ferrari", "Esposito", "Bianchi", "Romano", "Colombo", "Ricci", "Marino", "Greco",
    "Bruno", "Gallo", "Conti", "De Luca", "Mancini", "Costa", "Giordano", "Rizzo", "Lombardi", "Moretti",
    "Barbieri", "Fontana", "Santoro", "Mariani", "Rinaldi", "Caruso", "Ferrara", "Galli", "Martini", "Leone",
    "Longo", "Gentile", "Martinelli", "Vitale", "Lombardo", "Serra", "Coppola", "De Santis", "D Angelo", "Marchetti",
    "Parisi", "Villa", "Conte", "Ferraro", "Ferri", "Fabbri", "Bianco", "Marra", "Pagano", "Sorrentino",
    "Farina", "Donati", "Pellegrini", "Carbone", "Benedetti", "Silvestri", "Mazza", "Piras", "Sanna", "Grassi",
    "Russo", "D Amico", "Amato", "Bellini", "Basile", "Riva", "Donati", "Vicini", "Basso", "Puccini",
    "Guerra", "Festa", "Mura", "Palumbo", "Sanna", "Valenti", "Neri", "Sala", "Tosi", "Vitali",
    "Baresi", "Maldini", "Zoff", "Pirlo", "Baggio", "Totti", "Del Piero", "Buffon", "Nesta", "Cannavaro",
    "Chiellini", "Bonucci", "Verratti", "Insigne", "Zola", "Vieri", "Riva", "Mazzola", "Facchetti", "Scirea"
];

const nombresPrimarios = [ 
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

const sexos = ["MUJER", "HOMBRE", "NO BINARIO"];

const nombresSecundarios = [ 
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
    var opcionSeleccionada = document.getElementById("opcion").value;

    switch (opcionSeleccionada) {
        case "1": generarSQL(); break;
        case "2": generarSQLpostgresql(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
    }
}

function generarSQL() {
    contenidoGenerado  = "DROP DATABASE IF EXISTS sistema_escolar;\n";
    contenidoGenerado += "CREATE DATABASE IF NOT EXISTS sistema_escolar;\n";
    contenidoGenerado += "USE sistema_escolar;\n\n";
    contenidoGenerado += "DROP TABLE IF EXISTS alumnos;\n";
    contenidoGenerado += "CREATE TABLE IF NOT EXISTS alumnos (\n";
    contenidoGenerado += "    expediente BIGINT NOT NULL UNIQUE CHECK (LENGTH(expediente)=9 AND expediente > 0),\n";
    contenidoGenerado += "    app1 VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(app1))>0),\n";
    contenidoGenerado += "    app2 VARCHAR(255) CHECK(app2 IS NULL OR LENGTH(TRIM(app2))>0),\n";
    contenidoGenerado += "    nombres VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(nombres))>0),\n";
    contenidoGenerado += "    correo VARCHAR(255) NOT NULL UNIQUE,\n";
    contenidoGenerado += "    fecha_nacimiento DATE NOT NULL,\n";
    contenidoGenerado += "    sexo ENUM('MUJER','HOMBRE','NO BINARIO') NOT NULL,\n";
    contenidoGenerado += "    CONSTRAINT chk_correo_formato CHECK(correo=CONCAT(\"a\",expediente,\"@unison.mx\"))\n";
    contenidoGenerado += ");\n\n";
    contenidoGenerado += "INSERT INTO alumnos VALUES ";
    var numeroMatricula = 224250000;
    var nombreCompleto = "";
    var cantidadRegistros = 0;
    cantidadRegistros = document.getElementById('registros').value;
    var nombreSecundario = "";

    for (let i = 0; i < cantidadRegistros; i++) {
        let apellidoPaterno = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellidoMaterno = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);

        let segundoApellido;
        if (apellidoMaterno === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `UPPER('${apellidoMaterno}')`;
        }

        nombreCompleto = nombresPrimarios[Math.floor(Math.random() * nombresPrimarios.length)];
        if (tieneSegundoNombre) {
            nombreSecundario = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombreSecundario}`;
        }

        // Fecha de nacimiento aleatoria entre 2000 y 2007
        let anio = 2000 + Math.floor(Math.random() * 8);
        let mes = String(1 + Math.floor(Math.random() * 12)).padStart(2, '0');
        let dia = String(1 + Math.floor(Math.random() * 28)).padStart(2, '0');
        let fechaNacimiento = `${anio}-${mes}-${dia}`;

        let sexo = sexos[Math.floor(Math.random() * sexos.length)];

        contenidoGenerado += `(${numeroMatricula + i},UPPER('${apellidoPaterno}'), ${segundoApellido}, '${nombreCompleto}','a${numeroMatricula + i}@unison.mx','${fechaNacimiento}','${sexo}'),\n`;
    }

    contenidoGenerado = contenidoGenerado.slice(0, -2) + ";";
    document.getElementById("salida").innerHTML = contenidoGenerado;
}

function generarSQLpostgresql() {
    contenidoGenerado  = "DROP TABLE IF EXISTS alumnos;\n\n";
    contenidoGenerado += "CREATE TABLE IF NOT EXISTS alumnos (\n";
    contenidoGenerado += "    expediente BIGINT NOT NULL UNIQUE CHECK (LENGTH(expediente::TEXT)=9 AND expediente > 0),\n";
    contenidoGenerado += "    app1 VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(app1))>0),\n";
    contenidoGenerado += "    app2 VARCHAR(255) CHECK(app2 IS NULL OR LENGTH(TRIM(app2))>0),\n";
    contenidoGenerado += "    nombres VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(nombres))>0),\n";
    contenidoGenerado += "    correo VARCHAR(255) NOT NULL UNIQUE,\n";
    contenidoGenerado += "    fecha_nacimiento DATE NOT NULL,\n";
    contenidoGenerado += "    sexo VARCHAR(20) NOT NULL CHECK(sexo IN ('MUJER','HOMBRE','NO BINARIO')),\n";
    contenidoGenerado += "    CONSTRAINT chk_correo_formato CHECK(correo = 'a' || expediente::TEXT || '@unison.mx')\n";
    contenidoGenerado += ");\n\n";
    contenidoGenerado += "INSERT INTO alumnos VALUES ";
    var numeroMatricula = 224250000;
    var nombreCompleto = "";
    var cantidadRegistros = document.getElementById('registros').value;
    var nombreSecundario = "";

    for (let i = 0; i < cantidadRegistros; i++) {
        let apellidoPaterno = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellidoMaterno = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;

        let segundoApellido;
        if (apellidoMaterno === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `UPPER('${apellidoMaterno}')`;
        }

        nombreCompleto = nombresPrimarios[Math.floor(Math.random() * nombresPrimarios.length)];
        if (tieneSegundoNombre) {
            nombreSecundario = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombreSecundario}`;
        }

        let anio = 2000 + Math.floor(Math.random() * 8);
        let mes = String(1 + Math.floor(Math.random() * 12)).padStart(2, '0');
        let dia = String(1 + Math.floor(Math.random() * 28)).padStart(2, '0');
        let fechaNacimiento = `${anio}-${mes}-${dia}`;

        let sexo = sexos[Math.floor(Math.random() * sexos.length)];

        contenidoGenerado += `(${numeroMatricula + i},UPPER('${apellidoPaterno}'), ${segundoApellido}, '${nombreCompleto}','a${numeroMatricula + i}@unison.mx','${fechaNacimiento}','${sexo}'),\n`;
    }

    contenidoGenerado = contenidoGenerado.slice(0, -2) + ";";
    document.getElementById("salida").innerHTML = contenidoGenerado;
}
function generarSQLCSV() {
    contenidoGenerado = "matricula, apellido1, apellido2, nombre, correo\n";
    var numeroMatricula = 224250000;
    var nombreCompleto = "";
    var cantidadRegistros = 0;
    cantidadRegistros = document.getElementById('registros').value;
    var nombreSecundario = "";

    for (let i = 0; i < cantidadRegistros; i++) {
        let apellidoPaterno = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellidoMaterno = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);

        let segundoApellido;
        if (apellidoMaterno === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${apellidoMaterno}`;
        }

        nombreCompleto = nombresPrimarios[Math.floor(Math.random() * nombresPrimarios.length)];
        if (tieneSegundoNombre) {
            nombreSecundario = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombreSecundario}`;
        }

        contenidoGenerado += `${numeroMatricula + i},${apellidoPaterno},${segundoApellido},${nombreCompleto},a${numeroMatricula + i}@unison.mx\n`;
    }

    document.getElementById("salida").innerHTML = contenidoGenerado;
}

function generarJSON() {
    contenidoGenerado = "[\n";
    var numeroMatricula = 224250000;
    var cantidadRegistros = document.getElementById('registros').value;

    for (let i = 0; i < cantidadRegistros; i++) {
        let apellidoPaterno = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellidoMaterno = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        let nombrePrimario = nombresPrimarios[Math.floor(Math.random() * nombresPrimarios.length)];

        let nombreCompleto = nombrePrimario;
        if (Math.random() < 0.5) {
            let nombreSecundario = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombreSecundario}`;
        }

        contenidoGenerado += `  {\n`;
        contenidoGenerado += `    "matricula": ${numeroMatricula + i},\n`;
        contenidoGenerado += `    "apellido1": "${apellidoPaterno}",\n`;
        contenidoGenerado += `    "apellido2": "${apellidoMaterno}",\n`;
        contenidoGenerado += `    "nombre": "${nombreCompleto}",\n`;
        contenidoGenerado += `    "correojson": "a${numeroMatricula + i}@unison.mx"\n`;

        contenidoGenerado += (i < cantidadRegistros - 1) ? `  },\n` : `  }\n`;
    }

    contenidoGenerado += "]";

    document.getElementById('salida').innerHTML = contenidoGenerado.replace(/\n/g, "<br>");

    return contenidoGenerado;
}

function guardarArchivo() {
    let contenidoLimpio = contenidoGenerado.split('<br>').join('\n');

    var archivoBlob = new Blob([contenidoLimpio], { type: "text/plain;charset=utf-8" });
    var urlArchivo = URL.createObjectURL(archivoBlob);

    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.setAttribute("href", urlArchivo);

    var opcionSeleccionada = document.getElementById("opcion").value;

    switch (opcionSeleccionada) {
        case "1":
            enlaceDescarga.setAttribute("download", "sistema_escolar.sql");
            alert("Generando archivo SQL");
            break;
        case "2":
            guardarArchivoPostgres();
            return;
        case "3":
            enlaceDescarga.setAttribute("download", "sistema_escolar.csv");
            alert("Generando archivo CSV");
            break;
        case "4":
            enlaceDescarga.setAttribute("download", "sistema_escolar.json");
            alert("Generando archivo JSON");
            break;
    }

    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();

    document.body.removeChild(enlaceDescarga);
    setTimeout(() => URL.revokeObjectURL(urlArchivo), 100);
}

function guardarArchivoPostgres() {
    // Normalizar el contenido: eliminar caracteres no válidos en UTF-8
    let contenidoLimpio = contenidoGenerado
        .split('<br>').join('\n')
        .replace(/\u00a0/g, ' ')   // reemplaza non-breaking space por espacio normal
        .normalize('NFC');          // normaliza caracteres Unicode a forma compuesta

    var archivoBlob = new Blob([contenidoLimpio], { type: "text/plain;charset=utf-8" });
    var urlArchivo = URL.createObjectURL(archivoBlob);

    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.setAttribute("href", urlArchivo);
    enlaceDescarga.setAttribute("download", "sistema_escolar_postgres.sql");

    alert("Generando archivo SQL PostgreSQL");

    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();

    document.body.removeChild(enlaceDescarga);
    setTimeout(() => URL.revokeObjectURL(urlArchivo), 100);
}