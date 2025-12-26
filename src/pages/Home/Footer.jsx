import React from "react";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import CodeIcon from "@mui/icons-material/Code";

function Footer() {
  return (
    <footer className="bg-gray-950 py-6">
      <div className="flex justify-center items-center gap-6">
        
        <Link
          href="https://github.com/sakshi-learner"
          target="_blank"
          rel="noopener"
          className="group"
        >
          <div className="footer-icon">
            <GitHubIcon />
          </div>
        </Link>

        <Link
          href="https://leetcode.com/u/sakshee-singh/"
          target="_blank"
          rel="noopener"
          className="group"
        >
          <div className="footer-icon">
            <CodeIcon />
          </div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/sakshee-singh-38ba48272"
          target="_blank"
          rel="noopener"
          className="group"
        >
          <div className="footer-icon">
            <LinkedInIcon />
          </div>
        </Link>

        <Link
          href="https://www.facebook.com/profile.php?id=100071120324353"
          target="_blank"
          rel="noopener"
          className="group"
        >
          <div className="footer-icon">
            <FacebookIcon />
          </div>
        </Link>

        <Link
          href="https://x.com/Sakshee96679291"
          target="_blank"
          rel="noopener"
          className="group"
        >
          <div className="footer-icon">
            <XIcon />
          </div>
        </Link>

      </div>

      {/* Optional copyright */}
      <p className="text-center text-gray-400 text-sm mt-4">
        © {new Date().getFullYear()} Sakshi Singh. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
