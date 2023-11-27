
// Making the function asynchronous
async function sendMessageToApi () {
    // Start timer for api response time
        console.time("ApiResponseTime");

    // const for the userinput by user
            const userinput = document.getElementById("message-to-api").value;
            console.log(userinput + "!!!!!!!!!!!!!!");

            const OPENAI_API_KEY = "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"; // my API-key
    // try statement to ultimately end the timer
            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${OPENAI_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        messages: [{
                            role: "user",
                            content: userinput
                        }]
                    })
                });

            // Logs the data from the API in the console
                const data = await response.json();
                console.log(data);

            // Logs the data, picks choices and the first element in the array inside the object (data). Then we further pick message and content.
                const responseApi = data.choices[0].message.content;
                const OpenAiApiResponseForUser = document.getElementById("api-response");
                OpenAiApiResponseForUser.innerHTML = responseApi;

            } catch (error) {
                console.log("Error:", error);
            } finally {
                console.timeEnd("ApiResponseTime");
            }
    }



console.log("hey bud")