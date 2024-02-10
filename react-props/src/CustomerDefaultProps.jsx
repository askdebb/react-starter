
import PropTypes from 'prop-types'

function CustomerDefaultProps(props){

    return(
        <div className="customer">
                <p>Name: {props.name}</p>
                <p>Country: {props.country}</p>
                <p>Customer Status: {props.isCustomer ? "Regular" : " New"}</p>
                <p>Delivery Method: {props.isDeliveryMethod ? "Pick up" : "Delivery"}</p>
        </div>
    );
}

CustomerDefaultProps.propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
    isCustomer: PropTypes.bool,
    isDeliveryMethod: PropTypes.bool,
}

CustomerDefaultProps.defaultProps = {
    name: <em>Guest</em>,
    country: <em>null</em>,
    isCustomer: false,
    isDeliveryMethod: true

}

export default CustomerDefaultProps