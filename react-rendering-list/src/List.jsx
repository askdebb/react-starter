
function List(){

    const fruits = ["aluguntugui", "apple", "mpua", "gbisi", "dates"];

    const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li> );
  
    return (<ul>{listItems}</ul>);

}

export default List