import React from "react";
import { useFormState } from "react-dom";

function Submit() {
  const { pending } = useFormState();
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </p>
  );
}

export default Submit;
