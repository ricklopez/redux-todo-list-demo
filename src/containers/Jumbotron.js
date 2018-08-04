import React from 'react'
import { connect } from 'react-redux'
import { setHeaderText } from '../actions'

const Jumbotron = (props) => (
  <div className="jumbotron">
    <h1 className="display-4">{props.jumbotron.text}</h1>
    <p className="lead">Redux is a predictable state container for JavaScript apps.</p>
    <hr className="my-4"/>
    <p>It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.</p>
    <a className="btn btn-primary btn-lg" href="https://redux.js.org/" role="button">Learn more</a>
  </div>
)

const mapStateToProps = (state) => ({
  jumbotron: state.jumbotron
})

const mapDispatchToProps = ({
  setHeaderText: setHeaderText
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jumbotron)
