import { useState } from "react"


export function Checks ()  {

    const [guardarValor, setGuardarValor] = useState({})

    console.log(guardarValor)
    
    function btnGuardar() {
        console.log('Valor de primero:', guardarValor);
    
        // Enviar el objeto JSON a tu API
        // fetch('tu_url_api', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(guardarValor),
        // })
        //   .then(response => response.json())
        //   .then(data => console.log('Respuesta de la API:', data))
        //   .catch(error => console.error('Error al enviar a la API:', error));
    }
    const mostrarImagen = guardarValor.TareasCompletadas && guardarValor.MayorEdad;
    
    //actulizaciones en el checbox
      const handleCheckboxChange = (TipoTarea) => {
        setGuardarValor((prevValues) => (
          {
          ...prevValues,
          [TipoTarea]: !prevValues[TipoTarea], // Invierte el valor actual del checkbox
        }
        ));
      };

     

    return(
        <>
            <h1 className="text-primary text-center">Checks</h1>

            <div className="row">
        <div className="col">
          <h2>Tienes tareas pendientes : </h2>
          <div className="form-check">

            <input
              className="form-check-input"
              type="checkbox"
              value="data1"
              onChange={() => handleCheckboxChange('TareasCompletadas')}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Tareas finalizadas
            </label>
        
          </div>

          <div className="form-check">

            <input
              className="form-check-input"
              type="checkbox"
              value="data2"
              onChange={() => handleCheckboxChange('MayorEdad')}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Eres Mayor edad
            </label>

          </div>
        </div>
            <button className="btn btn-primary" 
              disabled = {!mostrarImagen}
            onClick={btnGuardar}>
            Enviar
         </button>

        <div className="col">
        
                    {
              mostrarImagen ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7487/7487155.png"
                  alt="Imagen Mostrada cuando ambos checkboxes están marcados"
                />
              ) : (<h2>Esperando imagen...</h2>)
            }

          

        </div>

        
        </div>
        </>
    )
}