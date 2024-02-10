
import PropTypes from 'prop-types'



function WorkerPropType(props){

    return(
        <div className="worker">
            <p>Name: {props.name}</p>
            <p>Gender: {props.gender}</p>
            <p>Status: {props.isStatus ? "Active" : "Retired"}</p>
        </div>
    );
}

WorkerPropType.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    isStatus: PropTypes.bool
}
export default WorkerPropType