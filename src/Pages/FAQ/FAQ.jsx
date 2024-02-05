/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";

const FAQ = () => {
  return (
    <section className="relative  z-20 overflow-hidden pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-5xl font-bold ">FAQ</span>
              <h2 className="mb-4 text-3xl font-semibold text-dark  sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
            </div>
          </div>
        </div>

        <div className=" flex max-w-screen-xl mx-auto flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What courses are offered on the e-learning platform?"
              text="Our e-learning platform offers a diverse range of courses covering various subjects, including but not limited to technology, business, arts, sciences, and more. You can explore our course catalog to find programs that match your interests and goals."
            />
            <AccordionItem
              header="How do I enroll in a course?"
              text="Enrolling in a course is simple! First, create an account on our platform. Once logged in, browse the course catalog, select the desired course, and click on the Enroll button. Follow the on-screen instructions to complete the enrollment process."
            />
            <AccordionItem
              header="Are the courses self-paced, or do they follow a specific schedule?"
              text="Our courses are designed to accommodate different learning styles. While some courses are self-paced, allowing you to learn at your own speed, others may follow a specific schedule with set deadlines. You can check the course details to determine the format that best fits your preferences."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What types of learning resources are available?"
              text="We provide a variety of learning resources, including video lectures, interactive quizzes, assignments, and discussion forums. These resources are designed to enhance your understanding of the course material and promote active engagement with the content."
            />
            <AccordionItem
              header="How can I track my progress in a course?"
              text="Your course dashboard will display detailed information about your progress, including completed lectures, assignments, and assessments. Additionally, you'll receive regular updates on your performance and achievements throughout the course duration."
            />

            <AccordionItem
              header="Is technical support available if I encounter issues during my e-learning journey?"
              text="Absolutely! Our dedicated technical support team is available to assist you with any issues you may encounter. Feel free to reach out through our helpdesk, and we'll promptly address your concerns, ensuring a smooth and enjoyable e-learning experience."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs></defs>
        </svg>
      </div>
    </section>
  );
};

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div
      className="mb-8 w-full rounded-lg  p-4  dark:bg-dark-2 
    dark:shadow-[#9fa2d3] 
     dark:shadow-[5px_20px_50px_5px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8"
    >
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-[#B46EA3] stroke-[#6F74BE] duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark ">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FAQ;