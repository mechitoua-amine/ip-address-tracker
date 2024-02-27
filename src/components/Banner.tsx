export default function Banner() {
  return (
    <div
      className='w-screen h-72 flex flex-col justify-center font-rubik items-center gap-6 bg-cover bg-[url(./pattern-bg-desktop.png)] bg-center'
      id='banner'
    >
      <h1 className='text-3xl font-medium text-white'>IP Address Tracker</h1>
      <form className='flex flex-row w-4/12 justify-center items-center'>
        <input
          className='p-4 font-rubik rounded-l-2xl border-none outline-none w-full text-md'
          placeholder='Search for any IP Address or domain'
          type='search'
        />
        <button
          title='Search'
          className='bg-black p-5 cursor-pointer hover:bg-gray-very-dark transition ease-in-out delay-150 rounded-e-2xl bg-center bg-no-repeat'
          type='submit'
        >
          <img className='w-full' src='./icon-arrow.svg' alt='search button' />
        </button>
      </form>
    </div>
  )
}
