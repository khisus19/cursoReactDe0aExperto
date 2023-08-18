import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => { 

  test('Debe retornar los valores por defecto', () => { 

    const { result } = renderHook( () => useCounter() );
    const { counter, decrement, increment, resetCount } = result.current;
    
    expect( counter ).toBe(1);
    expect( decrement ).toEqual( expect.any( Function ) );
    expect( increment ).toEqual( expect.any( Function ) );
    expect( resetCount ).toEqual( expect.any( Function ) );
    
  });
  
  test('Debe generar el counter con el valor 100', () => { 
    
    const { result } = renderHook( () => useCounter(100) );

    expect( result.current.counter ).toBe(100);
  })
  
  test('Debe incrementar el contador', () => { 
    const { result } = renderHook( () => useCounter() );
    const { increment } = result.current;
  
    act(() => {
      increment();
      increment(2);
    });

    expect( result.current.counter ).toBe(4);
  });
  
  test('Debe decrementar el contador', () => { 
    const { result } = renderHook( () => useCounter(5) );
    const { decrement } = result.current;
  
    act(() => {
      decrement();
      decrement(2);
    });

    expect( result.current.counter ).toBe(2);
  });

  test('Debe resetear el contador', () => { 
    const { result } = renderHook( () => useCounter() );
    const { increment, resetCount } = result.current;
  
    act(() => {
      increment(5);
      resetCount();
    });

    expect( result.current.counter ).toBe(1);
  });


});
