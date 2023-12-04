import { useState } from "react";


export function FormUser (){
    const [nombre, setNombre] = useState('');
    const [listaNombres, setListaNombres] = useState([]);
    const[modoEdicion, setModoEdicion] = useState(false);
    const [error, setError] = useState(null);
    


    function obersevable (e)
    {
        setNombre(e.target.value);
    }

    function SaveNames(event){
        event.preventDefault()

     if (!nombre.trim()) {
        setError('El campo nombre está vacío');
        return;
}
        setListaNombres([...listaNombres, nombre]);
        setNombre('')
        setError(null)
    }

    const deleteName=(nombre) =>{
        const newArray = listaNombres.filter( name => name !==nombre)
        setListaNombres(newArray)
    }

    const update = (nombreEditar) => {
        setModoEdicion(true)
        setNombre(nombreEditar)
    }

    const editName = (e) => {
        e.preventDefault();
        const newArray = listaNombres.map((name) => (name ? nombre : name));
        setListaNombres(newArray);
        setModoEdicion(false); // Agrega esto para salir del modo de edición después de editar
        setNombre(''); // Agrega esto para limpiar el campo de entrada después de la edición
    }

    return(
        <>
            <h2 className="primary">Esto es un formulario</h2>

            <div className="row">
                <div className="col">
                    <h2>Listado</h2>
                    <ul className="list-group">
                    {
                        listaNombres.map( (nombre, index) => (
                            <li className="list-group-item" key={index}> 
                                {nombre}
                                <button 
                                className="btn btn-primary float-end"
                                onClick={()=> update(nombre)}
                                >Editar</button>
                                <button 
                                className="btn btn-danger float-end"
                                onClick={() =>deleteName(nombre)}
                                >Eliminar</button>

                             </li>
                            
                        ))
                    }
                    </ul>
                </div>

                <div className="col">
                    <h2>Agregando nombres</h2>

                    <form onSubmit={modoEdicion ? editName :  SaveNames} className="form-group">
                        <input 
                        onChange={(e)=> obersevable(e)} 
                        value={nombre}
                        className="form-control mb-3" 
                        type="text" 
                        placeholder="Nombre" 
                        /> 
                        <input 
                        value={modoEdicion ? 'Editar Nombre' : 'Agregar Nombre'}
                        className="btn btn-primary" type="submit"  placeholder=""/>
                    </form>
                    {
                        error !=null ? (
                            
                            <div className="alert alert-danger"> {error} </div>
                        ):
                            (
                                <div></div>
                            )
                    }
                 

                </div>
            </div>

        </>
    );
}