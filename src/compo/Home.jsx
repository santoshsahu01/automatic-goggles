function Home (){

    return( 
   <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          color: black;
          background-color: #070707;
        }

        .logo {
          color: white;
          font-size: 24px;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 25px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
        }

        .nav-links a:hover {
          color: #00bcd4;
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">Sansah.Online</div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>

    )
}


export default Home;