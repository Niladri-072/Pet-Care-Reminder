import { reminderManager } from './reminderManager.js'; // Import reminderManager here

document.addEventListener('DOMContentLoaded', function() {
    // This ensures that the DOM is fully loaded before adding the event listener
    const setReminderButton = document.getElementById('set-reminder-btn');
    
    // Attach the click event to the button
    setReminderButton.addEventListener('click', setReminder);

    // Function to handle setting the reminder
    function setReminder() {
        let reminderName = document.getElementById('reminder-name').value;
        let reminderTime = document.getElementById('reminder-time').value;

        if (!reminderName || !reminderTime) {
            alert("Please fill in both fields.");
            return;
        }

        // Add the reminder to the manager
        reminderManager.addReminder(reminderName, reminderTime);
        reminderManager.saveReminders();

        // Show alert box
        alert(`Reminder for "${reminderName}" at ${reminderTime} has been set!`);

        // Display reminders in the UI
        displayReminders();

        // Clear input fields after adding
        document.getElementById('reminder-name').value = '';
        document.getElementById('reminder-time').value = '';
    }

    // Function to display the reminders in the UI
    function displayReminders() {
        let reminderList = document.getElementById('reminder-list-items');
        reminderList.innerHTML = ''; // Clear existing reminders

        const reminders = reminderManager.getReminders();

        if (reminders.length === 0) {
            reminderList.innerHTML = '<p>No reminders set yet.</p>';
        } else {
            reminders.forEach((reminder, index) => {
                let reminderBox = document.createElement('div');
                reminderBox.classList.add('reminder-box');
                
                let reminderDetails = document.createElement('p');
                reminderDetails.innerHTML = `${reminder.name} at ${reminder.time}`;

                let editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.classList.add('edit');
                editButton.onclick = function() {
                    editReminder(index);
                };

                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete');
                deleteButton.onclick = function() {
                    deleteReminder(index);
                };

                reminderBox.appendChild(reminderDetails);
                reminderBox.appendChild(editButton);
                reminderBox.appendChild(deleteButton);

                reminderList.appendChild(reminderBox);
            });
        }
    }

    // Function to delete a reminder
    function deleteReminder(index) {
        reminderManager.deleteReminder(index);
        reminderManager.saveReminders();
        displayReminders(); // Update the displayed list after deletion
    }

    // Function to edit a reminder
    function editReminder(index) {
        const reminder = reminderManager.getReminders()[index];
        const newName = prompt("Enter new name:", reminder.name);
        const newTime = prompt("Enter new time:", reminder.time);

        if (newName && newTime) {
            reminderManager.editReminder(index, newName, newTime);
            reminderManager.saveReminders();
            displayReminders(); // Update the displayed list after editing
        }
    }

    // Load and display any existing reminders when the page loads
    reminderManager.loadReminders();
    displayReminders();
});
