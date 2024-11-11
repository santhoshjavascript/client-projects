import React from "react";
// import LogoName from "../../../components/Logo";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* <LogoName color="#fff" /> */}
          <div className={styles.footerCol}>
            <h4>account</h4>
            <ul>
              <li>
                <Link>create account</Link>
              </li>
              <li>
                <Link>sign in</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>company</h4>
            <ul>
              <li>
                <Link>about nextgen</Link>
              </li>
              <li>
                <Link>for business</Link>
              </li>
              <li>
                <Link>clothing partners</Link>
              </li>
              <li>
                <Link>future</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>resources</h4>
            <ul>
              <li>
                <Link>clothing directory</Link>
              </li>
              <li>
                <Link>help center</Link>
              </li>
              <li>
                <Link>privacy & terms</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>contact us</h4>
            <div className={styles.socialLinks}>
              <Link>
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link>
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <Link href="mailto:next-gen@gmail.com" className={styles.mail}>
              next-gen@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright &copy; {new Date().getFullYear()} by NextGen, Inc. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
