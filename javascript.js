let featuredRoom = document.getElementById('f-rooms');
let rooms = document.getElementById('rooms');
let myData = null;


fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(e => {
            if (e.fields.featured) {
                if (featuredRoom) {
                    featuredRoom.insertAdjacentHTML("beforeend",
                        `<div class="col-12 col-lg-3 col-md-6">
                            <div class="room">
                                <div class="overlay">
                                    <div class="image-container">
                                    <img class="w-100" src="${e.fields.images[0].fields.file.url}">
                                    <div class="price-top">
                                        <h6>&dollar;${e.fields.price}</h6>
                                        <p>per night</p>
                                    </div>
                                    </div>
                                    <div class="overlay-button">
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <a  class=" text-decoration-none my-btn" href="./details.html?slug=${e.fields.slug}">room details</a>
                                    </div>
                                    </div>
                                </div>
                                <p class="room-info">${e.fields.name}</p>
                            </div>
                        </div>`
                    ) 
                }
            }
        });
        filterData = () => {
            // Get the selected filter values
            selectedRoomType = document.getElementById('roomType').value;
            guestsCapacity = document.getElementById('guestsCapacity').value;
            roomPrice = document.getElementById('roomPrice').value;
            roomSize = document.getElementById('roomSize').value;
            Pet = document.getElementById('Pet').value;
            Breakfast = document.getElementById('Breakfast').value;
            
            
            let filteredRooms = []; 
            
            
            data.forEach(e => {
                if (selectedRoomType == 'all' || 
                    (e.fields.type == selectedRoomType &&
                     e.fields.capacity == guestsCapacity &&
                     e.fields.price >= roomPrice &&
                     e.fields.size >= roomSize)) {
                    filteredRooms.push(e); 
                }
            });
        
    
            rooms.innerHTML = ''; 
        
        
            // If there are filtered rooms, display them
            if (filteredRooms.length > 0) {
                filteredRooms.forEach(room => {
                    rooms.insertAdjacentHTML("beforeend",
                        `<div class="col-md-3 col-sm-6 mb-4">
                            <div class="overlay">
                            <div class="img-card">
                                <div class="img position-relative">
                                <img class="img-fluid" src="${room.fields.images[0].fields.file.url}">
                                <div class="price-top">
                                    <h6>&dollar;${room.fields.price}</h6>
                                    <p>per night</p>
                                </div>
                                    <div class="overlay-button position-absolute">
                                      <a href="./feature1.html">
                                       <button class="btn btn-info px-5 py-2">Feature</button>
                                      </a>
                                      </div>
                                    </div>
                                   <p class="room-info">${room.fields.name}</p>
                                </div>
                            </div>
                            
                        </div>`);
                });
            } else {
                rooms.insertAdjacentHTML("beforeend", "<p>No rooms found matching your filters.</p>");
            }
        }
        
        
         
        
        
        
        
    })