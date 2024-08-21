import { createContext } from 'react'
// todos los componentes acceden de una a las variables como si fueran globales, para no tener que hacerlo uno por uno (ej. dark mode)
export const UserContext = createContext();
