import React from "react";

const Portfolio = () => (
  <section class="page-section bg-light" id="menu">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Menu</h2>
        <h3 class="section-subheading text-muted">
          Thank you for choosing our restaurant & Enjoy our food
        </h3>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-6 mb-4">
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              // data-bs-toggle="modal"
              href="https://drive.google.com/file/d/1J1DZxTt5UY5R11RlewtBDNiqdZpJKq4s/view?usp=sharing"
            >
              <div class="portfolio-hover">
                {/* <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                  
                </div> */}
              </div>
              <img class="img-fluid" src="assets/img/Lunch.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Lunch</div>
              <div class="portfolio-caption-subheading text-muted">
                11:30am - 2:30pm
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 mb-4">
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              href="https://drive.google.com/file/d/1977QFpil20qo6HgbeaPQkSij4vYVoqWn/view?usp=sharing"
            >
              <div class="portfolio-hover">
                {/* <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div> */}
              </div>
              <img class="img-fluid" src="assets/img/dinner.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Dinner</div>
              <div class="portfolio-caption-subheading text-muted">
                5:00pm - 11:30pm
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 mb-4">
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              href="https://drive.google.com/file/d/1g9FWdC4UIKeZM7jc9KfLZBKJaSXVVMym/view?usp=sharing"
            >
              <div class="portfolio-hover">
                {/* <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div> */}
              </div>
              <img class="img-fluid" src="assets/img/Wine.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Wine</div>
              <div class="portfolio-caption-subheading text-muted">
                Red/White/Champaigne
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6 mb-4 mb-lg-0">
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              href="https://drive.google.com/file/d/1ra0K9dCltpexi3seGyUQzXM_oFqFJzjo/view?usp=sharing"
            >
              <div class="portfolio-hover">
                {/* <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div> */}
              </div>
              <img class="img-fluid" src="assets/img/Spirit.jpg" />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Spirit</div>
              <div class="portfolio-caption-subheading text-muted">
                Whisky/Vodka/Tequila
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
