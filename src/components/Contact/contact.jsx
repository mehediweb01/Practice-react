function Contact() {
  return (
    <div className="w-full">
      <div className="mx-auto w-1/2 bg-slate-700 p-4 rounded-lg mt-5 ">
        <h1 className="text-center text-4xl text-white border-b-2 border-red-400 mb-5 border-spacing-5">
          Contact me
        </h1>
        <form className="flex flex-col justify-center items-center gap-5 w-full">
          <div className="mt-2 [&>input]:ml-4">
            <input
              type="text"
              placeholder="First Name..."
              className="border border-slate-600 ring-2 rounded-md px-2 py-1"
            />
            <input
              type="text"
              placeholder="Last Name..."
              className="border border-slate-600 ring-2 rounded-md px-2 py-1"
            />
          </div>

          <div className="mt-2 [&>input]:ml-4">
            <input
              type="email"
              placeholder="E-mail"
              className="border border-slate-600 ring-2 rounded-md px-2 py-1"
            />
            <input
              type="number"
              placeholder="Number"
              className="border border-slate-600 ring-2 rounded-md px-2 py-1"
            />
          </div>
          <div className="w-[67%]">
            <input
              type="text"
              placeholder="Address"
              className="border border-slate-600 ring-2 rounded-md px-2 py-1 w-full"
            />
          </div>
          <div>
            <textarea
              placeholder="Type your message here"
              rows={4}
              cols={50}
              className="border border-slate-600 ring-2 rounded-md px-2 py-1"
            />
          </div>
          <button
            type="button"
            className="bg-sky-500 text-white px-3 py-1 rounded-md text-xl hover:bg-green-500 hover:text-slate-600 transition-all duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
