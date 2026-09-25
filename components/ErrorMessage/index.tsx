const ErrorMessage = ({error} : {error:string}) => {
  return (
    <p className="error">{error ==="NEXT_REDIRECT" ? "" : error}</p>
  )
}

export default ErrorMessage