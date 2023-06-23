import html from "html-literal";

export default () => html`
  <section id="about">
    <h1>About</h1>
    <p>This website was created to showcase the adventures of Eric Kiehlmeier and Victor Alma.
</p>

    <label>
        Your message:
        <textarea id="contactTextarea" name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>

    <p id="sendCor">Send all correspondence to:</p>
    <a class="contactInfo" href="https://www.linkedin.com/in/leamanbrown/"
      >LinkedIN</a
    >
    <a class="contactInfo" href="https://github.com/LeamanB">Github</a>
  </section>
`;