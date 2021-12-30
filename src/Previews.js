import './Previews.css'

function Previews() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <canvas id="original-proof"></canvas>
        </div>
        <div className="column is-half">
          <canvas id="resized-proof"></canvas>
        </div>
      </div>
    </div>
  )
}

export default Previews
