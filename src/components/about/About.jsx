import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col left d-flex justify-content-center p-5">
          <img
            className="aboutimage"
            src="https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="col right d-flex justify-content-center p-5 flex-column">
          <h3 className="text-center text-decoration-underline">
            About Sheriff Real Estate
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            explicabo quia commodi! Excepturi a quibusdam atque eveniet
            aspernatur non laborum, architecto sit dolor cupiditate veritatis
            aliquam voluptatem dicta doloribus fugiat modi molestiae quisquam
            facere distinctio debitis consequuntur blanditiis alias iusto? Cum
            est sit, fugiat aspernatur labore maiores pariatur vel dolor
            provident natus accusantium placeat nulla unde iusto, nobis eius
            odio, voluptas corporis sunt error id alias sapiente nostrum?
            Quibusdam quod hic minima delectus molestiae cum provident porro
            expedita labore odit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
