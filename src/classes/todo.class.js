
export class Todo {

    static fromJson({ id, tarea, completado, date }) {

        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.date       = date;

        return tempTodo;
    }

    constructor ( tarea ){
        
        this.tarea = tarea;

        this.id   = new Date().getTime(); //12312312313
        this.completado = false;
        this.date = new Date();

    }

    imprimirClase() {

        console.log( `${this.tarea} - ${this.id}` );

    }

}

