export default function Calendar() {
  const now = new Date();
  const today = now.getDate();
  const currentMonth = now.toLocaleString('default', { month: 'long' });
  const currentYear = now.getFullYear();

  // Get number of days in the current month
  const daysInMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();
  
  // Create an array [1, 2, 3, ... daysInMonth]
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        {currentMonth} {currentYear}
      </div>
      <div className="calendar-grid">
        {dayLabels.map(label => (
          <div key={label} className="day-name">{label}</div>
        ))}
        {days.map(day => (
          <div 
            key={day} 
            className={`calendar-day ${day === today ? 'today' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}