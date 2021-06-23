import { Todo, TodoList } from '../classes';
import { todoList } from '../index.js';
import '../css/componentes.css';

const divTodoList = document.querySelector('.todo-list');
const txtImput    = document.querySelector('.new-todo');
const btnBorrar   = document.querySelector('button');
const filtros   = document.querySelectorAll('.filtro');
const ul   = document.querySelector('.filters');


export const crearTodohtml = ( todo ) => {

    const htmlTodo = 
    `<li class= '${ (todo.completado)? 'completed' : '' }' data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado)? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
    </li>`;

    const div     = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}



//EVENTOS

txtImput.addEventListener('keyup', (event) => {

    if ( event.code == 'Enter' && txtImput.value.length > 0){

        const nuevoTodo = new Todo( txtImput.value ); // Todo (event.target.value) = Todo( txtImput.value )
        todoList.addTodo( nuevoTodo );
        crearTodohtml(nuevoTodo);

        txtImput.value = '';
    }
})

divTodoList.addEventListener('click', ( event ) => {

    const nombreElemento = event.target.localName;
    const todoElemento   = event.target.parentElement.parentElement;
    const id = todoElemento.getAttribute('data-id');

    // console.log(nombreElemento);
    // console.log(todoElemento);
    // console.log(id);

    if (nombreElemento == 'input') {

        todoList.marcarCompletado(id);
        todoElemento.classList.toggle('completed');
    }
    else if (nombreElemento == 'button') {

        todoList.eliminarTodo( id );
        divTodoList.removeChild( todoElemento );
    }

})

btnBorrar.addEventListener( 'click', () => {

    todoList.eliminarCompletados();
    
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {

        const elemento = divTodoList.children[i];
        if ( elemento.classList.contains( 'completed' ) ) {
            divTodoList.removeChild( elemento );
        }
        
    }

} )

ul.addEventListener( 'click', ( event ) => {

    if (!event.target.text) return;

    for (const li of divTodoList.children) {
        console.log(li);
        li.classList.remove('hidden')

        if ( event.target.text === 'Pendientes' ){

            if ( li.className === 'completed' ) {
                li.classList.add('hidden');
            }
        }
        else if ( event.target.text === 'Completados' ){

            if ( li.className != 'completed' ) {
                li.classList.add('hidden');
            }
        }

    }

} )

