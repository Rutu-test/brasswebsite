// export default function ContactPage() {
//   return (
//     <main className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

//       <p>Email: contact@brasswebsite.com</p>
//     </main>
//   );
// }


"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${name}!`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">Contact Us</h1>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-white text-black rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}