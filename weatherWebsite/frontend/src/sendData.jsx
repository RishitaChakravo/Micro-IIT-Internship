async function sendData(cityName){
    try{
        let response = await fetch('/api', {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify({message : cityName})
        });
        console.log("post request sent, repsonse status:", response.status);
        
        if (!response.ok) {
            console.error(`Error sending data. HTTP status: ${response.status}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log(`Data sent successfully`, data)
    } catch(error){
        console.log(`Data not sent`, error)
    }
}

export {sendData}