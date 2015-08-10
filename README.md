#REACT.JS

#### COMPONENTS
* los componente son el corazón de reactjs -> ESTAN EN TODOS LADOS (se aplica acada componente html con el css con el js como se ve como se comporta).
* se conocen también declarative components -> da la pauta de como se usa y como tiene que operar (ES EL QUE Y NO EL COMO).
* Cada component se encarga de una sola cosa (single responsability).

#### SX
* Mescla html con js en una sintaxis

#### Virtual DOM
* se guarda un arbol de objectos del DOM, queda en memoria (mas rápido acceso).
* Cuando uno de los componentes llama a setState react lo que hace es marcarlo "dirty".
* Itera y se fija cuales componentes estan "dirty" y compara los que estan en el DOM.
* Si hay cambios re dibuja (rendered).

#### PROPS
* son propiedades parametrizables para pasar valores al render
* Nunca colocar datos calculados, ni duplicados, ni otros componentes.

#### MODULOS
* Juntarlos con browserify para generar un solo javascript

#### BROWSERIFY ENTRY POINT 
* En script  "build": "browserify app/index.js > app/js/app.js -t babelify"
* > npm run build

# Usando ecs6
```javascript 
class HelloWorld extends React.Component {
	render() {
		return <div className = 'message'> Hello world! </div>
	}
}
```
#### CICLO DE VIDA DE REACTJS
* Mounting ->  se monta en el dom
```javascript 
componentWillMount()
componentDidMount()
```
* Updating -> se actualiza el componente
```javascript 
componentWillRecieveProps(nextProps)
shouldComponentUpdate(nextProps, nextState) 
componentWillUpdate(nextPorps, nextState)
componentDidUpdate(nextPorps, nextState)
```
* Unmounting -> se quita el componente del dom
```javascript 
componentWillUnmount(nextProps)
compone
```

#### MIXINS

#### Changing _props_ and _state_

- | _props_ | _state_ | 
--- | --- | --- 
Can get initial value from parent Component? | Yes | Yes
Can be changed by parent Component? | Yes | No
Can set default values inside Component?* | Yes | Yes
Can change inside Component? | No | Yes
Can set initial value for child Components? | Yes | Yes
Can change in child Components? | Yes | No

\* Note that both _props_ and _state_ initial values received from parents override default values defined inside a Component.
