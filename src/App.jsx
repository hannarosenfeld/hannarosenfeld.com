import React from "react";
import warehouseGif from "./assets/warehouse-demo.gif";

export default function App() {
  return (
    <div className="card">
      <h1>Hanna Rosenfeld</h1>
      <p>Welcome to my software engineering portfolio.</p>
      <section>
        <h2>About Me</h2>
        <p>
          I'm a software engineer passionate about building practical solutions for real-world problems.
          My recent work focuses on web applications that streamline business operations.
        </p>
      </section>
      <section>
        <h2>Featured Project</h2>
        <h3>
          <a href="https://warehousemanager.app" target="_blank" rel="noopener noreferrer">
            Warehouse Manager
          </a>
        </h3>
        <p>
          Warehouse Manager is a custom web application built for Naglee Moving & Storage in Elmira, NY.
          It helps organize and manage their warehouse space, including both vault and rack storage.
          The tool streamlines inventory tracking, improves space utilization, and reduces manual errors.
        </p>
        {/* <img
          src={warehouseGif}
          alt="Warehouse Manager demo"
          style={{
            width: "100%",
            maxWidth: 600,
            borderRadius: 12,
            margin: "1.5em 0",
            boxShadow: "0 2px 16px rgba(124,58,237,0.10)"
          }}
        /> */}
        <ul>
          <li>Developed a user-friendly interface for managing storage units and inventory</li>
          <li>Designed to handle both vault and rack storage types</li>
          <li>Improved operational efficiency for warehouse staff</li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:hannazrosenfeld@gmail.com">hannazrosenfeld@gmail.com</a>
        </p>
      </section>
    </div>
  );
}