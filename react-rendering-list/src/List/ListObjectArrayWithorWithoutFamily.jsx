import PropTypes from 'prop-types';

function ListObjectArrayWithorWithoutFamily(props){

    const hasFamily = props.tenantFamily.filter(withFamily => withFamily.family === "Yes");
   
    const hasFamilyList = hasFamily.map(isWithFamily => <li 
                                                            key={isWithFamily.id}>
                                                            Name of Tenant: {isWithFamily["name"]}  <br />
                                                            Family: {isWithFamily["family"]}  <br />
                                                            Time Left: {isWithFamily["Time Left"]}  <br />
                                                        </li>);


    const hasNoFamily = props.tenantSingle.filter(withoutFamily => withoutFamily.family === "No");
    const hasNoFamilyList = hasNoFamily.map(isWithoutFamily => <li 
                                                            key={isWithoutFamily.id}>
                                                            Name of Tenant: {isWithoutFamily["name"]}  <br />
                                                            Family: {isWithoutFamily["family"]}  <br />
                                                            Time Left: {isWithoutFamily["Time Left"]}  <br />
                                                        </li>);
    


      return (
        <>
            <div>
                <h3>Tenenats with Family</h3>
                <ol>
                    {hasFamilyList}
                </ol>
            </div>

            <div>
                <h3>Tenenats Single</h3>
                <ol>
                    {hasNoFamilyList}
                </ol>
            </div>
        </>
            
      );

}

ListObjectArrayWithorWithoutFamily.propTypes = {
    tenantFamily : PropTypes.array,
    tenantSingle : PropTypes.array,
    
}

ListObjectArrayWithorWithoutFamily.defaultProps = {
    tenantFamily : <em>Family Tenants are nuisance!</em>,
    tenantSingle : <em>No Single Tenants Yet</em>,
}



export default ListObjectArrayWithorWithoutFamily