import html from "html-literal";

export default () => html`
  <section id="upcomingevents">
    <h1>"Upcoming Events"</h1>
  
    <h2>Autoplay YouTube Video</h2>
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1" frameborder="0" allowfullscreen></iframe>
  
  <h2>YouTube Video Grid</h2>
  
  <div class="video-grid" id="videoGrid"></div>
  
  </section>
`;

