import React from "react";

const About = () => (
  <section class="page-section" id="about">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Sister Companies</h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <ul class="timeline">
        <li>
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/Concerto.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>Concerto Cafe</h4>
              <h6 class="subheading">
                610 S Serrano Ave, Los Angeles, CA 90005
              </h6>
            </div>
            <div class="timeline-body">
              <p class="text-muted">Bucci is here</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/Bakery.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>Concerto Bakery</h4>
              <h6 class="subheading">
                3500 W 6th St #117, Los Angeles, CA 90020
              </h6>
            </div>
            <div class="timeline-body">
              <p class="text-muted">no mat</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/Marlou.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>The Marlou Restaurant</h4>
              <h6 class="subheading">819 Flower St, Los Angeles, CA 90017</h6>
            </div>
            <div class="timeline-body">
              <p class="text-muted">2 idiot chefs here</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-image">
            <img
              class="rounded-circle img-fluid"
              src="assets/img/Concerto.jpg"
              alt="..."
            />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4>The Burrow Bar</h4>
              <h6 class="subheading">821 Flower St, Los Angeles, CA 90017</h6>
            </div>
            <div class="timeline-body">
              <p class="text-muted">almost done..</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default About;
