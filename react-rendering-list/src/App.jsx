import List from "./List.jsx"
import ListObject from "./ListObject.jsx"
import ListObjectSort from "./ListObjectSort.jsx"
import ListObjectFilter from "./ListObjectFilter.jsx"



function App() {


  return (
    <>

      <h1>List</h1>
      <div>
        <h2> List Array</h2>
        <List />
      </div>
      <div>
        <h2>List Object Array</h2>
        <ListObject />
      </div>
      <div>
        <h2>List Object Array with Sort</h2>
        <ListObjectSort />
      </div>
      <div>
        <h2>List Object Array with Filter</h2>
        <ListObjectFilter />
      </div>
    </>
  )
}

export default App
