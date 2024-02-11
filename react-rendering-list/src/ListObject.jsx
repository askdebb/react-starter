function ListObject(){

    const fruits = [
        {
            id: 1,
            name: "aluguntugui",
            calories: 45
        },
        {
            id: 2,
            name: "apple",
            calories: 20
        },
        {
            id: 3,
            name: "mpua",
            calories: 40
        },
        {
            id: 4,
            name: "gbisi",
            calories: 49
        },
        {
            id: 5,
            name: "dates",
            calories: 55
        },
    ]


    const listItems = fruits.map(fruit => <li key={fruit.id}> <b>Fruits:</b> {fruit.name}  |   
                                                <b>Calories:</b> {fruit.calories}kg
                                         </li>);

    return(<ul>{listItems}</ul>)
}

export default ListObject