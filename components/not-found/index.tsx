"use client";
import React, { useState, useEffect } from "react";

export function ErrorMessage({
  pesan,
  timeout,
}: {
  pesan: string;
  timeout?: number;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (timeout) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [timeout]);

  return (
    <div>
      {visible ? (
        <section className="p-4 flex justify-center">
          <article className="bg-red-400 p-3 text-white rounded-md w-1/3">
            <p>{pesan}</p>
          </article>
        </section>
      ) : null}
    </div>
  );
}
