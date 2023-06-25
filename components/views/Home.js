import html from "html-literal";

export default state => html`
  <section id="home">
    <h1>Travelin' Friends</h1>

    <div class="slideshow">
      <img src="image1.jpg" alt="Image 1" />
      <img src="image2.jpg" alt="Image 2" />
      <img src="image3.jpg" alt="Image 3" />
    </div>
    <h2>Most Recent Adventure</h2>
    <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  </section>
`;
