import React from "react";

export default function MemberInfo() {
  const sectionInfo = `border-b border-gray-500 p-2 mr-4 mb-2`;
  return (
    <div className="p-2 w-full">
      <div className="text-lg border rounded-md bg-green-600 text-white w-full p-2">
        <h1>Data Member</h1>
      </div>
      <section className="flex items-center text-slate-500">
        <section className={sectionInfo}>Info Personal</section>
        <hr />
        <section className={sectionInfo}>Membership Info</section>
        <section className={sectionInfo}>Rekening</section>
        <section className={sectionInfo}>List Rekrutan</section>
      </section>
    </div>
  );
}
