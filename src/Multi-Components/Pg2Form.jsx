import React , {useContext} from 'react'
import FormContext from '../Form-ContextAPI/FormContext'

function Pg2Form() {

  const {
    Address,
    setAddress,
    phone,
    setPhone
  } = useContext(FormContext)

  return (
    <>
        <div className="container mt-4">
        <center>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Address
              </label>
              <input
                type="text"
                value={Address}
                onChange={(e)=>setAddress(e.target.value)}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Phone-Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
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

export default Pg2Form