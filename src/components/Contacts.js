// // import React from "react";
// import React, { useRef } from "react";
// import emailjs from '@emailjs/browser';

// const Contacts = () => {

//     const form = useRef();

//     const serviceID = "service_ID";
//     const templateID = "template_ID;";
//     const publicKey = "7C26gTgEP0D0q7CKe";
    
//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         emailjs
//           .sendForm(serviceID, templateID, form.current, publicKey)
//           .then(
//             () => {
//               console.log('SUCCESS!');
//             },
//             (error) => {
//               console.log('FAILED...', error.text);
//             },
//           );
//       };
    

//   return (
//     <div className="contacts">
//         <div className="text-center">    
//             <h1>contact me</h1>
//             <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
//         </div>
//         <div className="container">
//             <form ref={form} onSubmit={sendEmail}>
//                 <div className="row">
//                     <div className="col-md-6 col-xs-12">
//                         {/*name input */}
//                         <div className="text-center">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Name"
//                                 name="name"
//                                 />
//                             <div className="line"></div>
//                         </div>
//                         {/*phone input */}
//                         <div className="text-center">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Phone Number"
//                                 name="phone"
//                                 />
//                             <div className="line"></div>
//                         </div>
//                         {/*email input */}
//                         <div className="text-center">
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 placeholder="Email"
//                                 name="email"
//                                 />
//                             <div className="line"></div>
//                         </div>
//                         {/*Subject input */}
//                         <div className="text-center">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Subject"
//                                 name="subject"
//                                 />
//                             <div className="line"></div>
//                         </div>
//                     </div>
//                     <div className="col-md-6 col-xs-12">
//                         {/* Description */}
//                         <div className="text-center">
//                             <textarea
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Please describe shortly your project"
//                                 name="email"
//                                 ></textarea>
//                             <div className="line"></div>
//                         </div>
//                         <button className="btn-main-offer contact-btn" type="submit">contact me</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Contacts


// import React, { useRef } from "react";
// import emailjs from '@emailjs/browser';
// import { useForm } from "react-hook-form";

// const Contacts = () => {
//     const [successMessage, setSuccessMessage] = useRef(""); //it might be useRef
//     const{register, handleSubmit, errors} = useForm();
//     const form = useRef();

//     const serviceID = "service_ID";
//     const templateID = "template_ID";
//     const publicKey = "7C26gTgEP0D0q7CKe";

//     const onSubmit = (data, r) => {
//         sendEmail(
//             serviceID,
//             templateID,
//             {
//                 name: data.name,
//                 phone: data.phone,
//                 email: data.email,
//                 subject: data.subject,
//                 description: data.description
//             },
//             publicKey
//         )
//         r.target.reset();
//     }

//     const sendEmail = (serviceID, templateID, variables, publicKey) => {

//         emailjs.send(serviceID, templateID, variables/*form.current*/, publicKey)
//         .then(
//             () => {
//                 setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
//             }).catch(err => console.error(`Something went wrong ${err}`));
//     }

//     return (
//         <div className="contacts">
//         <div className="text-center">    
//             <h1>contact me</h1>
//             <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
//         </div>
//         <div className="container">
//             <form ref={form} onSubmit={handleSubmit(onSubmit)}>
//             <div className="row">
//                 <div className="col-md-6 col-xs-12">
//                 {/* Name input */}
//                 <div className="text-center">
//                     <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Name"
//                     name="name"
//                     ref={
//                         register({
//                             required: "Please enter your name",
//                             maxLength: {
//                                 value: 20,
//                                 message: "Please enter a name with fewer than 20 characters"
//                             }
//                         })
//                     }
//                     />
//                     <div className="line"></div>
//                 </div>
//                 <span className="error-message">
//                     {errors.name && errors.name.message}
//                 </span>
//                 {/* Phone input */}
//                 <div className="text-center">
//                     <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Phone Number"
//                     name="phone"
//                     />
//                     <div className="line"></div>
//                 </div>
//                 {/* Email input */}
//                 <div className="text-center">
//                     <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Email"
//                     name="email"
//                     />
//                     <div className="line"></div>
//                 </div>
//                 {/* Subject input */}
//                 <div className="text-center">
//                     <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Subject"
//                     name="subject"
//                     />
//                     <div className="line"></div>
//                 </div>
//                 </div>
//                 <div className="col-md-6 col-xs-12">
//                 {/* Description */}
//                 <div className="text-center">
//                     <textarea
//                     className="form-control"
//                     placeholder="Please describe shortly your project"
//                     name="description"
//                     ></textarea>
//                     <div className="line"></div>
//                 </div>
//                 <button className="btn-main-offer contact-btn" type="submit">
//                     contact me
//                 </button>
//                 </div>
//             </div>
//             </form>
//         </div>
//         </div>
//     );
// };

// export default Contacts;


import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState(""); // Changed to useState
  const { register, handleSubmit, formState: { errors } } = useForm(); // Correct way to use useForm
  const form = useRef();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const publicKey = "7C26gTgEP0D0q7CKe";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      publicKey
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, publicKey) => {
    emailjs.send(serviceID, templateID, variables, publicKey)
      .then(
        () => {
          setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
        }).catch(err => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contact me" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span> {/* Display success message */}
      </div>
      <div className="container">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* Name input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message: "Please enter a name with fewer than 20 characters"
                    }
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>
              </div>
              {/* Phone input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", {
                    required: "Please enter your phone number",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter a valid phone number"
                    }
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.phone && errors.phone.message}
                </span>
              </div>
              {/* Email input */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid Email"
                    }
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>
              </div>
              {/* Subject input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", {
                    required: "Oops you forgot to add the subject"
                  })}
                />
                <div className="line"></div>
                <span className="error-message">
                  {errors.subject && errors.subject.message}
                </span>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Description */}
              <div className="text-center">
                <textarea
                  className="form-control"
                  placeholder="Please describe your project shortly"
                  name="description"
                  {...register("description", {
                    required: "Please describe shortly your project needs..."
                  })}
                ></textarea>
                <div className="line"></div>
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;


