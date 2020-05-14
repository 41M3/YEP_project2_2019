const e = React.createElement;

class tetrisLauncher extends React.Component {
  
  state = {
    redirect: false
  }
  
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='http://localhost:8080/tetris'/>
    }
  }
  
  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
       </div>
    )
  }
}

const domContainer = document.querySelector('#tetris_launcher');
ReactDOM.render(e(tetrisLauncher), domContainer);