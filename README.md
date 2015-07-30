#COMPONENTS
* los componente son el corazón de reactjs -> ESTAN EN TODOS LADOS (se aplica acada componente html con el css con el js como se ve como se comporta).
* se conocen también declarative components -> da la pauta de como se usa y como tiene que operar (ES EL QUE Y NO EL COMO).
* Cada component se encarga de una sola cosa (single responsability).

#JSX
* Mescla html con js en una sintaxis

#Usando ecs6

class HelloWorld extends React.Component {
	render() {
		return <div className = 'message'> Hello world! </div>
	}
}

#Virtual DOM
* se guarda un arbol de objectos del DOM, queda en memoria (mas rápido acceso).
* Cuando uno de los componentes llama a setState react lo que hace es marcarlo "dirty".
* Itera y se fija cuales componentes estan "dirty" y compara los que estan en el DOM.
* Si hay cambios re dibuja (rendered).

#PROPS
* son propiedades parametrizables para pasar valores al render