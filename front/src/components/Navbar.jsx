import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        {/* <h1>Hi</h1> */}
        <div className='d-flex' style={{margin: 'auto', width: '100%'}}>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex justify-content-evenly" style={{width:'100%'}}>
                    <Link className="navbar-brand" style={{marginLeft: '10px', marginRight: 'auto', marginBottom: '-8px', marginTop: '-8px', width: '100%'}} to="/home">
                        <img src={require('../img/zamoralogo.png')} style={{width: '90px', height: '85px'}} alt="logo"/>
                    </Link> 
                    <div className="d-flex justify-content-center" style={{margin: 'auto', width:'100%'}}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/the-funny">Comedia (real)</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-end" style={{margin: 'auto', width:'100%'}}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Registrarse</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Ingresar</Link>
                            </li>
                            <button className="btn btn-outline-warning me-2" type="button">PEDIR TURNO</button>
                        </ul>
                    </div>
                {/* <div className="position-absolute top-50 end-0 translate-middle">
                </div> */}
                </div>
            </div>
        </div>
    </nav>
  )
}
