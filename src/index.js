import {Todo,TodoList } from './classes';
import { crearTodohtml } from './js/componentes';

import './styles.css';


export const todoList = new TodoList();

todoList.list.forEach( todo => { crearTodohtml( todo ) }); // lo mismo que .forEach( crearTodohtml );