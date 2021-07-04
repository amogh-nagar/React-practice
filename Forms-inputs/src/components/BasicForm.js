import useInput from "../hooks/user-input";

const BasicForm = () => {
  const {
    value: firstname,
    isValid: firstnameisvalid,
    hasError: firstnamehaserror,
    valueChangeHandler: firstnamechange,
    inputBlurHandler: firstnameblur,
    reset: firstnamereset,
  } = useInput((value) => value !== "");

  const {
    value: lastname,
    isValid: lastnameisvalid,
    hasError: lastnamehaserror,
    valueChangeHandler: lastnamechange,
    inputBlurHandler: lastnameblur,
    reset: lastnamereset,
  } = useInput((value) => value !== "");

  const {
    value: email,
    isValid: emailisvalid,
    hasError: emailhaserror,
    valueChangeHandler: emailchange,
    inputBlurHandler: emailblur,
    reset: emailreset,
  } = useInput((value) => value.includes("@"));

  let formisvalid = false;

  const firstnameclasses = firstnamehaserror
    ? "form-control invalid"
    : "form-control";
  const lastnameclasses = lastnamehaserror
    ? "form-control invalid"
    : "form-control";
  const emailclasses = emailhaserror ? "form-control invalid" : "form-control";

  if (firstnameisvalid || lastnameisvalid || emailisvalid) {
    formisvalid = true;
  }
  const formsubmit = (e) => {
    e.preventDefault();
    if (!formisvalid) {
      return;
    }
    console.log(firstname, lastname, email);
    firstnamereset();
    lastnamereset();
    emailreset();
  };

  return (
    <form onSubmit={formsubmit}>
      <div className="control-group">
        <div className={firstnameclasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={firstname}
            onChange={firstnamechange}
            type="text"
            id="name"
          />
          {firstnamehaserror && (
            <p className="error-text">Please enter a first name</p>
          )}
        </div>
        <div className={lastnameclasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            value={lastname}
            id="name"
            onChange={lastnamechange}
          />
          {lastnamehaserror && (
            <p className="error-text">Please enter a last name</p>
          )}
        </div>
      </div>
      <div className={emailclasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" value={email} onChange={emailchange} />
        {emailhaserror && <p className="error-text">Please enter an Email</p>}
      </div>
      {formisvalid && (
        <div className="form-control invalid">
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" id="name" onChange={emailchange} />
        </div>
      )}
      <div className="form-actions">
        <button disabled={!formisvalid}>Submit</button>
      </div>
    </form>
  );
};


// Formik

export default BasicForm;
