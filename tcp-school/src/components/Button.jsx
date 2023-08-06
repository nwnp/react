import '../style.scss';

export const Button = (props) => {
  const handleClick = () => {
    if(window.confirm('Yes?')) {
      console.log('say yes')
    }
  }

  return (
    <button className="button" onClick={handleClick}>{props.name}</button>
  )
}