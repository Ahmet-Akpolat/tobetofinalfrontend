import { ErrorMessage, Field } from "formik";

function FormikInput({ name, type, className, placeholder, as, rows }: any) {
  return (
    <div style={{ width: "80%" }}>
      <Field
        name={name}
        type={type || "text"}
        className={className}
        placeholder={placeholder}
        as={as || null}
        rows={rows}
      />
      <div>
        <ErrorMessage name={name}>
          {(message) => <span className="text-danger">{message}</span>}
        </ErrorMessage>
      </div>
    </div>
  );
}

export default FormikInput;
