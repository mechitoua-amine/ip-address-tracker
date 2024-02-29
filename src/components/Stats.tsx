export default function Stats() {
  const titleStyle = 'text-sm text-gray-dark font-medium p-1 tracking-wider'
  const dataStyle = 'text-2xl text-gray-darker font-bold p-1'

  return (
    <div className='grid grid-cols-4 grid-flow-col med:grid-flow-col-dense content-center items-start bg-white p-7 rounded-xl w-9/12 font-rubik absolute'>
      <div className='flex flex-col gap-2 justify-center align-start'>
        <h3 className={titleStyle}>IP ADDRESS</h3>
        <p className={dataStyle}>38.0.101.76</p>
      </div>
      <div>
        <h3 className={titleStyle}>LOCATION</h3>
        <p className={dataStyle}>Brooklyn, New York</p>
      </div>
      <div>
        <h3 className={titleStyle}>TIMEZONE</h3>
        <p className={dataStyle}>UTC -05:00</p>
      </div>
      <div>
        <h3 className={titleStyle}>ISP</h3>
        <p className={dataStyle}>SpaceX Starlink</p>
      </div>
    </div>
  )
}
