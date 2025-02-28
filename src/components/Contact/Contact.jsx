import { React, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
  const form = useRef();
  const time = useRef();

  const { control } = useForm();

  const sendEmail = (e) => {
    console.log(time);
    const month = time.current.props.selected.getMonth();
    const day = time.current.props.selected.getDate();
    const hour = time.current.props.selected.getHours();
    const min = time.current.props.selected.getMinutes();

    const info = {
      name: form.current["name"].value,
      email: form.current["email"].value,
      phone: form.current["phone"].value,
      message: form.current["message"].value,
      size: form.current["size"].value,
      time: time.current.props.selected,
      month: month + 1,
      day: day,
      hour: hour,
      min: min,
    };
    console.log("log name", form.current["name"].value);
    console.log("log email", form.current["email"].value);
    console.log("log phone", form.current["phone"].value);
    console.log("log message", form.current["message"].value);
    console.log("log size", form.current["size"].value);
    console.log("log time", time.current.props.selected);

    e.preventDefault();
    emailjs
      .send("service_pjm17hj", "template_n9r6ub9", info, "TSXs1GGLpKlBne79F")
      .then(
        (result) => {
          console.log(result.status, result.text);
        },
        (error) => {
          console.log(error.status, error.text);
        }
      );
  };

  return (
    <section class="page-section" id="contact">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Reservation</h2>
        </div>

        <form id="contactForm" ref={form} onSubmit={sendEmail}>
          <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
              <div class="form-group">
                <Controller
                  control={control}
                  name="time"
                  id="time"
                  render={({ field }) => (
                    <DatePicker
                      placeholderText="Select date"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      showTimeSelect
                      dateFormat="Pp"
                      timeFormat="p"
                      //minDate={new Date()}
                      minDate={new Date()}
                      minTime={new Date().setHours(17, 0, 0, 0)}
                      maxTime={new Date().setHours(21, 0, 0, 0)}
                      ref={time}
                    />
                  )}
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="size"
                  type="text"
                  placeholder="Party Size *"
                  data-sb-validations="required"
                  name="size"
                />
              </div>

              <div class="form-group">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  data-sb-validations="required"
                  name="user_name"
                />
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  data-sb-validations="required,email"
                  name="user_email"
                />
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <div class="form-group mb-md-0">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  data-sb-validations="required"
                  name="phone"
                />
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-textarea mb-md-0">
                <textarea
                  class="form-control"
                  id="message"
                  placeholder="Your Message *"
                  data-sb-validations="required"
                  name="message"
                ></textarea>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
            </div>
          </div>
          <div class="d-none" id="submitSuccessMessage">
            <div class="text-center text-white mb-3">
              <div class="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms">
                https://startbootstrap.com/solution/contact-forms
              </a>
            </div>
          </div>
          <div class="d-none" id="submitErrorMessage">
            <div class="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>
          <div class="text-center">
            <button
              class="btn btn-primary btn-xl text-uppercase"
              id="submitButton"
              type="submit"
              value="Send"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
