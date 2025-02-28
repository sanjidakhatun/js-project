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
        
        let selectedRoomType = 'all';
        let guestsCapacity = 1;
        let roomPrice = 0;
        let roomSize = 0;
        let Pet = null;
        let Breakfast = null;

        filterData = () => {
            // console.log('clicked');
            
            myData = data;
            selectedRoomType = document.getElementById('roomType').value;
            guestsCapacity = document.getElementById('guestsCapacity').value;
            roomPrice = document.getElementById('roomPrice').value;
            roomSize = document.getElementById('roomSize').value;
            Pet = document.getElementById('Pet').value;
            Breakfast = document.getElementById('Breakfast').value;
            myData.forEach(e => {
                if (selectedRoomType == 'all') {
                    rooms.insertAdjacentHTML("beforeend",
                        `<div class="col-6 col-md-4">
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
                else if (e.fields.type == selectedRoomType && e.fields.capacity == guestsCapacity && e.fields.price >= roomPrice && e.fields.size >= roomSize ) {
                    myData = e;
                    console.log(myData);
                    rooms.insertAdjacentHTML("beforeend",
                        `<div class="col-12 col-md-4">
                            <div class="room">
                                <div class="overlay">
                                    <div class="image-container">
                                    <img class="w-100" src="${myData.fields.images[0].fields.file.url}">
                                    <div class="price-top">
                                        <h6>&dollar;${myData.fields.price}</h6>
                                        <p>per night</p>
                                    </div>
                                    </div>
                                    <div class="overlay-button">
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <button class="btn btn-info text-uppercase my-btn p-2" type="button"><a href="./room-details.html?slug=${myData.fields.slug}">room details</a></button>
                                    </div>
                                    </div>
                                </div>
                                <p class="room-info">${myData.fields.name}</p>
                            </div>
                        </div>`
                    )
                                       
                }
                else {
                    console.log('else');
                }
                // console.log(myData);
            })
            // console.log(selectedRoomType);
        }

        filterData();
        
    })