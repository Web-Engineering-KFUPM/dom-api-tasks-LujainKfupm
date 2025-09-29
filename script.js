
document.addEventListener("DOMContentLoaded", function () {
    //TODO1
    document.getElementById("t1-msg").textContent = "Hello, World!";

    //TODO2
    document.getElementById("t2-btn").addEventListener("click", function () {
        document.getElementById("t2-status").textContent = "You clicked the button!";
    });

    //TODO3
    document.getElementById("t3-loadQuote").addEventListener("click", async function () {
        try {
            const res = await fetch("https://dummyjson.com/quotes/random");
            if (!res.ok) throw new Error("HTTP " + res.status);
            const data = await res.json();
            document.getElementById("t3-quote").textContent = data.quote || "No quote";
            document.getElementById("t3-author").textContent = data.author || "Unknown";
        } catch {
            document.getElementById("t3-quote").textContent = "Unable to load a quote.";
            document.getElementById("t3-author").textContent = "";
        }
    });


//TODO4
    const key = "392405218a56e46f9ae0650d6d069134";
    document.getElementById("t4-loadWx").addEventListener("click", async function () {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=${key}&units=metric`);
            if (!res.ok) throw new Error("HTTP " + res.status);
            const data = await res.json();
            document.getElementById("t4-temp").textContent = data.main.temp + " °C";
            document.getElementById("t4-hum").textContent = data.main.humidity + " %";
            document.getElementById("t4-wind").textContent = data.wind.speed + " m/s";
        } catch {
            document.getElementById("t4-temp").textContent = "Unable load weather.";
            document.getElementById("t4-hum").textContent = "";
            document.getElementById("t4-wind").textContent = "";
        }
    });

});
