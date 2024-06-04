import { Formik, Form, Field } from 'formik'

export const Login = () => {

    const initialValues = {
        email:'',
        password:''
    };
    
    const handleLogin = async (values) => {
        console.log('valores desde el front', values)
        try {
            const response = await axios.post('http://localhost:5000/auth/login', values);
            console.log(response.data);
        }  catch (error) {
            console.error(error);
        }
      };

  return (
    <>
      <div class="row justify-content-center">
        <div class="col-md-4">
            <h1 class="services_text custom_main">Inicio de sesión</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleLogin}
            >
                <Form>
                    <div class="form-floating">
                        <Field 
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Email"
                            name="email" // esta variable deberia tener el mismo nombre que la variable en initialValues
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
                    <button class="btn btn-primary w-100 py-2" type="submit" onClick={handleLogin}>Iniciar sesión</button>
                </Form>
            </Formik>
        </div>
      </div>
    </>
  )
}
