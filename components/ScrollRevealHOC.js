import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default function Reveal(WrappedComponent) {
  return class RevealEnhancer extends Component {  
    
    componentDidMount() {
      if (typeof window.ScrollReveal === 'undefined')
        window.ScrollReveal = require('scrollreveal').default()
      
      const domElement = ReactDOM.findDOMNode(this.component)

      ScrollReveal.reveal(domElement, {
        useDelay: 'once',
        viewFactor: this.component.props.revealViewFactor || 0.2,
        duration: 0,
        distance: '0px',
        opacity: 1,
        scale: 1,
        afterReveal: (domEl) => domEl.setAttribute('style', ''),
        
        beforeReveal: () => {
          // Quando o WrappedComponent aparecer na tela chamar essa função do component
          if (typeof this.component.componentDidAppear !== 'undefined')
            this.component.componentDidAppear()
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