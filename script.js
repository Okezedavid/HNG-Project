// script file
document.addEventListener('DOMContentLoaded', () => {
    const slackDisplayName = "Okezedavid";  
    const slackEmail = "davidugochukwu080@gmail.com";  
    const slackProfilePicture = "./assets/pics/Slack dp.jpg";  

    document.getElementById('slackDisplayName').textContent = slackDisplayName;
    document.getElementById('slackEmail').textContent = slackEmail;
    document.getElementById('slackProfilePicture').src = slackProfilePicture;

    function updateTimeAndDay() {
        const now = new Date();
        const timeUTC = now.toUTCString().split(' ')[4];  // Extract the time part
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });  // Get the day of the week

        document.getElementById('currentTimeUTC').textContent = timeUTC;
        document.getElementById('currentDay').textContent = dayOfWeek;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);  // Update time and day every second
});
