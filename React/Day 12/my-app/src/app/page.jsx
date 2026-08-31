import FormToggle from "@/component/FormToggle";
export default function page() {
  return (
    <div className='grid grid-cols-2 gap-10'>
      <div>
        <h1>Full Stack Development Course with AI Engineering</h1>
        <p>
          Become a job-ready developer with India’s best AI-powered full stack developer course. Learn how to build modern, scalable websites and applications using front-end, back-end, databases, and AI-assisted development tools.
        </p>
      </div>
      <div className='bg-red-300'>

      </div>
      <FormToggle />
    </div>
  )
}
