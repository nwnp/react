import '../style.scss';

export const ControlPanel = ({name, isLoggedIn}) => {
  const logout = () => {
    alert('로그아웃을 합니다.')
  }

  return (
    <div className='control'>
      {
        isLoggedIn ? 
          <button className="button" onClick={logout}>{name} Logout</button> :
          <button className="button">Login</button>
      }
    </div>
  )
}