import {Beer} from '../../api'
import {useEffect, useState} from 'react'
import Card from '../utils/Card'

const MainPage = () => {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [loader, setLoader] = useState(false)
  const [selected, setSelected] = useState('all')

  useEffect(() => {
    setLoader(true)
    Beer.getAll()
      .then(({data})=>{
        setData(data)
        setLoader(false)
      })
      .catch(e=>{
        console.log(e.response)
        setLoader(false)
      })
    return () => {
      setData([])
    }
  }, [])

  const FilterData = (e) => {
    setSelected(e.target.value)
    if(e.target.value === 'first_brewed') setFilterData(data.filter(item=> parseInt(item.first_brewed.split('/')[1]) > 2010 ))
    if(e.target.value === 'twist') setFilterData(data.filter(item=> item.method?.twist))
    if(e.target.value === 'all') setFilterData(data)
  }

  return loader ? (
    <h1 className="text-center">Loading...</h1>
  ) : (
    <div className="container">
      <div className="head-block">
        <h1 className="text-center">Main Page</h1>
        <select value={selected} onChange={FilterData}>
          <option value="first_brewed">First brewed till 2010</option>
          <option value="twist">Has twist</option>
          <option value="all">All</option>
        </select>
      </div>
        {
          filterData.length > 0 ? filterData.map((item, index)=>(
            <Card {...item} key={index}/>
          ))
          :
          data.map((item, index)=>(
            <Card {...item} key={index}/>
          )) 
        }
    </div>
  )
}

export default MainPage