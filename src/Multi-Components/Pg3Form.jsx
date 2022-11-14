import React , {useContext} from 'react'
import FormContext from '../Form-ContextAPI/FormContext'

function Pg3Form() {

  const {
    Work,
    setWork,
    Education,
    setEducation
  } = useContext(FormContext)

  return (
    <>
          <div className="container mt-4">
        <center>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Work Experience
              </label>
              <input
                type="text"
                value={Work}
                onChange={(e)=>setWork(e.target.value)}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Education
              </label>
              <input
                type="text"
                value={Education}
                onChange={(e)=>setEducation(e.target.value)}
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

export default Pg3Form