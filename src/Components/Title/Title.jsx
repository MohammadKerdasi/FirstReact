import './Title.css'

const  title = ({subTitle , Title}) => {
  return (
    <div className='Title'>
        <p>{subTitle}</p>
        <h2>{Title}</h2>
    </div>
  )
}

export default title