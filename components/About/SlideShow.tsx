import * as React from 'react'
import './SlideShow.less'

interface SlideItem {
  src: string;
  alt: string;
}

interface PropTypes {
  duration: number;
  slides: Array<SlideItem>;
}

interface StateTypes {
  current_slide: number;
}

class AboutSlideShow extends React.Component<PropTypes, StateTypes> {
  static defaultProps = {
    duration: 10000
  }

  public state = {
    current_slide: 0
  }
  
  private imgRef = React.createRef<HTMLImageElement>()
  private imgFadeTransitionDuration: any
  private timer: any

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
    
    this.imgFadeTransitionDuration = getTransitionDuration(this.imgRef.current!)
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
    this.imgRef.current!.classList.add('hidden')

    // Esperar a animação de fade-out do slide anterior
    setTimeout(() => {
      // Mudar para o próximo slide
      this.setState((prevState) => ({
        current_slide: (prevState.current_slide >= (this.props.slides.length - 1)) ? 0 : (prevState.current_slide + 1)
      }), () => {
        // Mostrar o slide
        this.imgRef.current!.classList.remove('hidden')
      })
    }, this.imgFadeTransitionDuration)
  }

  /**
   * Forçar o carregamento de uma imagem que será usada futuramente.
   *
   * @param {string} url Endereço da imagem a ser carregada
   * @returns {Promise}
   */
  loadImg = (url: string) => {
    return new Promise((resolve: Function, reject: Function) => {
      let img = new Image()
	  
      img.addEventListener('load', () => resolve(img))
      img.addEventListener('error', () => reject(new Error(`Failed to load image's URL: ${url}`)))

      img.src = url
    })
  }

  render() {
    // Pegar os atributos do slide atual
    let attrs = this.props.slides[this.state.current_slide]

    return (
      <div className="slide-show">
        <img
          className="slide-show__image"
          ref={this.imgRef}
          {...attrs}
        />
      </div>
    )
  }
}

function getTransitionDuration(element: HTMLElement) {
  let val = window.getComputedStyle(element).getPropertyValue('transition-duration')
  return Number( val.slice(0, -1) ) * 1000
}

export default AboutSlideShow
