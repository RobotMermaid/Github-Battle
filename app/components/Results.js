var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var ReactRouter = require('react-router');
var Link = require('react-router').Link;
var styles = require('../styles');
var Loading = require('./Loading');

// function puke (object) {
//   return <pre>{JSON.stringify(object, null, ' ')}</pre>
// }

function StartOver(props) {
  if (props.isLoading === true) {
    return (
      <p> Loading </p>)
  }
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to ='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Results (props) {

  if (props.scores[0] === props.scores[1]) {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1> It is a Tie! </h1>
        <StartOver />
      </div>
    )
  }
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var loosingIndex = winningIndex === 0 ? 1 : 0;
    return (
          <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
              <UserDetailsWrapper header="Winner">
                <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
              </UserDetailsWrapper>
              <UserDetailsWrapper header="Looser">
                 <UserDetails score={props.scores[loosingIndex]} info={props.playersInfo[loosingIndex]} />
              </UserDetailsWrapper>
            </div>
            <StartOver />
          </div>
    )
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}
module.exports = Results;
