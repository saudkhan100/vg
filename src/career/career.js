import React from "react";
import cv from "./cv.jpg";

const Career = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white"> {/* Added pt-20 for top padding */}
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img
                      className="h-full object-cover"
                      src={cv}
                      width="733"
                      height="412"
                      alt=""
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-gray-100 font-gray-600">
              <div className="leading-relaxed">
                <h2 className="leading-tight text-4xl font-bold">
                  NO VACANCIES at the moment
                </h2>
                <p className="mt-4">
                  Are you looking to embark on an exciting career journey in the
                  dynamic world of global trading? At VG Serengeti, we're always
                  on the lookout for talented individuals who are passionate
                  about making a difference.
                </p>
                <p className="mt-4">
                  If you're ready to take the next step in your career and join
                  a team dedicated to excellence, we invite you to submit your
                  CV and cover letter to Info@vgserengeti.com.
                </p>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;
