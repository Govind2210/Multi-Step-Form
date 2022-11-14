import React , {useContext} from 'react'
import FormContext from '../Form-ContextAPI/FormContext'

function Pg1Form() {

  const {
    email,
    setEmail,
    password,
    setPassword
  } = useContext(FormContext)
  return (
    <>
        <div className="container mt-4">
        <center>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
  
          </form>
        </center>
      </div>
    </>
  )
}

export default Pg1Form