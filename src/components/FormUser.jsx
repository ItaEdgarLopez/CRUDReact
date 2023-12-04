import { useState } from "react";


export function FormUser (){
    const [nombre, setNombre] = useState('');
    const [listaNombres, setListaNombres] = useState([]);


    function obersevable (e)
    {
        setNombre(e.target.value);
    }

    function SaveNames(event){
        event.preventDefault()
        setListaNombres([...listaNombres, nombre]);
        console.log('Registrado')
    }

    return(
        <>
            <h2 className="primary">Esto es un formulario</h2>

            <div className="row">
                <div className="col">
                    <h2>Listado</h2>
                </div>

                <div className="col">
                    <h2>Agregando nombres</h2>

                    <form onSubmit={SaveNames} className="form-group">
                        <input 
                        onChange={(e)=> obersevable(e)} 
                        value={nombre}
                        className="form-control mb-3" 
                        type="text" 
                        placeholder="Nombre" 
                        /> 
                        <input className="btn btn-primary" type="submit"  placeholder=""/>
                    </form>
                </div>
            </div>

        </>
    );
}