import {useHistory, useLocation} from 'react-router-dom'

const SinglePage = () => {
  const location = useLocation()
  const history = useHistory()

  const item = location.state.item
  return (
    <div className="container">
      <div className="head-block">
        <h1 className="text-center">{item.name}</h1>
        <button onClick={()=>history.goBack()}>Go back</button>
      </div>
      <p><b>PH:</b> {item.ph}</p>
        <p><b>Food pairing:</b></p>
        <ul>
        {
          item.food_pairing.map((item, index)=>(
            <li key={index}>{item}</li>
          ))
        }
        </ul>
      <p><b>Brewers tips:</b> {item.brewers_tips}</p>
      <h3>Method</h3>
      <p><b>Fermentation:</b></p>
      <ul>
      {
        item.method.fermentation.temp ? (
          <li className="capitalize">{item.method.fermentation.temp.unit}: {item.method.fermentation.temp.value}</li>
        ) : undefined
      }
      </ul>
      <p><b>Mash temp:</b></p>
      <ul>
        {
          item.method.mash_temp.map((item,index)=>(
            <li key={index}>
              <p>Duration: {item.duration} <span className="capitalize">{item.temp.unit}: {item.temp.value}</span></p>
            </li>
          ))
        }
      </ul>
      {
        item.method.twist ? (
          <p><b>Twist:</b> {item.method.twist}</p>
        ) : undefined
      }
    </div>
  )
}

export default SinglePage