export default function About() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 container d-flex m-auto">
        <div className="col">
          <div className="card h-100">
            <img
              src={require('./images/r.jpg')}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Trivedi Rahul</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                E-mail: rahultrivedi123@gmail.com
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={require('./images/pp.jpg')}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Tahelramani Harsh</h5>
              <p className="card-text">
                I am currently pursuing information technology in B. Tech. I
                want to become Java Full Stack Developer. I know basics of Java
                and web development.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                E-mail: harshsindhi085@gmail.com
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={require('./images/tirth.jpg')}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Viradiya Tirth</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                E-mail: tirthvir456@gmail.com
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
