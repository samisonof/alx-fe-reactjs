import React from 'react';
import { useFormik } from 'formik';


const AddRecipeForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string().required('Recipe title is required'),
    ingredients: Yup.string()
      .required('Ingredients are required')
      .test('min-ingredients', 'At least two ingredients are required', (value) => {
        return value && value.split(',').length >= 2;
      }),
    steps: Yup.string().required('Preparation steps are required'),
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      title: '',
      ingredients: '',
      steps: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission
      console.log(values);

      // Clear the form after submission
      resetForm();
    },
  });

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Recipe</h1>

      <form onSubmit={formik.handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border ${formik.errors.title && formik.touched.title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            placeholder="Enter recipe title"
          />
          {formik.errors.title && formik.touched.title && (
            <p className="text-red-500 text-sm">{formik.errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700">Ingredients (comma-separated)</label>
          <textarea
            name="ingredients"
            value={formik.values.ingredients}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border ${formik.errors.ingredients && formik.touched.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            rows="3"
            placeholder="e.g., flour, sugar, butter"
          />
          {formik.errors.ingredients && formik.touched.ingredients && (
            <p className="text-red-500 text-sm">{formik.errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            name="steps"
            value={formik.values.steps}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border ${formik.errors.steps && formik.touched.steps ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            rows="5"
            placeholder="Enter preparation steps"
          />
          {formik.errors.steps && formik.touched.steps && (
            <p className="text-red-500 text-sm">{formik.errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
