import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export const Register = () => {

    const initialValues = {
        name: '',
        email:'',
        password:''
    };
// handleBlaBla es un standar, es la funcion q ocurre cuando el usuario le da al boton de enviar datos
    const handleRegister = async (values) => {
        console.log('valores desde el front', values)
        try {
        // metodos http incluye: POST, pero hay mas
        // POST sirve para enviar datos al otro lado, con un get para traer informacion del otro lado
        // values = lo que recolectó el formulario, es lo q se va a enviar al backend
            const response = await axios.post('http://localhost:5000/auth/register', values);
            console.log(response.data);
        }  catch (error) {
            console.error(error);
        }
    };
// return está abajo, la logica arriba, esto siempre, el return solo mostrará codigo html
  return (
    <>
      <div class="row justify-content-center">
        <div class="col-md-4">
            <h1 class="services_text custom_main">Registro</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleRegister}
            >
                <Form>
                    <div class="form-floating">
                        <Field 
                            type="text"
                            class="form-control"
                            id="floatingName"
                            placeholder="Name"
                            name="name"
                        />
                        <label htmlFor="floatingName">Nombre</label>
                    </div>
                    <div class="form-floating">
                        <Field 
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Email"
                            name="email"
                        />
                        <label htmlFor="floatingInput">Correo</label>
                    </div>
                    <div class="form-floating">
                        <Field 
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <button class="btn btn-primary w-100 py-2" type="submit" onClick={handleRegister}>Registrarse</button>
                </Form>
            </Formik>
        </div>
      </div>
    </>
  )
}