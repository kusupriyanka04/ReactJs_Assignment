import React, { useReducer } from "react";
import { formReducer, initialState } from "../reducer/formReducer";

const MultiForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { step, formData, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <>
        <h2>Form Submitted Successfully</h2>
        <h3>Name: {formData.name}</h3>
        <h3>Email: {formData.email}</h3>
        <h3>Password: {formData.password}</h3>

        <button onClick={()=> dispatch({type: "PREVIOUS_STEP"})}>Back</button>
      </>
    );
  }
  return (
    <>
      {step === 1 && 
        <div style={{ width: "30%", margin: "auto", marginTop: "100px" }}>
          <h1>Step 1</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Name"
            style={{ width: "100%", marginBottom: "10px" }}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            style={{ width: "100%", marginBottom: "10px" }}
            onChange={handleChange}
          />
          <br></br>
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        </div>
      }

      {step === 2 && (
        <div style={{ width: "30%", margin: "auto", marginTop: "100px" }}>
          <h1>Step 2</h1>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            placeholder="Enter UseName"
            style={{ width: "100%", marginBottom: 10 }}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            style={{ width: "100%", marginBottom: "10px" }}
            onChange={handleChange}
          />
          <br></br>
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        </div>
      )}

    {
        step === 3 && (
            <>
        <h2>Review Session</h2>
        <h3>Name: {formData.name}</h3>
        <h3>Email: {formData.email}</h3>
        <h3>Password: {formData.password}</h3>

        <button onClick={()=> dispatch({type: "PREVIOUS_STEP"})}>Back</button>
        <button onClick={()=> dispatch({type: "SUBMIT_FORM"})}>Back</button>
      </>
        )
    }
    </>
  );
};

export default MultiForm;
