"use client";
import React, { useState, useEffect, Fragment } from "react";

export function ErrorMessage({
  message,
  timeout,
}: {
  message: string;
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
    <Fragment>
      {" "}
      {visible ? (
        <section className="p-4 flex justify-center">
          <article className="bg-red-400 p-3 text-white rounded-md w-1/3">
            <p>{message}</p>
          </article>
        </section>
      ) : null}
    </Fragment>
  );
}
