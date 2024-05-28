import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export const Register = () => {

    const initialValues = {
        name: '',
        email:'',
        password:''
    };

  const handleRegister = async (values) => {
    console.log('valores desde el front', values)
    try {
        const response = await axios.post('http://localhost:5000/auth/register', values);
        console.log(response.data);
    }  catch (error) {
        console.error(error);
    }
  };

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
                            type="text"
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