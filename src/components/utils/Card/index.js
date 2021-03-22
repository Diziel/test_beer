import {Link} from 'react-router-dom'

const Card = (props) => (
  <Link 
    to={{
      pathname: `/${props.id}`,
      state: { item: props }
    }}
    title={props.tagline}
    className="block"
  >
    <img src={props.image_url} alt={props.name}/>
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  </Link>
)

export default Card