import ListObjectPropsGenerator from "./ListObjectPropsGenerator"

function ListObjectProps(){

    const tenants = [
        {
            id: 1,
            name: "Ghansah",
            family: "Yes",
            "Time Left": "2 months left",
        },
        {
            id: 2,
            name: "Philo",
            family: "Yes",
            "Time Left": "1 Year",
        },
        {
            id: 3,
            name: "Charity",
            family: "Yes",
            "Time Left": "3 months left",
        },
        {
            id: 4,
            name: "Annonouah",
            family: "No",
            "Time Left": "1 Year 3 Months",
        },
        {
            id: 5,
            name: "Annie",
            family: "No",
            "Time Left": "3 Months",
        },
    ]
    return( <ListObjectPropsGenerator allTenants = {tenants} />)

}
export default ListObjectProps