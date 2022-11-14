import {useState , createContext} from 'react'

const FormContext = createContext()

export const FormProvider = ({children}) =>{
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [Address , setAddress] = useState('')
    const [phone , setPhone] = useState('')
    const [Work , setWork] = useState('')
    const [Education , setEducation] = useState('');

    return(
        <FormContext.Provider
            value={{
                email,
                password,
                Address,
                phone,
                Work,
                Education,
                setEmail,
                setPassword,
                setAddress,
                setPhone,
                setWork,
                setEducation

            }}
        >
            {children}
        </FormContext.Provider>

    )
}

export default FormContext