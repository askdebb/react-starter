function ListObjectSort(){

    const workers = [
        {
            id: 1,
            name: "Jenni",
            age: 23,
            status: "Active",
        },
        {
            id: 2,
            name: "Asamsaco",
            age: 28,
            status: "Active",
        },
        {
            id: 3,
            name: "Worla",
            age: 60,
            status: "Retired",
        },
        {
            id: 4,
            name: "Rein",
            age: 89,
            status: "Retired",
        },
        {
            id: 5,
            name: "Anni",
            age: 14,
            status: "Active",
        },
    ]


    workers.sort((a, b) => a.name.localeCompare(b.name));

    const workersList = workers.map(worker => <li key={worker.id} >Name: {worker.name} | Age: {worker.age} | Work Status: {worker.status}</li>)

    return (
        <ol>
            {workersList}
        </ol>
    );
}
export default ListObjectSort