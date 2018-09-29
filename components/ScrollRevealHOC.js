import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default function Reveal(WrappedComponent) {	
  return class RevealEnhancer extends Component {
    static defaultProps = {
      revealViewFactor: 0.2,
      always: true
    }

    static propTypes = {
      revealViewFactor: PropTypes.number,
      always: PropTypes.bool
    }

    componentDidMount() {
      if (typeof window.ScrollReveal === 'undefined') {
        window.ScrollReveal = require('scrollreveal')()
      }
      
      const domElement = ReactDOM.findDOMNode(this.component)

      ScrollReveal.reveal(domElement, {
        useDelay: (this.component.props.always === true) ? 'always' : 'once',
        viewFactor: this.component.props.revealViewFactor,
        duration: 0,
        distance: '0px',
        opacity: 1,
        scale: 1,
        afterReveal: (domEl) => domEl.setAttribute('style', ''),
        
        beforeReveal: () => {
          // Quando o WrappedComponent aparecer na tela chamar essa função
          if (typeof this.component.componentDidAppear !== 'undefined') {
            this.component.componentDidAppear()
          }
        },
        beforeReset: () => {
          if (this.props.always === false) return

          // Quando o WrappedComponent sair da tela chamar essa função
          if (typeof this.component.componentDidDisappear !== 'undefined') {
            this.component.componentDidDisappear()
          }
        }
      })
    }
  
    render() {
      return (
        <WrappedComponent ref={(node) => this.component = node} {...this.props} />
      )
    }
  }
}