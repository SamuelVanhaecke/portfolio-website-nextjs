import Layout from '@/components/Layout'

export default () => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-lg">
        <h1 className="mb-24 font-ilyas text-8xl uppercase">
          Let's work <br /> together
        </h1>
        <form className="m-auto mb-64 flex flex-col gap-12">
          <div className="flex w-full flex-row gap-6">
            <div className="flex w-full flex-col">
              <label className="sr-only" htmlFor="first-name">
                First Name
              </label>
              <input
                className="border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black"
                placeholder="First Name *"
                type="text"
                id="first-name"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="sr-only" htmlFor="last-name">
                Last Name
              </label>
              <input
                className="border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black"
                placeholder="Last Name *"
                type="text"
                id="last-name"
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-6">
            <div className="flex w-full flex-col">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black"
                placeholder="Email *"
                type="text"
                id="email"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="sr-only" htmlFor="telephone">
                Telephone
              </label>
              <input
                className="border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black focus:border-transparent focus:ring-0 active:divide-emerald-900"
                placeholder="Telephone"
                type="text"
                id="telephone"
              />
            </div>
          </div>
          <div className="flex w-full flex-col">
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              className="resize-none border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black"
              placeholder="Message *"
              rows={6}
              id="message"
            ></textarea>
          </div>
          <button
            className="w-fit self-end rounded-full border border-solid border-black px-5 py-2.5 text-center font-light hover:bg-black hover:text-white"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  )
}
