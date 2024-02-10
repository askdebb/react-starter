
import Student from './Student.jsx'
import WorkerPropType  from './WorkerPropType.jsx'
import CustomerDefaultProps  from './CustomerDefaultProps.jsx'

function App() {
 
  return (
    <>
      <div>
        <Student name="Chris"  age={30}  isStudent={false} />
        <Student name="Innocent"  age={20}  isStudent={true} />
      </div>

      <div>
        <WorkerPropType name="Enoch" gender="Male" isStatus={true}/>
        <WorkerPropType name="Samira" gender="Female" isStatus={false}/>
      </div>

      <div>
          <CustomerDefaultProps  name="Eshun" country="Ghana" isCustomer = {false} isDeliveryMethod={true}/>
          <CustomerDefaultProps  name="Ajoke" country="Nigeria" isCustomer = {false} isDeliveryMethod={false}/>
          <CustomerDefaultProps />
      </div>
      
     
    </>
  )
}

export default App
