async function query(data) {
    const response = await fetch(
        "http://localhost:3000/api/v1/prediction/c233ebd1-535d-4737-879b-10e5cddade95",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});
