
function ListObjectFilter(){

    const styles = {
        display: "block",
        background: "beige",
        maxWidth: "300px",
        marginBottom: "50px"
    }

    const patientListStyle = {
        textAlign: "left",
        background: "gold",
        maxWidth: "90%",
        margin: "10px 0"
    }

    const h3 = {
        textAlign: "center",
        color: "grey",
        fontWeight: "bold",
        fontSize: "1rem",
        marginBottom: "0",
        maxWidth: "300px",
    }


    const patients = [
        {
            id: 1,
            name: "Hannah",
            gender: "Female",
            sickness: "Headache",
            treatment: "sleeping"
        },
        {
            id: 2,
            name: "Godsway",
            gender: "Male",
            sickness: "stomach ache",
            treatment: "rest"
        },
        {
            id: 3,
            name: "Mimi",
            gender: "Female",
            sickness: "Eye Impairment",
            treatment: "Glasses and Eye drops"
        },
        {
            id: 4,
            name: "Chris",
            gender: "Male",
            sickness: "Constipation",
            treatment: "Pegative"
        },
        {
            id: 5,
            name: "Evans",
            gender: "Male",
            sickness: "Hunger",
            treatment: "Drink Water"
        },
        {
            id: 6,
            name: "Innocent",
            gender: "Male",
            sickness: "Thinking",
            treatment: "rest"
        },
        {
            id: 7,
            name: "Humphery",
            gender: "Male",
            sickness: "Thinking",
            treatment: "sleeping"
        },
        {
            id: 8,
            name: "Debrah",
            gender: "Male",
            sickness: "Eye Impairment",
            treatment: "Glasses and Eye drops"
        },
        {
            id: 9,
            name: "Anita",
            gender: "Female",
            sickness: "Eye Impairment",
            treatment: "Glasses and Eye drops"
        },
        {
            id: 10,
            name: "Atawujeh",
            gender: "Male",
            sickness: "Hunger",
            treatment: "Drink Water"
        },
        
    ]

    const showPatients = patients.map(patient => <li key={patient.id} style={patientListStyle}>
                                                        Name: {patient.name} <br />
                                                        Gender: {patient.gender} <br />
                                                        Sickness: {patient.sickness} <br />
                                                        Treatment: {patient.treatment} <br />
                                                </li>);

    const drinkTreatmentPatients = patients.filter(patient => patient.treatment === "Drink Water");

    const showPatientsTreatmentDrink = drinkTreatmentPatients.map(patientTreatmentDrink => <li key={patientTreatmentDrink.id} style={patientListStyle}>
                                                        Name: {patientTreatmentDrink.name} <br />
                                                        Gender: {patientTreatmentDrink.gender} <br />
                                                        Sickness: {patientTreatmentDrink.sickness} <br />
                                                        Treatment: {patientTreatmentDrink.treatment} <br />
                                                </li>);
    const eyeTreatmentPatients = patients.filter(patient => patient.treatment === "Glasses and Eye drops");

    const showPatientsTreatmentEye = eyeTreatmentPatients.map(patientTreatmentEye => <li key={patientTreatmentEye.id} style={patientListStyle}>
                                                        Name: {patientTreatmentEye.name} <br />
                                                        Gender: {patientTreatmentEye.gender} <br />
                                                        Sickness: {patientTreatmentEye.sickness} <br />
                                                        Treatment: {patientTreatmentEye.treatment} <br />
                                                </li>);

    const restTreatmentPatients = patients.filter(patient => patient.treatment === "rest");

    const showPatientsTreatmentRest = restTreatmentPatients.map(patientTreatmentRest => <li key={patientTreatmentRest.id} style={patientListStyle}>
                                                        Name: {patientTreatmentRest.name} <br />
                                                        Gender: {patientTreatmentRest.gender} <br />
                                                        Sickness: {patientTreatmentRest.sickness} <br />
                                                        Treatment: {patientTreatmentRest.treatment} <br />
                                                </li>);

    const pegativeTreatmentPatients = patients.filter(patient => patient.treatment === "Pegative");

    const showPatientsTreatmentPegative = pegativeTreatmentPatients.map(patientTreatmentPegative => <li key={patientTreatmentPegative.id} style={patientListStyle}>
                                                        Name: {patientTreatmentPegative.name} <br />
                                                        Gender: {patientTreatmentPegative.gender} <br />
                                                        Sickness: {patientTreatmentPegative.sickness} <br />
                                                        Treatment: {patientTreatmentPegative.treatment} <br />
                                                </li>);

    const sleepTreatmentPatients = patients.filter(patient => patient.treatment === "sleeping");

    const showPatientsTreatmentSleeping = sleepTreatmentPatients.map(patientTreatmentSleep => <li key={patientTreatmentSleep.id} style={patientListStyle}>
                                                        Name: {patientTreatmentSleep.name} <br />
                                                        Gender: {patientTreatmentSleep.gender} <br />
                                                        Sickness: {patientTreatmentSleep.sickness} <br />
                                                        Treatment: {patientTreatmentSleep.treatment} <br />
                                                </li>);

        return (
            <>
                <div>
                    <h3 style={h3}> Patient Record Book</h3>
                    <ol style={styles}>
                        {showPatients}
                    </ol>
                </div>

                <div>
                    <h3 style={h3}> Patient Record Treatment: `Drink Water`</h3>
                    <ol style={styles}>
                        {showPatientsTreatmentDrink}
                    </ol>
                </div>

                <div>
                    <h3 style={h3}> Patient Record Treatment: `Glasses`</h3>
                    <ol style={styles}>
                        {showPatientsTreatmentEye}
                    </ol>
                </div>

                <div>
                    <h3 style={h3}> Patient Record Treatment: `Rest`</h3>
                    <ol style={styles}>
                        {showPatientsTreatmentRest}
                    </ol>
                </div>

                <div>
                    <h3 style={h3}> Patient Record Treatment: `Pegative`</h3>
                    <ol style={styles}>
                        {showPatientsTreatmentPegative}
                    </ol>
                </div>

                <div>
                    <h3 style={h3}> Patient Record Treatment: `Sleep`</h3>
                    <ol style={styles}>
                        {showPatientsTreatmentSleeping}
                    </ol>
                </div>

            </>
            
           
        )
}
export default ListObjectFilter