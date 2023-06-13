import PropTypes from 'prop-types';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';
import { Nick } from './components/Nick';


export function HelloWorldApp({ user, id, title, nick }) {

  // console.log(props);
  // const name = "Adrian";

  return (
    <>
      <Title title={ title } />
      <UserDetails user={user} id={ id } />
      <Nick nick={ nick } />
    </>
    
  )
}

HelloWorldApp.propTypes = {
    nick: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

HelloWorldApp.defaultProps = {
    title: 'Cuarso FullStack React + Spring',
    nick: 'Kaibil57'
}