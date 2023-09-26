import React from 'react';
import './homepage.css';  // Import your CSS file

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1 className="heading">Student App</h1>
        <nav className="nav">
          <a href="login" className="nav-link">Login</a>
          <a href="signup" className="nav-link">Signup</a>
        </nav>
      </header>
      <main className="main-content">
        <h2 className="section-heading">Welcome to our Student Management Platform!</h2>
        <div className="text-content">
          <p>Here, administrators have the ability to oversee all student records, perform essential CRUD (Create, Read, Update, Delete) operations, and manage student data seamlessly.</p>
          <p>For administrators, the platform provides a comprehensive dashboard that allows them to view, add, modify, and remove student information. It's a centralized hub to streamline administrative tasks and ensure efficient management of student records.</p>
          <p>On the other hand, students can access their personalized profiles upon login. This profile displays their individual details, course information, and academic progress. It's a convenient way for students to keep track of their educational journey and stay connected with their educational institution.</p>
        </div>
      </main>
      <footer className="footer">
        {/* <p>2023 Student App</p*/}
      </footer>
    </div>
  );
};

export default HomePage;