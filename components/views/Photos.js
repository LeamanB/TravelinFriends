import html from "html-literal";

export default state => html`
  <section id="photos">
    <h1>Photos</h1>
    <div class="slideshow">
      <img src="image1.jpg" alt="Image 1" />
      <img src="image2.jpg" alt="Image 2" />
      <img src="image3.jpg" alt="Image 3" />
   
    </div>
    <h2>Photo Grid</h2>
    <div class="photo-grid">
    <div class="photo" onclick="enlargePhoto('photo1.jpg')">
      <img src="photo1.jpg" alt="Photo 1">
    </div>
    <div class="photo" onclick="enlargePhoto('photo2.jpg')">
      <img src="photo2.jpg" alt="Photo 2">
    </div>
    <div class="photo" onclick="enlargePhoto('photo3.jpg')">
      <img src="photo3.jpg" alt="Photo 3">
    </div>
    <!-- Add more photos here -->
  </div>

  </section>
`;

