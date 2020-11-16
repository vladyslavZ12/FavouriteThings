let errorCodes = {
    404: "URL does not work",
    500: "Problem with a server",
    403: "Wrong credits",
    503: "Services are not available at the moment"
}

async function fetchData(sourceURL) {
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`ERROR!!!!! ${response.status}: ${errorCodes[response.status]}`);
        } 
        return response;           
    });
    let dataset = await resource.json();
    return dataset[0];
}

export { fetchData };