import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const Test = () => {
  const { control, handleSubmit } = useForm();
  const [fields, setFields] = useState([{ id: 1, fieldName: "" }]);

  const handleAddField = () => {
    const newField = {
      id: fields.length + 1,
      fieldName: "",
    };
    setFields([...fields, newField]);
  };

  const handleRemoveField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);
  };

  const onSubmit = (data) => {
    // Filter out the removed fields
    const activeFields = fields.filter((field) =>
      Object.keys(data).includes(`field${field.id}`)
    );

    // Restructuring the form data into an array of objects
    const formDataArray = activeFields.map((field) => ({
      id: field.id,
      fieldName: data[`field${field.id}`],
    }));
    console.log(formDataArray);
  };
  return (
    <div className="max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <div key={field.id} className="mb-4">
            <div className="flex">
              <Controller
                name={`field${field.id}`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Field Name"
                    onChange={(e) => {
                      field.onChange(e);
                      const updatedFields = [...fields];
                      const index = updatedFields.findIndex(
                        (f) => f.id === field.id
                      );
                      updatedFields[index].fieldName = e.target.value;
                      setFields(updatedFields);
                    }}
                  />
                )}
              />
              <button
                type="button"
                className="ml-2 py-2 px-4 bg-red-500 text-white rounded-md focus:outline-none focus:bg-red-600"
                onClick={() => handleRemoveField(field.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="mb-4 py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600"
          onClick={handleAddField}
        >
          Add More Field
        </button>
        <button
          type="submit"
          className="py-2 px-4 bg-green-500 text-white rounded-md focus:outline-none focus:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
