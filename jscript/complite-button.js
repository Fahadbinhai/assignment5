
let completedTaskCount = 0; 

const completedButtons = document.querySelectorAll(".btn");
const activityLogsContainer = document.getElementById("activity-logs");

completedButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();

       
        const smallNumber = getNumberFormString("small-number");
        const bigNumber = getNumberFormString("big-number");

      
        const sum = bigNumber + 1;
        const reduce = smallNumber - 1;

        
        alert("Board updated successfully");

       
        document.getElementById("small-number").innerText = reduce;
        document.getElementById("big-number").innerText = sum;

        
        this.disabled = true;

        this.style.opacity = "0.7"; 
        this.style.backgroundColor = "#ccc"; 

        
        const taskName = this.closest(".box").querySelector("h3").innerText;

        
        const now = new Date();
        const timeString = now.toLocaleTimeString(); 

        
        const logMessage = `You have Complete The Task ${taskName} at ${timeString}`;

       
        const logDiv = document.createElement("div");

        
        logDiv.className = "p-4 mb-3 bg-white rounded-lg shadow-sm";  

        
        logDiv.innerText = logMessage;

        
        activityLogsContainer.appendChild(logDiv);

       
        completedTaskCount++;

        if (completedTaskCount === 6) {
            alert("Congratulations!!! You have completed all the current tasks");
        }
    });
});