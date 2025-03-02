function updateDateTime() {
    const now = new Date(); 

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[now.getDay()]; 
    document.getElementById("day").innerText = day;

    const date = now.toLocaleDateString("en-US", {
        month: "short", 
        day: "numeric", 
        year: "numeric",
    });
    document.getElementById("date").innerText = date;
}
setInterval(updateDateTime, 1000);
updateDateTime();