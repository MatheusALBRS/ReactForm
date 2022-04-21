import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form:", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required";
        console.log(errors.email);
      } else if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          values.email
        )
      ) {
        errors.email = "Username should be an email";
      }

      if (!values.password) {
        errors.password = "Field required";
        console.log(errors.password);
      }
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          email
          <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        </div>
        <div id="emailError" style={{ color: "red" }}>
          {formik.errors.email}
        </div>
        <div>
          password
          <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        </div>
        <div id="pswError" style={{ color: "red" }}>
          {formik.errors.password}
        </div>
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
