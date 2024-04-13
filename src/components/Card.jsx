const Card = ({children}) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-4/12 h-52 bg-FlightGray shadow-sm relative rounded-md px-4 py-8'>
      {children}
    </div>
  )
}

export default Card
