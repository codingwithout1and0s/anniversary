<<<<<<< HEAD
import "./footer.css";
import logo from "../../resources/cat-icon.png";

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="linkBar">
        <ul>
          <h3>Portfolio</h3>
          <li>Meet Steve</li>
          <li>Meet Michelle</li>
          <li>Their Love Story</li>
        </ul>
        <ul>
          <h3>Links</h3>
          <li>About Me</li>
          <li>Journal</li>
          <li>Contact</li>
        </ul>
        <ul>
          <img src={logo} alt="" />
        </ul>
      </div>

      <div className="ft-legal">
        <ul className="ft-legal-list">
          <li>
            <p>Terms &amp; Conditions</p>
          </li>
          <li>
            <p>Privacy Policy</p>
          </li>
          <li>&copy; 2022 Copyright Con meow co.</li>
        </ul>
      </div>
    </div>
  );
}
=======
import "./footer.css";

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="linkBar">
        <ul>
          <h3>Portfolio</h3>
          <li>Meet Steve</li>
          <li>Meet Michelle</li>
          <li>Their Love Story</li>
        </ul>
        <ul>
          <h3>Links</h3>
          <li>About Me</li>
          <li>Journal</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="ft-legal">
        <ul className="ft-legal-list">
          <li>
            <p>Terms &amp; Conditions</p>
          </li>
          <li>
            <p>Privacy Policy</p>
          </li>
          <li>&copy; 2022 Copyright Con meow co.</li>
        </ul>
      </div>
    </div>
  );
}
>>>>>>> 4b6d864ce6bef9f42cc46a372f632b07bfdf0b70
