import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="container  md:max-w-8xl px-5 md:px-auto mx-auto text-gray-800 dark:text-[#C7C7C7] flex justify-between items-center py-4">
        <p>© 2023 Nurzod Mardiyev</p>
        <button
          type="tel"
          value="+998883921383"
          className="bg-inherit  border-none"
        >
          +998883921383
        </button>
      </div>
    </div>
  );
}
