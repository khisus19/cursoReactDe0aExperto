import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en el TodoItem component', () => {

  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach( () => jest.clearAllMocks() );
  // Esta línea hace que las funciones sean limpiadas antes de cada prueba para que no queden residuos de otras pruebas


  test('Debe mostrar el Todo pendiente de completar', () => { 
    
    render( 
      <TodoItem 
        todo={ todo }
        onToggleTodo={ onToggleTodoMock }
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

    const liElement = screen.getByRole("listitem");
    expect( liElement.className ).toBe("list-group-item d-flex justify-content-between");

    const spanElement = screen.getByLabelText("span");
    expect( spanElement.className ).toContain("align-self-center");
    expect( spanElement.className ).not.toContain("text-decoration-line-through");

  });


});