import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


export const Login = () => {

    const navigate = useNavigate();

    const initialValues = {
        email:'',
        password:''
    };

    const { setUser } = useContext(UserContext);
    
    const handleLogin = async (values) => {
        // console.log('valores desde el front', values)
        try {
            const response = await axios.post('http://localhost:5000/auth/login', values);
            console.log(response.data);

            
            const {role} = response.data // variable q proviene del back
            console.log('role', role)

            Swal.fire({
                icon: 'success',
                title: 'Logueo exitoso',
                showConfirmButton: false,
                timer: 1800
            });
            setUser({
                logged:true,
                role: role,
            });
            navigate('/panel');
        }  catch (error) {
            console.error(error);
            console.log('estoy en el catch')
            Swal.fire({
                icon: 'error',
                title: 'Error al autenticarse',
                showConfirmButton: false,
                timer: 1800
            })
        }
      };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
            <h1 className="services_text custom_main">Inicio de sesión</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleLogin}
            >
                <Form>
                    <div className="form-floating">
                        <Field 
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Email"
                            name="email" // esta variable deberia tener el mismo nombre que la variable en initialValues
                        />
                        <label htmlFor="floatingInput">Correo</label>
                    </div>
                    <div className="form-floating">
                        <Field 
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleLogin}>Iniciar sesión</button>
                </Form>
            </Formik>
        </div>
      </div>
    </>
  )
}
