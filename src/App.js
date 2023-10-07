import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img src="memoji.png" alt="hi" />
      <h2> Hi, Vishal this side </h2>
      <p>
        I was just browsing through Internshala and found a great opportunity to
        work with you guys, It seems like getting in won't be a walk in the
        park, but I've already wrapped up the assignment you provided. Looking
        forward to the possibility of working together!
      </p>

      <div>
        {" "}
        <a
          href="https://liaisonit.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Task App{" "}
        </a>{" "}
        <a
          href="https://documenter.getpostman.com/view/25125631/2s9YJgSzin"
          target="_blank"
          rel="noreferrer"
        >
          Postman
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/vishal-soni-b21a4a1b8"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        <a href="https://vishalsoni.netlify.app/" rel="noreferrer">
          Me
        </a>{" "}
      </div>
    </div>
  );
}
