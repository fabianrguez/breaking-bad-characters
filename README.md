# Breaking Bad Characters excercise

*Aplicación que lista los personajes de Breaking Bad, y muestra información de cada personaje.*

## Demo
https://breaking-bad-characters-seven.vercel.app/characters

## Librerias usadas
* React
* react-router-dom
* Styled-Components
* react-18next (para internacionalización)
* axios (peticiones AJAX)
## Arrancar la aplicación
### Requisitos
* NodeJS
* Fichero .env con la variable de entorno `REACT_APP_API_URL=https://breakingbadapi.com/api` (en este caso está subido al repositorio)

Para arrancar la aplicación en local hay que ejecutar el siguiente:
 `npm run start`

 ## Estructura del proyecto

A continuación se van a listar las carpetas que forman parte del proyecto *(a partir de src)*

### Components
Contiene todo los componentes que se usan dentro de la aplicación.
- Button
- CharacterCard
- CharacterDetail
  - CharacteInfo
  - CharacterQuote
- CharactersList
- Header
- Image
- LanguagePicker
- Layout
- LoadingDots

### Context
Para el contexto se usa el React Context API. Se hace uso de el contexto para controlar la paginación en las llamadas a la API *(para obtener la lista de usuarios /characters)*, y en el caso de necesitar cargar la lista de personajes evitar hacer la llamada a la API y devolver los personajes que ya han sido cargados. También en el caso de necesitar cargar mas personajes seguiría haciéndose la paginación desde el punto en el que se quedó.
- CharactersContext
  - reducer
  - actionType

### Hooks
Contiene los custom hooks creado para usar en la aplicación.
- **useApiCall**: usado para realizar las peticiones al API y tener controlado cuando esta cargando y cuando devuelve error.
- **usePagination**: usado para controlar la paginación.
- **useContextValue**: devuelve la información del contexto que se le pasa por parámetro.
- **useCharactersContext**: devuelve la información para el context de personajes.
- **useCharacter**: devuelve la información del personaje que recibe por parámetro.
- **useCharacterQuote**: devuelve una frase célebre para el personaje que recibe por parámetro y también un método para obtener una nueva frase.
- **useCharacters**: devuelve la lista de personajes, en caso de que exista en el contexto la devuelve, si no hace una petición a la API.

### Locales
Contiene los ficheros para el i18n. En este caso para *Inglés* y *Español*

### Pages
Contiene las páginas usadas en la apliación.
* CharacterDetailPage: muestra la información del personaje
* CharactersPage: muestra la lista de personajes con paginación.
* ContainerPage: usada como contenedor para páginas que tengan rutas hijas.
* ErrorPage: usada para mostrar error si lo hubiera.
* NoMatchPage: usada para cuando una ruta no existe.

### Routes
Contiene la definción del router para toda la apliación.

### Services
Contiene las funciones con las llamadas a los disintos servicios de la API
- getCharacter: llamada al endpoint `/character?author=nombrepersonaje`
- getCharacterDeaths: llamada al endpoint `/deaths?name=nombrepersonaje`
- getCharacterQuote: llamada al endpoint `/quote/random?author=nombrepersonaje``
- getPaginatedCharacters: llamada al endpoint `/characters?limit=10&offset=`

### Utils
Contiene las utilidades compartidas del proyecto
- getCharacterName: para obtener el nombre para las peticiones al API
- mergeArrays

Fuera de la carpeta *src* quedarían los siguientes ficheros:
- App: entrypoint de la apliación
- axiosInstance: para definir todas las propiedades comunes que se van a usar para las peticiones.
- GlobalStyles: components de styled-components para definir los estilos globales.
- i18n: fichero de configuración del i18n.
- theme: fichero usado para definir el tema de styled-components.