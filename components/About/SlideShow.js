import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Promise from '../promisePolyfill'
import './SlideShow.less'

function getTransitionDuration(element) {
  let val = window.getComputedStyle(element).getPropertyValue('transition-duration')
  return Number( val.slice(0, -1) ) * 1000
}

class AboutSlideShow extends Component {
  state = {
    current_slide: 0
  }
  
  imgRef = React.createRef()

  componentDidMount() {
    this.initSlide()

    // Carregar as próximas imagens do slide
    Promise.all(
      this.props.slides.slice(1).map(item => this.loadImg(item.src))
    )
    
    // Parar o slide quando a página não estiver visível para o usuário e iniciar quando voltar a ficar visível
    /*document.addEventListener('visibilitychange', this.visibilityChangeFn = () => {
      if (document.hidden === false) this.initSlide()
      else this.stopSlide()
    })*/
    
    this.imgFadeTransitionDuration = getTransitionDuration(this.imgRef.current)
  }

  componentWillUnmount() {
    this.stopSlide()
    
    //document.removeEventListener('visibilitychange', this.visibilityChangeFn)
  }
  
  /**
   * Iniciar slideshow
   */
  initSlide = () => {
    this.timer = setInterval(() => this.nextSlide(), this.props.duration)
  }
  
  /**
   * Parar slide
   */
  stopSlide = () => {
    clearInterval(this.timer)
  }
  
  /**
   * Avançar para o próximo slide.
   */
  nextSlide = () => {
    // Ocultar o slide
    this.imgRef.current.classList.add('hidden')

    // Esperar a animação de fade-out do slide anterior
    setTimeout(() => {
      // Mudar para o próximo slide
      this.setState((prevState) => ({
        current_slide: (prevState.current_slide >= (this.props.slides.length - 1)) ? 0 : ++prevState.current_slide
      }), () => {
        // Mostrar o slide
        this.imgRef.current.classList.remove('hidden')
      })
    }, this.imgFadeTransitionDuration)
  }

  /**
   * Forçar o carregamento de uma imagem que será usada futuramente.
   *
   * @param {string} url Endereço da imagem a ser carregada
   * @returns {Promise}
   */
  loadImg = (url) => {
    return new Promise((resolve, reject) => {
      let img = new Image()
	  
      img.addEventListener('load', e => resolve(img))
      img.addEventListener('error', () => reject(new Error(`Failed to load image's URL: ${url}`)))

      img.src = url
    })
  }

  render() {
    // Pegar os atributos do slide atual
    let attrs = this.props.slides[this.state.current_slide]

    return (
      <div className="slide-show">
        <img className="slide-show__image" ref={this.imgRef} {...attrs} />
      </div>
    )
  }
}

AboutSlideShow.defaultProps = {
  duration: 10000
}

AboutSlideShow.propTypes = {
  /** Os slides que serão mostrados. Deve ser um vetor de objetos [{},] */
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Tempo que cada slide fica exposto antes de ser trocado (em ms) */
  duration: PropTypes.number
}

export default AboutSlideShow