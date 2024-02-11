import PropTypes from 'prop-types';
import ListObjectArrayWithorWithoutFamily from './ListObjectArrayWithorWithoutFamily';

function ListObjectPropsGenerator(props){

    const theTenants = props.allTenants;

    const eachTenants = theTenants.map(tenant => <li 
                                                key={tenant.id}>
                                                   Name of Tenant: {tenant["name"]}  <br />
                                                   Family: {tenant["family"]}  <br />
                                                   Time Left: {tenant["Time Left"]}  <br />
                                              </li>);  
    return (
        <>
            <ol>
                {eachTenants}
            </ol>
            <ListObjectArrayWithorWithoutFamily tenantFamily = {theTenants} tenantSingle = {theTenants} /> 
        </>
    )
}

ListObjectPropsGenerator.propTypes = {
    allTenants : PropTypes.array,
}



export default ListObjectPropsGenerator