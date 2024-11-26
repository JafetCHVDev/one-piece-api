Cómo Construir una API en React
1. Introducción
Una API (Interfaz de Programación de Aplicaciones) permite que diferentes aplicaciones intercambien información entre sí. En React, se puede construir y consumir una API utilizando bibliotecas o herramientas como json-server para crear APIs simuladas o implementando peticiones HTTP hacia APIs externas.

En este proyecto, hemos utilizado json-server para crear una API mock que nos permite trabajar con datos simulados de One Piece.

2. Proceso para Construir una API en React
Paso 1: Configuración del Proyecto
Inicia un nuevo proyecto de React:
npx create-react-app one-piece-api
cd one-piece-api
Instala json-server: Esta herramienta se utiliza para simular una API local.
npm install json-server
Paso 2: Creación del Archivo de Datos (db.json)
Crea un archivo db.json en la raíz del proyecto.
Define la estructura de tus datos en formato JSON. Por ejemplo:
{
  "characters": [
    {
      "id": 1,
      "name": "Monkey D. Luffy",
      "role": "Captain",
      "devil_fruit": "Gomu Gomu no Mi",
      "image": "URL_a_la_imagen"
    }
  ]
}
Paso 3: Configuración de Scripts en package.json
Agrega un script en package.json para ejecutar json-server en un puerto específico:
"scripts": {
  "start-api": "json-server --watch db.json --port 5000"
}
Paso 4: Consumo de la API en React
Realiza peticiones a la API: Utiliza fetch o bibliotecas como axios para consumir los datos desde la API mock:
useEffect(() => {
  fetch('http://localhost:5000/characters')
    .then(response => response.json())
    .then(data => setCharacters(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);
Renderiza los datos en componentes: Crea componentes como CharacterList y CharacterCard para mostrar la información obtenida.
Paso 5: Estilización (Opcional)
Agrega estilos con CSS o bibliotecas como Bootstrap para mejorar la interfaz visual.
3. Conclusión
Este proyecto demuestra cómo usar json-server para crear una API simulada y cómo consumirla en una aplicación React. Esto es útil para prototipos o pruebas sin depender de una API real.

Referencias:
https://react.dev/
https://github.com/typicode/json-server
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
Imagenes de one piece agarradas de google en una ventana nueva para la creacion de la direccion correcta
