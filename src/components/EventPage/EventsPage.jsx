import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function EventsPage() {
  const storedEvents = JSON.parse(localStorage.getItem('events')) || [];

  const initialEvents = storedEvents.length > 0 ? storedEvents : [
    { id: 1, title: 'Holi - A Festival of Colours and Unity', date: '2025-03-20', category: 'Religious', image: '/Holi.png' },
    { id: 2, title: 'Eid-ul-Fitr', date: '2025-04-05', category: 'Social', image: '/eid.webp' },
    { id: 3, title: 'Christmas Charity Drive', date: '2025-03-15', category: 'Charity', image: '/crist.webp' }
  ];

  const [events, setEvents] = useState(initialEvents);
  const [currentFilter, setCurrentFilter] = useState('All');
  const [nextId, setNextId] = useState(storedEvents.length > 0 ? storedEvents.length + 1 : 10);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newCategory, setNewCategory] = useState('Religious');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  function handleImageUrlChange(e) {
    setNewImageUrl(e.target.value);
    setImagePreview(e.target.value);
  }

  function handleFilterClick(category) {
    setCurrentFilter(category);
  }

  function handleAddEvent(e) {
    e.preventDefault();

    const newEvent = {
      id: nextId,
      title: newTitle,
      date: newDate,
      category: newCategory,
      image: newImageUrl || '/Event.avif'
    };

    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    setNextId(nextId + 1);

    setNewTitle('');
    setNewDate('');
    setNewCategory('Religious');
    setNewImageUrl('');
    setImagePreview('');
    setShowAddForm(false);
  }

  const eventsToShow = currentFilter === 'All' ? events : events.filter(event => event.category === currentFilter);

  return (
    <div className="events-page">
      <header>
        <Navbar />
      </header>

      {/* Filter Events */}
      <section className="filter">
        <h1>We Helped Communities Connect & Flourish</h1>
        <h3>✦ Upcoming Events</h3>
        <h2>Filter Events by Category</h2>
        <div className="category-filters">
          {['All', 'Religious', 'Social', 'Charity'].map(category => (
            <button key={category} onClick={() => handleFilterClick(category)} className={currentFilter === category ? 'active' : ''}>
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Adding New Event */}
      <section className="add-event-section">
        <button className="add-event-button" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancel' : 'Add New Event'}
        </button>

        {showAddForm && (
          <div className="add-event-form">
            <h2>Add New Event</h2>
            <form onSubmit={handleAddEvent}>
              <div className="form-group">
                <label>Title:</label>
                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Category:</label>
                <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                  <option value="Religious">Religious</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                </select>
              </div>
              <div className="form-group">
                <label>Image URL (optional):</label>
                <input type="url" value={newImageUrl} onChange={handleImageUrlChange} placeholder="Enter Url" />
                {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
              </div>
              <button type="submit" className="submit-button">Add Event</button>
            </form>
          </div>
        )}
      </section>

      {/* Event List */}
      <section className="events-list">
        <h2>Upcoming Events</h2>
        {eventsToShow.length > 0 ? (
          <div className="event-cards">
            {eventsToShow.map((event) => {
              const eventDate = new Date(event.date);
              const month = eventDate.toLocaleString('default', { month: 'short' });
              const day = eventDate.getDate();
              return (
                <div className="event-card" key={event.id}>
                  <div className="event-image-container">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="event-image" 
                      onError={(e) => (e.target.src = '/public/default-event.jpg')} 
                    />
                    <div className="event-date">
                      <span className="month">{month}</span>
                      <span className="day">{day}</span>
                    </div>
                  </div>
                  <div className="event-details">
                    <span className="event-category">{event.category.toUpperCase()}</span>
                    <h3>{event.title}</h3>
                    <p>
                      <i className="fa-solid fa-calendar"></i> <strong>Date:</strong> {eventDate.toDateString()}
                    </p>
                    <Link to="/event-details" className="event-link">Event Details →</Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No events found in this category.</p>
        )}
      </section>
    </div>
  );
}

export default EventsPage;
