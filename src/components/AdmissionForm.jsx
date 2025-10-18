// // src/components/AdmissionForm.jsx
// import React, { useState } from "react";

// export default function AdmissionForm() {
//   // ✅ Toggle: set to true for staff, false for parents
//   const adminMode = false;

//   const [step, setStep] = useState(1);
//   const [passportPreview, setPassportPreview] = useState(null);
//   const [error, setError] = useState("");

//   const [form, setForm] = useState({
//     student: {
//       firstName: "",
//       lastName: "",
//       dob: "",
//       gender: "",
//       nationality: "",
//       religion: "",
//       classApplying: "",
//       siblings: [{ name: "", age: "", class: "" }],
//       previousSchools: [{ name: "", years: "" }],
//       passport: null,
//     },
//     family: {
//       fatherName: "",
//       fatherOccupation: "",
//       fatherContact: "",
//       fatherAddress: "",
//       motherName: "",
//       motherOccupation: "",
//       motherContact: "",
//       motherAddress: "",
//       guardianName: "",
//       guardianRelation: "",
//       guardianContact: "",
//       guardianAddress: "",
//     },
//     medical: {
//       conditions: "",
//       allergies: "",
//       asthma: "",
//       other: "",
//       medications: [{ name: "", dosage: "", frequency: "" }],
//       doctorName: "",
//       doctorContact: "",
//     },
//     declaration: {
//       parentSignature: "",
//       date: "",
//     },
//     official: {
//       admissionNumber: "",
//       dateAdmitted: "",
//       classPlaced: "",
//       house: "",
//     },
//   });

//   const update = (path, value) => {
//     const keys = path.split(".");
//     setForm((prev) => {
//       const updated = { ...prev };
//       let obj = updated;
//       for (let i = 0; i < keys.length - 1; i++) {
//         obj[keys[i]] = { ...obj[keys[i]] };
//         obj = obj[keys[i]];
//       }
//       obj[keys[keys.length - 1]] = value;
//       return updated;
//     });
//   };

//   const addItem = (path, template) => {
//     const keys = path.split(".");
//     setForm((prev) => {
//       const updated = { ...prev };
//       let arr = updated;
//       for (let i = 0; i < keys.length; i++) arr = arr[keys[i]];
//       arr.push({ ...template });
//       return { ...prev };
//     });
//   };

//   const handlePassportChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // Validate size
//     if (file.size > 2 * 1024 * 1024) {
//       setError("Passport size must not exceed 2MB.");
//       return;
//     }

//     const img = new Image();
//     img.onload = () => {
//       if (img.width !== 160 || img.height !== 200) {
//         setError("Passport photo must be exactly 160x200 pixels.");
//         return;
//       }
//       setError("");
//       update("student.passport", file);
//       setPassportPreview(URL.createObjectURL(file));
//     };
//     img.src = URL.createObjectURL(file);
//   };

//   const next = () => setStep((s) => Math.min(s + 1, adminMode ? 6 : 5));
//   const back = () => setStep((s) => Math.max(s - 1, 1));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Form:", form);
//     alert("Form submitted successfully!");
//   };

//   const steps = [
//     { id: 1, label: "Student Info" },
//     { id: 2, label: "Family Info" },
//     { id: 3, label: "Medical Info" },
//     { id: 4, label: "Declaration" },
//     ...(adminMode
//       ? [
//           { id: 5, label: "Official Use" },
//           { id: 6, label: "Summary" },
//         ]
//       : [{ id: 5, label: "Summary" }]),
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Banner */}
//       <header className="bg-gradient-to-r from-orange-500 via-black to-orange-600 text-white py-12 px-4 text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold py-2">
//           Admission Form
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200">
//           Kindly fill in all required details to complete your child’s admission
//           process.
//         </p>
//         <p className="mt-3 text-lg">Join our community of learners</p>
//       </header>

//       <main className="max-w-5xl mx-auto p-6">
//         {/* Step Indicator */}
//         <div className="flex items-center justify-between mb-8">
//           {steps.map((s) => (
//             <div
//               key={s.id}
//               className={`flex-1 text-center border-b-4 pb-2 ${
//                 step === s.id
//                   ? "border-orange-500 text-orange-600 font-semibold"
//                   : "border-gray-200 text-gray-500"
//               }`}
//             >
//               {s.label}
//             </div>
//           ))}
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow rounded-2xl p-6 space-y-6"
//         >
//           {/* Step 1: Student Info */}
//           {step === 1 && (
//             <div className="space-y-4">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={form.student.firstName}
//                   onChange={(e) => update("student.firstName", e.target.value)}
//                   className="border p-2 rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={form.student.lastName}
//                   onChange={(e) => update("student.lastName", e.target.value)}
//                   className="border p-2 rounded"
//                 />
//                 <input
//                   type="date"
//                   value={form.student.dob}
//                   onChange={(e) => update("student.dob", e.target.value)}
//                   className="border p-2 rounded"
//                 />
//                 <select
//                   value={form.student.gender}
//                   onChange={(e) => update("student.gender", e.target.value)}
//                   className="border p-2 rounded"
//                 >
//                   <option value="">Select Gender</option>
//                   <option>Male</option>
//                   <option>Female</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="Nationality"
//                   value={form.student.nationality}
//                   onChange={(e) =>
//                     update("student.nationality", e.target.value)
//                   }
//                   className="border p-2 rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Religion"
//                   value={form.student.religion}
//                   onChange={(e) => update("student.religion", e.target.value)}
//                   className="border p-2 rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Class Applying For"
//                   value={form.student.classApplying}
//                   onChange={(e) =>
//                     update("student.classApplying", e.target.value)
//                   }
//                   className="border p-2 rounded"
//                 />
//               </div>

//               {/* Passport Upload */}
//               <div>
//                 <h3 className="font-semibold mb-2">
//                   Passport Picture (160x200, Max 2MB)
//                 </h3>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handlePassportChange}
//                   className="border p-2 rounded w-full"
//                 />
//                 {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
//                 {passportPreview && (
//                   <div className="mt-3">
//                     <img
//                       src={passportPreview}
//                       alt="Passport Preview"
//                       className="w-40 h-52 object-cover border rounded-lg shadow-md"
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Previous Schools */}
//               <div>
//                 <h3 className="font-semibold mb-2">Previous Schools</h3>
//                 {form.student.previousSchools.map((s, i) => (
//                   <div key={i} className="grid md:grid-cols-2 gap-2 mb-2">
//                     <input
//                       type="text"
//                       placeholder="School Name"
//                       value={s.name}
//                       onChange={(e) =>
//                         update(
//                           `student.previousSchools.${i}.name`,
//                           e.target.value
//                         )
//                       }
//                       className="border p-2 rounded"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Years Attended"
//                       value={s.years}
//                       onChange={(e) =>
//                         update(
//                           `student.previousSchools.${i}.years`,
//                           e.target.value
//                         )
//                       }
//                       className="border p-2 rounded"
//                     />
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() =>
//                     addItem("student.previousSchools", { name: "", years: "" })
//                   }
//                   className="text-orange-600"
//                 >
//                   + Add Previous School
//                 </button>
//               </div>

//               {/* Siblings */}
//               <div>
//                 <h3 className="font-semibold mb-2">Siblings</h3>
//                 {form.student.siblings.map((s, i) => (
//                   <div key={i} className="grid md:grid-cols-3 gap-2 mb-2">
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       value={s.name}
//                       onChange={(e) =>
//                         update(`student.siblings.${i}.name`, e.target.value)
//                       }
//                       className="border p-2 rounded"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Age"
//                       value={s.age}
//                       onChange={(e) =>
//                         update(`student.siblings.${i}.age`, e.target.value)
//                       }
//                       className="border p-2 rounded"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Class"
//                       value={s.school}
//                       onChange={(e) =>
//                         update(`student.siblings.${i}.school`, e.target.value)
//                       }
//                       className="border p-2 rounded"
//                     />
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() =>
//                     addItem("student.siblings", {
//                       name: "",
//                       age: "",
//                       school: "",
//                     })
//                   }
//                   className="text-orange-600"
//                 >
//                   + Add Sibling
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 2: Family Info */}
//           {step === 2 && (
//             <div className="grid md:grid-cols-2 gap-4">
//               {/* Father */}
//               <input
//                 type="text"
//                 placeholder="Father's Name"
//                 value={form.family.fatherName}
//                 onChange={(e) => update("family.fatherName", e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Father's Occupation"
//                 value={form.family.fatherOccupation}
//                 onChange={(e) =>
//                   update("family.fatherOccupation", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Father's Contact"
//                 value={form.family.fatherContact}
//                 onChange={(e) => update("family.fatherContact", e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Father's Address"
//                 value={form.family.fatherAddress}
//                 onChange={(e) => update("family.fatherAddress", e.target.value)}
//                 className="border p-2 rounded"
//               />

//               {/* Mother */}
//               <input
//                 type="text"
//                 placeholder="Mother's Name"
//                 value={form.family.motherName}
//                 onChange={(e) => update("family.motherName", e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Mother's Occupation"
//                 value={form.family.motherOccupation}
//                 onChange={(e) =>
//                   update("family.motherOccupation", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Mother's Contact"
//                 value={form.family.motherContact}
//                 onChange={(e) => update("family.motherContact", e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Mother's Address"
//                 value={form.family.motherAddress}
//                 onChange={(e) => update("family.motherAddress", e.target.value)}
//                 className="border p-2 rounded"
//               />

//               {/* Guardian */}
//               <input
//                 type="text"
//                 placeholder="Guardian's Name"
//                 value={form.family.guardianName}
//                 onChange={(e) => update("family.guardianName", e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Guardian Relation"
//                 value={form.family.guardianRelation}
//                 onChange={(e) =>
//                   update("family.guardianRelation", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Guardian Contact"
//                 value={form.family.guardianContact}
//                 onChange={(e) =>
//                   update("family.guardianContact", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Guardian Address"
//                 value={form.family.guardianAddress}
//                 onChange={(e) =>
//                   update("family.guardianAddress", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//             </div>
//           )}

//           {/* Step 3: Medical Info */}
//           {step === 3 && (
//             <div className="space-y-3">
//               <textarea
//                 placeholder="Medical Conditions"
//                 value={form.medical.conditions}
//                 onChange={(e) => update("medical.conditions", e.target.value)}
//                 className="border p-2 rounded w-full"
//               />
//               <textarea
//                 placeholder="Allergies"
//                 value={form.medical.allergies}
//                 onChange={(e) => update("medical.allergies", e.target.value)}
//                 className="border p-2 rounded w-full"
//               />
//               <textarea
//                 placeholder="Asthma or Breathing Issues"
//                 value={form.medical.asthma}
//                 onChange={(e) => update("medical.asthma", e.target.value)}
//                 className="border p-2 rounded w-full"
//               />
//               <textarea
//                 placeholder="Other Medical Notes"
//                 value={form.medical.other}
//                 onChange={(e) => update("medical.other", e.target.value)}
//                 className="border p-2 rounded w-full"
//               />

//               {/* Medications */}
//               <div>
//                 <h3 className="font-semibold mb-2">Medications</h3>
//                 {form.medical.medications.map((m, i) => (
//                   <div key={i} className="grid md:grid-cols-3 gap-2 mb-2">
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       value={m.name}
//                       onChange={(e) =>
//                         update(`medical.medications.${i}.name`, e.target.value)
//                       }
//                       className="border p-2 rounded"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Dosage"
//                       value={m.dosage}
//                       onChange={(e) =>
//                         update(
//                           `medical.medications.${i}.dosage`,
//                           e.target.value
//                         )
//                       }
//                       className="border p-2 rounded"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Frequency"
//                       value={m.frequency}
//                       onChange={(e) =>
//                         update(
//                           `medical.medications.${i}.frequency`,
//                           e.target.value
//                         )
//                       }
//                       className="border p-2 rounded"
//                     />
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() =>
//                     addItem("medical.medications", {
//                       name: "",
//                       dosage: "",
//                       frequency: "",
//                     })
//                   }
//                   className="text-orange-600"
//                 >
//                   + Add Medication
//                 </button>
//               </div>

//               {/* Doctor Info */}
//               <input
//                 type="text"
//                 placeholder="Doctor's Name"
//                 value={form.medical.doctorName}
//                 onChange={(e) => update("medical.doctorName", e.target.value)}
//                 className="border p-2 rounded w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Doctor's Contact"
//                 value={form.medical.doctorContact}
//                 onChange={(e) =>
//                   update("medical.doctorContact", e.target.value)
//                 }
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//           )}

//           {/* Step 4: Declaration */}
//           {step === 4 && (
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Parent/Guardian Signature"
//                 value={form.declaration.parentSignature}
//                 onChange={(e) =>
//                   update("declaration.parentSignature", e.target.value)
//                 }
//                 className="border p-2 rounded w-full"
//               />
//               <input
//                 type="date"
//                 value={form.declaration.date}
//                 onChange={(e) => update("declaration.date", e.target.value)}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//           )}

//           {/* Step 5: Official Use (Admin Only) */}
//           {adminMode && step === 5 && (
//             <div className="grid md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Admission Number"
//                 value={form.official.admissionNumber}
//                 onChange={(e) =>
//                   update("official.admissionNumber", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="date"
//                 placeholder="Date Admitted"
//                 value={form.official.dateAdmitted}
//                 onChange={(e) =>
//                   update("official.dateAdmitted", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Class Placed"
//                 value={form.official.classPlaced}
//                 onChange={(e) => update("official.classPlaced", e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="House"
//                 value={form.official.house}
//                 onChange={(e) => update("official.house", e.target.value)}
//                 className="border p-2 rounded"
//               />
//             </div>
//           )}

//           {/* Final Step: Summary */}
//           {((adminMode && step === 6) || (!adminMode && step === 5)) && (
//             <div className="text-gray-700 space-y-4">
//               <h2 className="font-bold text-lg">Review Your Submission</h2>
//               <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
//                 {JSON.stringify(form, null, 2)}
//               </pre>
//             </div>
//           )}

//           {/* Navigation Buttons */}
//           <div className="flex justify-between pt-4">
//             {step > 1 ? (
//               <button
//                 type="button"
//                 onClick={back}
//                 className="px-4 py-2 rounded bg-black text-white"
//               >
//                 Back
//               </button>
//             ) : (
//               <div />
//             )}
//             {((adminMode && step < 6) || (!adminMode && step < 5)) && (
//               <button
//                 type="button"
//                 onClick={next}
//                 className="px-4 py-2 rounded bg-orange-500 text-white"
//               >
//                 Next
//               </button>
//             )}
//             {((adminMode && step === 6) || (!adminMode && step === 5)) && (
//               <button
//                 type="submit"
//                 className="px-6 py-2 rounded bg-orange-600 text-white font-semibold"
//               >
//                 Submit
//               </button>
//             )}
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }

// import React, { useState } from "react";

// const AdmissionForm = () => {
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({
//     student: {
//       firstName: "",
//       lastName: "",
//       dob: "",
//       gender: "",
//       nationality: "",
//       religion: "",
//       classApplying: "",
//       siblings: [{ name: "", age: "", class: "" }],
//       previousSchools: [{ name: "", years: "" }],
//       passport: null,
//     },
//     family: {
//       fatherName: "",
//       fatherOccupation: "",
//       fatherContact: "",
//       fatherAddress: "",
//       fatherMaritalStatus: "",
//       motherName: "",
//       motherOccupation: "",
//       motherContact: "",
//       motherAddress: "",
//       motherMaritalStatus: "",
//       guardianName: "",
//       guardianRelation: "",
//       guardianContact: "",
//       guardianAddress: "",
//     },
//     medical: {
//       conditions: "",
//       allergies: "",
//       asthma: "",
//       other: "",
//       medications: [{ name: "", dosage: "", frequency: "" }],
//       doctorName: "",
//       doctorContact: "",
//     },
//     declaration: {
//       parentSignature: "",
//       date: "",
//     },
//     official: {
//       admissionNumber: "",
//       dateAdmitted: "",
//       classPlaced: "",
//       house: "",
//     },
//   });

//   const handleChange = (section, field, value, index, subfield) => {
//     setForm((prev) => {
//       const updated = { ...prev };
//       if (index !== undefined && subfield) {
//         updated[section][field][index][subfield] = value;
//       } else if (index !== undefined) {
//         updated[section][field][index] = value;
//       } else {
//         updated[section][field] = value;
//       }
//       return updated;
//     });
//   };

//   const addDynamicField = (section, field, template) => {
//     setForm((prev) => {
//       const updated = { ...prev };
//       updated[section][field].push(template);
//       return updated;
//     });
//   };

//   const removeDynamicField = (section, field, index) => {
//     setForm((prev) => {
//       const updated = { ...prev };
//       updated[section][field].splice(index, 1);
//       return updated;
//     });
//   };

//   const nextStep = () => setStep((s) => Math.min(s + 1, 6));
//   const prevStep = () => setStep((s) => Math.max(s - 1, 1));

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Banner */}
//       <header className="bg-gradient-to-r from-orange-500 via-black to-orange-600 text-white py-12 px-4 text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold py-2">
//           Admission Form
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200">
//           Kindly fill in all required details to complete your child’s admission
//           process.
//         </p>
//         <p className="mt-3 text-lg">Join our community of learners</p>
//       </header>

//       {/* Progress Steps */}
//       <div className="flex justify-center space-x-4 my-6">
//         {[
//           "Student",
//           "Family",
//           "Medical",
//           "Declaration",
//           "Official",
//           "Review",
//         ].map((label, i) => (
//           <div
//             key={i}
//             className={`px-4 py-2 rounded-full text-sm ${
//               step === i + 1
//                 ? "bg-orange-600 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             {label}
//           </div>
//         ))}
//       </div>

//       {/* Form Container */}
//       <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">
//         {step === 1 && (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Student Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 value={form.student.firstName}
//                 onChange={(e) =>
//                   handleChange("student", "firstName", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 value={form.student.lastName}
//                 onChange={(e) =>
//                   handleChange("student", "lastName", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="date"
//                 value={form.student.dob}
//                 onChange={(e) => handleChange("student", "dob", e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <select
//                 value={form.student.gender}
//                 onChange={(e) =>
//                   handleChange("student", "gender", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               >
//                 <option value="">Select Gender</option>
//                 <option>Male</option>
//                 <option>Female</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="Nationality"
//                 value={form.student.nationality}
//                 onChange={(e) =>
//                   handleChange("student", "nationality", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Religion"
//                 value={form.student.religion}
//                 onChange={(e) =>
//                   handleChange("student", "religion", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Class Applying For"
//                 value={form.student.classApplying}
//                 onChange={(e) =>
//                   handleChange("student", "classApplying", e.target.value)
//                 }
//                 className="border p-2 rounded"
//               />
//             </div>

//             {/* Passport Upload */}
//             <div className="mt-4">
//               <label className="block mb-2 font-semibold">
//                 Upload Passport Picture (160x200, max 2MB)
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) =>
//                   handleChange("student", "passport", e.target.files[0])
//                 }
//                 className="border p-2 rounded w-full"
//               />
//             </div>

//             {/* Siblings */}
//             <div className="mt-6">
//               <h3 className="text-lg font-semibold mb-2">Siblings</h3>
//               {form.student.siblings.map((sibling, idx) => (
//                 <div
//                   key={idx}
//                   className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     value={sibling.name}
//                     onChange={(e) =>
//                       handleChange(
//                         "student",
//                         "siblings",
//                         e.target.value,
//                         idx,
//                         "name"
//                       )
//                     }
//                     className="border p-2 rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Age"
//                     value={sibling.age}
//                     onChange={(e) =>
//                       handleChange(
//                         "student",
//                         "siblings",
//                         e.target.value,
//                         idx,
//                         "age"
//                       )
//                     }
//                     className="border p-2 rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Class"
//                     value={sibling.class}
//                     onChange={(e) =>
//                       handleChange(
//                         "student",
//                         "siblings",
//                         e.target.value,
//                         idx,
//                         "class"
//                       )
//                     }
//                     className="border p-2 rounded"
//                   />
//                   <button
//                     type="button"
//                     onClick={() =>
//                       removeDynamicField("student", "siblings", idx)
//                     }
//                     className="text-red-600 text-sm col-span-1"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() =>
//                   addDynamicField("student", "siblings", {
//                     name: "",
//                     age: "",
//                     class: "",
//                   })
//                 }
//                 className="bg-orange-600 text-white px-4 py-2 rounded"
//               >
//                 Add Sibling
//               </button>
//             </div>

//             {/* Previous Schools */}
//             <div className="mt-6">
//               <h3 className="text-lg font-semibold mb-2">Previous Schools</h3>
//               {form.student.previousSchools.map((school, idx) => (
//                 <div
//                   key={idx}
//                   className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2"
//                 >
//                   <input
//                     type="text"
//                     placeholder="School Name"
//                     value={school.name}
//                     onChange={(e) =>
//                       handleChange(
//                         "student",
//                         "previousSchools",
//                         e.target.value,
//                         idx,
//                         "name"
//                       )
//                     }
//                     className="border p-2 rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Years Attended"
//                     value={school.years}
//                     onChange={(e) =>
//                       handleChange(
//                         "student",
//                         "previousSchools",
//                         e.target.value,
//                         idx,
//                         "years"
//                       )
//                     }
//                     className="border p-2 rounded"
//                   />
//                   <button
//                     type="button"
//                     onClick={() =>
//                       removeDynamicField("student", "previousSchools", idx)
//                     }
//                     className="text-red-600 text-sm col-span-1"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() =>
//                   addDynamicField("student", "previousSchools", {
//                     name: "",
//                     years: "",
//                   })
//                 }
//                 className="bg-orange-600 text-white px-4 py-2 rounded"
//               >
//                 Add School
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Navigation */}
//         <div className="flex justify-between mt-6">
//           {step > 1 && (
//             <button
//               onClick={prevStep}
//               className="bg-gray-400 text-white px-6 py-2 rounded"
//             >
//               Previous
//             </button>
//           )}
//           {step < 6 ? (
//             <button
//               onClick={nextStep}
//               className="bg-orange-600 text-white px-6 py-2 rounded"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-6 py-2 rounded"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdmissionForm;

import React, { useState } from "react";

const AdmissionForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    student: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      nationality: "",
      religion: "",
      classApplying: "",
      siblings: [{ name: "", age: "", class: "" }],
      previousSchools: [{ name: "", years: "" }],
      passport: null,
    },
    family: {
      fatherName: "",
      fatherOccupation: "",
      fatherContact: "",
      fatherAddress: "",
      fatherMaritalStatus: "",
      motherName: "",
      motherOccupation: "",
      motherContact: "",
      motherAddress: "",
      motherMaritalStatus: "",
      guardianName: "",
      guardianRelation: "",
      guardianContact: "",
      guardianAddress: "",
    },
    medical: {
      conditions: "",
      allergies: "",
      asthma: "",
      other: "",
      medications: [{ name: "", dosage: "", frequency: "" }],
      doctorName: "",
      doctorContact: "",
    },
    declaration: {
      parentSignature: "",
      date: "",
    },
    official: {
      admissionNumber: "",
      dateAdmitted: "",
      classPlaced: "",
      house: "",
    },
  });

  const handleChange = (section, field, value, index, subfield) => {
    setForm((prev) => {
      const updated = { ...prev };
      if (index !== undefined && subfield) {
        updated[section][field][index][subfield] = value;
      } else if (index !== undefined) {
        updated[section][field][index] = value;
      } else {
        updated[section][field] = value;
      }
      return updated;
    });
  };

  const addDynamicField = (section, field, template) => {
    setForm((prev) => {
      const updated = { ...prev };
      updated[section][field].push(template);
      return updated;
    });
  };

  const removeDynamicField = (section, field, index) => {
    setForm((prev) => {
      const updated = { ...prev };
      updated[section][field].splice(index, 1);
      return updated;
    });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <header className="bg-gradient-to-r from-orange-500 via-black to-orange-600 text-white py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold py-2">
          Admission Form
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Kindly fill in all required details to complete your child’s admission
          process.
        </p>
        <p className="mt-3 text-lg">Join our community of learners</p>
      </header>

      {/* Progress Steps */}
      <div className="flex justify-center space-x-4 my-6">
        {[
          "Student",
          "Family",
          "Medical",
          "Declaration",
          "Official",
          "Review",
        ].map((label, i) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-full text-sm ${
              step === i + 1
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8"
      >
        {/* STEP 1: Student */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Student Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={form.student.firstName}
                onChange={(e) =>
                  handleChange("student", "firstName", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={form.student.lastName}
                onChange={(e) =>
                  handleChange("student", "lastName", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="date"
                value={form.student.dob}
                onChange={(e) => handleChange("student", "dob", e.target.value)}
                className="border p-2 rounded"
              />
              <select
                value={form.student.gender}
                onChange={(e) =>
                  handleChange("student", "gender", e.target.value)
                }
                className="border p-2 rounded"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="text"
                placeholder="Nationality"
                value={form.student.nationality}
                onChange={(e) =>
                  handleChange("student", "nationality", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Religion"
                value={form.student.religion}
                onChange={(e) =>
                  handleChange("student", "religion", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Class Applying For"
                value={form.student.classApplying}
                onChange={(e) =>
                  handleChange("student", "classApplying", e.target.value)
                }
                className="border p-2 rounded"
              />
            </div>

            {/* Passport */}
            <div className="mt-4">
              <label className="block mb-2 font-semibold">
                Upload Passport Picture (160x200, max 2MB)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleChange("student", "passport", e.target.files[0])
                }
                className="border p-2 rounded w-full"
              />
            </div>

            {/* Siblings */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Siblings</h3>
              {form.student.siblings.map((sibling, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    value={sibling.name}
                    onChange={(e) =>
                      handleChange(
                        "student",
                        "siblings",
                        e.target.value,
                        idx,
                        "name"
                      )
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Age"
                    value={sibling.age}
                    onChange={(e) =>
                      handleChange(
                        "student",
                        "siblings",
                        e.target.value,
                        idx,
                        "age"
                      )
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Class"
                    value={sibling.class}
                    onChange={(e) =>
                      handleChange(
                        "student",
                        "siblings",
                        e.target.value,
                        idx,
                        "class"
                      )
                    }
                    className="border p-2 rounded"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      removeDynamicField("student", "siblings", idx)
                    }
                    className="text-red-600 text-sm col-span-1"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addDynamicField("student", "siblings", {
                    name: "",
                    age: "",
                    class: "",
                  })
                }
                className="bg-orange-600 text-white px-4 py-2 rounded"
              >
                Add Sibling
              </button>
            </div>

            {/* Previous Schools */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Previous Schools</h3>
              {form.student.previousSchools.map((school, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2"
                >
                  <input
                    type="text"
                    placeholder="School Name"
                    value={school.name}
                    onChange={(e) =>
                      handleChange(
                        "student",
                        "previousSchools",
                        e.target.value,
                        idx,
                        "name"
                      )
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Years Attended"
                    value={school.years}
                    onChange={(e) =>
                      handleChange(
                        "student",
                        "previousSchools",
                        e.target.value,
                        idx,
                        "years"
                      )
                    }
                    className="border p-2 rounded"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      removeDynamicField("student", "previousSchools", idx)
                    }
                    className="text-red-600 text-sm col-span-1"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addDynamicField("student", "previousSchools", {
                    name: "",
                    years: "",
                  })
                }
                className="bg-orange-600 text-white px-4 py-2 rounded"
              >
                Add School
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Family */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Family Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Father's Name"
                value={form.family.fatherName}
                onChange={(e) =>
                  handleChange("family", "fatherName", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Father's Occupation"
                value={form.family.fatherOccupation}
                onChange={(e) =>
                  handleChange("family", "fatherOccupation", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Father's Contact"
                value={form.family.fatherContact}
                onChange={(e) =>
                  handleChange("family", "fatherContact", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Father's Address"
                value={form.family.fatherAddress}
                onChange={(e) =>
                  handleChange("family", "fatherAddress", e.target.value)
                }
                className="border p-2 rounded"
              />
              <select
                value={form.family.fatherMaritalStatus}
                onChange={(e) =>
                  handleChange("family", "fatherMaritalStatus", e.target.value)
                }
                className="border p-2 rounded"
              >
                <option value="">Father Marital Status</option>
                <option>Married</option>
                <option>Single</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
              <input
                type="text"
                placeholder="Mother's Name"
                value={form.family.motherName}
                onChange={(e) =>
                  handleChange("family", "motherName", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Mother's Occupation"
                value={form.family.motherOccupation}
                onChange={(e) =>
                  handleChange("family", "motherOccupation", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Mother's Contact"
                value={form.family.motherContact}
                onChange={(e) =>
                  handleChange("family", "motherContact", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Mother's Address"
                value={form.family.motherAddress}
                onChange={(e) =>
                  handleChange("family", "motherAddress", e.target.value)
                }
                className="border p-2 rounded"
              />
              <select
                value={form.family.motherMaritalStatus}
                onChange={(e) =>
                  handleChange("family", "motherMaritalStatus", e.target.value)
                }
                className="border p-2 rounded"
              >
                <option value="">Mother Marital Status</option>
                <option>Married</option>
                <option>Single</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
              <input
                type="text"
                placeholder="Guardian's Name"
                value={form.family.guardianName}
                onChange={(e) =>
                  handleChange("family", "guardianName", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Relation"
                value={form.family.guardianRelation}
                onChange={(e) =>
                  handleChange("family", "guardianRelation", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Guardian's Contact"
                value={form.family.guardianContact}
                onChange={(e) =>
                  handleChange("family", "guardianContact", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Guardian's Address"
                value={form.family.guardianAddress}
                onChange={(e) =>
                  handleChange("family", "guardianAddress", e.target.value)
                }
                className="border p-2 rounded"
              />
            </div>
          </div>
        )}

        {/* STEP 3: Medical */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Medical Information</h2>
            <textarea
              placeholder="Conditions"
              value={form.medical.conditions}
              onChange={(e) =>
                handleChange("medical", "conditions", e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              placeholder="Allergies"
              value={form.medical.allergies}
              onChange={(e) =>
                handleChange("medical", "allergies", e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              placeholder="Asthma"
              value={form.medical.asthma}
              onChange={(e) =>
                handleChange("medical", "asthma", e.target.value)
              }
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              placeholder="Other"
              value={form.medical.other}
              onChange={(e) => handleChange("medical", "other", e.target.value)}
              className="border p-2 rounded w-full mb-2"
            />

            {/* Medications */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Medications</h3>
              {form.medical.medications.map((med, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    value={med.name}
                    onChange={(e) =>
                      handleChange(
                        "medical",
                        "medications",
                        e.target.value,
                        idx,
                        "name"
                      )
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Dosage"
                    value={med.dosage}
                    onChange={(e) =>
                      handleChange(
                        "medical",
                        "medications",
                        e.target.value,
                        idx,
                        "dosage"
                      )
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Frequency"
                    value={med.frequency}
                    onChange={(e) =>
                      handleChange(
                        "medical",
                        "medications",
                        e.target.value,
                        idx,
                        "frequency"
                      )
                    }
                    className="border p-2 rounded"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      removeDynamicField("medical", "medications", idx)
                    }
                    className="text-red-600 text-sm col-span-1"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addDynamicField("medical", "medications", {
                    name: "",
                    dosage: "",
                    frequency: "",
                  })
                }
                className="bg-orange-600 text-white px-4 py-2 rounded"
              >
                Add Medication
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <input
                type="text"
                placeholder="Doctor's Name"
                value={form.medical.doctorName}
                onChange={(e) =>
                  handleChange("medical", "doctorName", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Doctor's Contact"
                value={form.medical.doctorContact}
                onChange={(e) =>
                  handleChange("medical", "doctorContact", e.target.value)
                }
                className="border p-2 rounded"
              />
            </div>
          </div>
        )}

        {/* STEP 4: Declaration */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Declaration</h2>
            <input
              type="text"
              placeholder="Parent/Guardian Signature"
              value={form.declaration.parentSignature}
              onChange={(e) =>
                handleChange("declaration", "parentSignature", e.target.value)
              }
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="date"
              value={form.declaration.date}
              onChange={(e) =>
                handleChange("declaration", "date", e.target.value)
              }
              className="border p-2 rounded w-full"
            />
          </div>
        )}

        {/* STEP 5: Official */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Official Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Admission Number"
                value={form.official.admissionNumber}
                onChange={(e) =>
                  handleChange("official", "admissionNumber", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="date"
                value={form.official.dateAdmitted}
                onChange={(e) =>
                  handleChange("official", "dateAdmitted", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Class Placed"
                value={form.official.classPlaced}
                onChange={(e) =>
                  handleChange("official", "classPlaced", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="House"
                value={form.official.house}
                onChange={(e) =>
                  handleChange("official", "house", e.target.value)
                }
                className="border p-2 rounded"
              />
            </div>
          </div>
        )}

        {/* STEP 6: Review */}
        {step === 6 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Review & Submit</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {JSON.stringify(form, null, 2)}
            </pre>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
          )}
          {step < 6 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-orange-600 text-white px-4 py-2 rounded ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
