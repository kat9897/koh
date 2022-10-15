import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Habit Tracker',
}

// [DAMN] didn't get propTypes working...
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black'
// }

export default Header