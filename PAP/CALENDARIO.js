document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const monthYearEl = document.getElementById('monthYear');
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    renderCalendar(currentMonth, currentYear);

    function renderCalendar(month, year) {
        const daysEl = calendarEl.querySelector('.days');
        daysEl.innerHTML = ''; // Clear the previous calendar
        monthYearEl.textContent = `${getMonthName(month)} ${year}`;

        const monthDays = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const prevMonthDays = new Date(year, month, 0).getDate();

        // Previous month days
        for (let i = firstDayIndex; i > 0; i--) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.classList.add('prev-month');
            day.textContent = prevMonthDays - i + 1;
            daysEl.appendChild(day);
        }

        // Current month days
        for (let i = 1; i <= monthDays; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.textContent = i;
            day.dataset.date = new Date(year, month, i).toISOString().split('T')[0];
            day.addEventListener('click', () => displayEvents(day.dataset.date));
            daysEl.appendChild(day);
        }

        // Next month days
        const nextDays = 42 - daysEl.children.length; // Ensuring 6 weeks (42 days) displayed
        for (let i = 1; i <= nextDays; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.classList.add('next-month');
            day.textContent = i;
            daysEl.appendChild(day);
        }

        loadEvents();
    }

    function getMonthName(monthIndex) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return months[monthIndex];
    }

    function loadEvents() {
        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];

        storedEvents.forEach(event => {
            const eventDate = new Date(event.date).toISOString().split('T')[0];
            const eventDay = document.querySelector(`.day[data-date='${eventDate}']`);

            if (eventDay) {
                const eventEl = document.createElement('div');
                eventEl.classList.add('event');
                eventEl.textContent = event.title;
                eventEl.dataset.id = event.id;
                eventEl.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering day click
                    if (confirm('Do you want to delete this event?')) {
                        deleteEvent(event.id);
                    }
                });
                eventDay.appendChild(eventEl);
            }
        });
    }

    function deleteEvent(id) {
        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        const updatedEvents = storedEvents.filter(event => event.id !== id);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        renderCalendar(currentMonth, currentYear);
    }

    window.addEvent = function () {
        const titleInput = document.getElementById('eventTitle');
        const dateInput = document.getElementById('eventDate');
        const descriptionInput = document.getElementById('eventDescription');

        const newEvent = {
            id: Date.now(),
            title: titleInput.value,
            date: dateInput.value,
            description: descriptionInput.value
        };

        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        storedEvents.push(newEvent);
        localStorage.setItem('events', JSON.stringify(storedEvents));

        titleInput.value = '';
        dateInput.value = '';
        descriptionInput.value = '';

        renderCalendar(currentMonth, currentYear);
    };

    window.navigateMonth = function (direction) {
        currentMonth += direction;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    };

    window.refreshPage = function () {
        window.location.reload();
    };

    window.displayEvents = function (date) {
        const modal = document.getElementById('eventListModal');
        const modalDate = document.getElementById('modalDate');
        const eventList = document.getElementById('eventList');

        modalDate.textContent = date;
        eventList.innerHTML = '';

        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        const eventsOnDate = storedEvents.filter(event => event.date === date);

        eventsOnDate.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.textContent = `${event.title}: ${event.description}`;
            eventList.appendChild(eventItem);
        });

        modal.style.display = 'flex';
    };

    window.closeModal = function () {
        document.getElementById('eventListModal').style.display = 'none';
    };
});