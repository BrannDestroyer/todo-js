import { Todo } from "./todo.class";



export class TodoList {

    constructor () {

        // this.list = [];
        this.cargarLocalStorage();
    
    }

    addTodo (todo) {
        this.list.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo (id) {
        this.list = this.list.filter( todo => todo.id != id )
        this.guardarLocalStorage();
        // for (const todo of this.list) {  ##malo, dado que la unica forma de eliminar elementos
        //     if (todo.id == id) {           especificos de un array es con filter.
        //         this.list.pop(todo);
                
        //         break;
        //     }
        // }
    }

    marcarCompletado (id) {

        for (const todo of this.list) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados () { 

        this.list = this.list.filter( todo => todo.completado === false );
        this.guardarLocalStorage();

    }

    guardarLocalStorage () {

        localStorage.setItem( 'todo', JSON.stringify( this.list ) );
        console.log( this.list );

    }

    cargarLocalStorage () {
        
        this.list = ( localStorage.getItem( 'todo' ) )
        ? JSON.parse( localStorage.getItem( 'todo' ) )
         : [];

        this.list = this.list.map( obj => Todo.fromJson( obj ) )
        
         console.log( this.list );

    }

}

