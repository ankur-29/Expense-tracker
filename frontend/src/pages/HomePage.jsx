import React from 'react'

const HomePage = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Manage Your Expense
          <strong className="font-extrabold text-green-700 sm:block"> Control Your Money. </strong>
        </h1>

        <p className="mt-4 sm:text-xl/relaxed">
          Start creating your budget and save money.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            className="w-full rounded-lg bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:opacity-95 focus:outline-none sm:w-auto">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage