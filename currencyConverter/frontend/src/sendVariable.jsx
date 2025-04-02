async function sendVariable(currentCurrency){
        try{
            let response = await fetch('/api', {
                method : "POST",
                headers : {"Content-Type": "application/json"},
                body: JSON.stringify({message : currentCurrency})
            })
            const data = await response.json();
            console.log("Response from server:", data);
        } catch (error) {
            console.error("Error in sending data:", error);
        }
}

export default sendVariable