import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function EventsPage() {

  var initialEvents = [
    {
      id: 1,
      title: 'Holi - A Festival of Colours and Unity',
      date: '2025-03-20',
      category: 'Religious',
      image: '/Holi.png'
    },
    {
      id: 2,
      title: 'Eid-ul-Fitr',
      date: '2025-04-05',
      category: 'Social',
      image: '/eid.webp'
    },
    {
      id: 3,
      title: 'Christmas Charity Drive',
      date: '2025-03-15',
      category: 'Charity',
      image: '/crist.webp'
    }
  ];


  var [events, setEvents] = useState(initialEvents);
  var [currentFilter, setCurrentFilter] = useState('All');
  var [nextId, setNextId] = useState(4);
  var [showAddForm, setShowAddForm] = useState(false);


  var [newTitle, setNewTitle] = useState('');
  var [newDate, setNewDate] = useState('');
  var [newCategory, setNewCategory] = useState('Religious');
  var [newImageUrl, setNewImageUrl] = useState('');
  var [imagePreview, setImagePreview] = useState('');


  function handleImageUrlChange(e) {
    var url = e.target.value;
    setNewImageUrl(url);
    setImagePreview(url);
  }


  function handleFilterClick(category) {
    setCurrentFilter(category);
  }

  function handleAddEvent(e) {
    e.preventDefault();

    var newEvent = {
      id: nextId,
      title: newTitle,
      date: newDate,
      category: newCategory,
      image: newImageUrl ? newImageUrl : '/Event.avif'
    };

    var updatedEvents = events.concat(newEvent);
    setEvents(updatedEvents);
    setNextId(nextId + 1);

    // Clear the form fields
    setNewTitle('');
    setNewDate('');
    setNewCategory('Religious');
    setNewImageUrl('');
    setImagePreview('');


    setShowAddForm(false);
  }

  //  Show Event Based On Filter
  var eventsToShow = events;
  if (currentFilter !== 'All') {
    eventsToShow = events.filter(function (event) {
      return event.category === currentFilter;
    });
  }

  return (
    <div className="events-page">

      <header>
        <Navbar />
      </header>

      {/* Filter Events  */}
      <section className="filter">
        <h1>Our Events</h1>
        <h3>Upcoming Events</h3>
        <h2>Filter Events by Category</h2>
        <div className="category-filters">
          <button
            onClick={function () { handleFilterClick('All'); }}
            className={currentFilter === 'All' ? 'active' : ''}
          >
            All
          </button>
          <button
            onClick={function () { handleFilterClick('Religious'); }}
            className={currentFilter === 'Religious' ? 'active' : ''}
          >
            Religious
          </button>
          <button
            onClick={function () { handleFilterClick('Social'); }}
            className={currentFilter === 'Social' ? 'active' : ''}
          >
            Social
          </button>
          <button
            onClick={function () { handleFilterClick('Charity'); }}
            className={currentFilter === 'Charity' ? 'active' : ''}
          >
            Charity
          </button>
        </div>
      </section>

      {/* Adding New Event */}
      <section className="add-event-section">
        <button
          className="add-event-button"
          onClick={function () { setShowAddForm(!showAddForm); }}
        >
          {showAddForm ? 'Cancel' : 'Add New Event'}
        </button>

        {showAddForm && (
          <div className="add-event-form">
            <h2>Add New Event</h2>
            <form onSubmit={handleAddEvent}>
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={function (e) { setNewTitle(e.target.value); }}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  value={newDate}
                  onChange={function (e) { setNewDate(e.target.value); }}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category:</label>
                <select
                  value={newCategory}
                  onChange={function (e) { setNewCategory(e.target.value); }}
                >
                  <option value="Religious">Religious</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                </select>
              </div>
              <div className="form-group">
                <label>Image URL (optional):</label>
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={handleImageUrlChange}
                  placeholder="Enter Url"
                />
                {imagePreview && (
                  <div className="image-preview-container">
                    <p>Image Preview:</p>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="image-preview"
                      onError={function () { setImagePreview('/public/default-event.jpg'); }}
                    />
                  </div>
                )}
              </div>
              <button type="submit" className="submit-button">Add Event</button>
            </form>
          </div>
        )}
      </section>

      <section className="events-list">
        <h2>Upcoming Events</h2>
        {eventsToShow.length > 0 ? (
          <div className="event-cards">
            {eventsToShow.map(function (event) {
              var eventDate = new Date(event.date);
              var month = eventDate.toLocaleString('default', { month: 'short' });
              var day = eventDate.getDate();
              return (
                <div className="event-card" key={event.id}>
                  <div className="event-image-container">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-image"
                      onError={function (e) { e.target.src = '/public/default-event.jpg'; }}
                    />
                    <div className="event-date">
                      <span className="month">{month}</span>
                      <span className="day">{day}</span>
                    </div>
                  </div>
                  <div className="event-details">
                    <span className="event-category">{event.category.toUpperCase()}</span>
                    <h3>{event.title}</h3>
                    <p><strong>Date:</strong> {eventDate.toDateString()}</p>
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
