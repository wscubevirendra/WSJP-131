import React from "react";

export default function Hero({
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <section className={`py-10 mb-10  ${className}`}>
      <div className="max-w-7xl mx-auto p-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed">
              {subtitle}
            </p>
          )}

          {children && (
            <div className="mt-8 flex flex-wrap gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}