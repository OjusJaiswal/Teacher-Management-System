import React,{useState} from 'react'
import { Calendar,dateFnsLocalizer} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Republic Day",
        start: new Date(2023,0,26),
        end: new Date(2023,0,27),
    },
    {
        title: "Mahashivratri",
        start: new Date(2023,1,18),
        end: new Date(2023,1,19),
    },

    {
        title: "Chhatrapati Shivaji Maharaj Jayanti",
        start: new Date(2023,1,19),
        end: new Date(2023,1,20),
    },
    {
        title: "Maharashtra Din",
        start: new Date(2023,4,1),
        end: new Date(2023,4,2),
    },
    {
        title: "Independence Day",
        start: new Date(2023,7,15),
        end: new Date(2023,7,16),
    },
    {
        title: "Parsi New Year",
        start: new Date(2023,7,16),
        end: new Date(2023,7,17),
    },
    {
        title: "Ganesh Chaturthi",
        start: new Date(2023,8,19),
        end: new Date(2023,8,20),
    },
    {
        title: "Mahatma Gandhi Jayanti",
        start: new Date(2023,9,2),
        end: new Date(2023,9,3),
    },
    {
        title: "Dasara",
        start: new Date(2023,9,24),
        end: new Date(2023,9,25),
    },
    {
        title: "Diwali",
        start: new Date(2023,10,10),
        end: new Date(2023,10,20),
    },
    {
        title: "Guru Nanak Jayanti",
        start: new Date(2023,10,27),
        end: new Date(2023,10,28),
    },
    {
        title: "Christmas",
        start: new Date(2023,11,25),
        end: new Date(2023,11,26),
    },
    {
        title: "Good Friday",
        start: new Date(2023,3,7),
        end: new Date(2023,3,8),
    },
    {
        title: "Holi",
        start: new Date(2023,2,8),
        end: new Date(2023,2,9),
    },
    {
        title: "Gudi Padwa",
        start: new Date(2023,2,22),
        end: new Date(2023,2,23),
    },
    {
        title: "Ram Navami",
        start: new Date(2023,2,30),
        end: new Date(2023,2,31),
    },
    {
        title: "Buddha Purnima",
        start: new Date(2023,4,5),
        end: new Date(2023,4,6),
    },
    {
        title: "Bakra Eid",
        start: new Date(2023,5,29),
        end: new Date(2023,5,30),
    },
    {
        title: "Muharram",
        start: new Date(2023,6,29),
        end: new Date(2023,6,30),
    },
    {
        title: "Ambedkar Jayanti",
        start: new Date(2023,3,14),
        end: new Date(2023,3,15),
    }
   
];




export default function Calapp() {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

  return (
    <div className="container">
            <h4>Calendar</h4>
            <h5>Add New Event</h5>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
  )
}
