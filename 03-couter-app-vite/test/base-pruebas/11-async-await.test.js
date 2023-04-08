import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Pruebas en 11-async-await.js', () => { 
    
    test('Debe retornar un url de giphy', async () => { 
        
        const resp = await getImagen();
        // console.log(url)
        expect( resp.startsWith("https:") ).toBeTruthy();

    })

    // test('Debe retornar un error si no tenemos un api key', async () => { 
        
    //     const resp = await getImagen();
    //     // console.log(url)
    //     expect( resp ).toBe("No se encontro la imagen");

    // })
})



