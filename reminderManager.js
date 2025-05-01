class Reminder {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

class ReminderManager {
    constructor() {
        this.reminders = [];
    }

    addReminder(name, time) {
        const reminder = new Reminder(name, time);
        this.reminders.push(reminder);
    }

    getReminders() {
        return this.reminders;
    }

    deleteReminder(index) {
        this.reminders.splice(index, 1);
    }

    editReminder(index, newName, newTime) {
        const reminder = this.reminders[index];
        reminder.name = newName;
        reminder.time = newTime;
    }

    saveReminders() {
        localStorage.setItem('reminders', JSON.stringify(this.reminders));
    }

    loadReminders() {
        const storedReminders = localStorage.getItem('reminders');
        if (storedReminders) {
            this.reminders = JSON.parse(storedReminders);
        }
    }
}

const reminderManager = new ReminderManager();
reminderManager.loadReminders();

export { reminderManager };
