function DateTime() {
  const time = new Date()
  return (
    <>
      <p>{time.toString()}</p>
      <span>{time.getHours()} Hours : </span>
      <span>{time.getMinutes()} Minutes : </span>
      <span>{time.getSeconds()} Seconds</span>
    </>
  )
}
export default DateTime
