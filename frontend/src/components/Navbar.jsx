import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        {/* <h1>Hi</h1> */}
        <div class="container-fluid">
            <Link class="navbar-brand" to="/home">
                <img src={require('../img/zamoralogo.png')} style={{width: '100px', height: '85px'}} alt="logo"/>
            </Link> 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex justify-content-evenly" style={{width:'100%'}}>
                    <div class="d-flex justify-content-end" style={{width:'100%'}}>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/about-us">Nosotros</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex justify-content-end" style={{width:'100%'}}>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/register">Registrarse</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/login">Ingresar</Link>
                            </li>
                            <button class="btn btn-outline-warning me-2" type="button">PEDIR TURNO</button>
                        </ul>
                    </div>
                {/* <div class="position-absolute top-50 end-0 translate-middle">
                </div> */}
                </div>
            </div>
        </div>
    </nav>
  )
}
