import '../styles/education.css'

function Education({image, name, degree, year}) {
  return (
    <div>
        <div className="row">
            <div className="img">
                <img src={image} alt="logo" />
            </div>
            <div className="edu-det">
                <h2>{ name }</h2>
                <h3>{ degree }</h3>
                <h3>{ year }</h3>
            </div>
        </div>
    </div>
  )
}

export default Education