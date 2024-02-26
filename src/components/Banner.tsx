export default function Banner() {
  return (
    <div
      className='w-screen h-72 flex flex-col justify-center font-rubik items-center gap-6 bg-cover bg-[url(./pattern-bg-desktop.png)] bg-center'
      id='banner'
    >
      <h1 className='text-4xl font-bold text-white'>IP Address Tracker</h1>
      <form className='flex flex-row w-3/5 justify-center items-center'>
        <input
          className='p-4 font-rubik rounded-l-xl border-none outline-none w-3/6 text-xl font-medium'
          placeholder='Search for any IP Address or domain'
          type='search'
        />
        <button
          title='Search'
          className='bg-black p-6 cursor-pointer hover:bg-gray-very-dark transition ease-in-out delay-150 rounded-e-xl bg-center bg-no-repeat'
          type='submit'
        >
          <img className='w-full' src='./icon-arrow.svg' alt='search button' />
        </button>
      </form>
    </div>
  )
}
