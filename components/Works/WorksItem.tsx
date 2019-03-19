import * as React from 'react'
import { Portal } from 'react-portal'
import { promisify, getTransitionDuration, sleep } from '../../Utils'

interface WorksItemState {
  opened: boolean;
  modalPosition: {
    [key: string]: string | number
  }
}

/**
 * Componente responsável renderizar os trabalhos e criar uma animação
 * legal de expanção para mostrar mais detalhes ao usuário.
 * @see https://reactfordesigners.com/
 */
class WorksItem extends React.Component<WorkItemType, WorksItemState> {
  public state: WorksItemState = {
    opened: false,
    modalPosition: {
      visibility: 'hidden'
    }
  }

  private modalRef = React.createRef<HTMLDivElement>()
  private miniItenRef = React.createRef<HTMLAnchorElement>()
  private initialModalPosition: any = {};
  private initialScrollPosistion: { x: number, y: number } = { x: 0, y: 0 };

  /**
   * Expandir o modal com mais informações até o centro da tela.
   */
  expandModal = async (e: React.MouseEvent) => {
    e.preventDefault();

    const { top: parentTop, left: parentLeft } = document.getElementById('works')!.getBoundingClientRect()
    const { top, left, width, height } = this.miniItenRef.current!.getBoundingClientRect()

    // Mostrar o modal
    await promisify(this.setState, [{ opened: true }], this)

    // Salvar a altura do modal
    const { height: modalHeight, width: modalWidth } = this.modalRef.current!.getBoundingClientRect()

    // Colocar o modal exatamente em cima do item clicado
    let padding = 20
    this.initialModalPosition = {
      top: top - parentTop - padding,
      left: left - parentLeft - padding,
      width: width + padding * 2,
      height: height + padding * 2
    }
    await promisify(this.setState, [{
      modalPosition: this.initialModalPosition
    }], this)

    await sleep(100)

    this.modalRef.current!.classList.add('with-animation', 'opened')
    
    // Expandir o modal até o centro da tela
    this.setState({
      modalPosition: {
        background: '#FFF',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 32px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px 0px',
        top: (window.innerHeight / 2) - parentTop - (modalHeight / 2),
        left: (window.innerWidth / 2) - (modalWidth / 2),
        height: modalHeight ,
        // o width é modificado no css
      }
    })

    await sleep( getTransitionDuration(this.modalRef.current!) )
    
    // Permitir que a altura do modal mude quando ele estiver aberto
    this.setState(prevState => ({
      modalPosition: {
        ...prevState.modalPosition,
        height: ''
      }
    }))

    this.modalRef.current!.focus() // Dar foco no modal

    // Eventos que podem fechar o modal, como por exemplo presionar a tecla ESC.
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('keyup', this.handleKeypress)
    this.initialScrollPosistion = {
      y: window.scrollY,
      x: window.scrollX
    }
  }

  /**
   * Voltar para a posição inicial.
   */
  closeModal = async () => {
    // Remover ouvintes criados em this.expandModal
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('keyup', this.handleKeypress)

    try {
      const { height: modalHeight } = this.modalRef.current!.getBoundingClientRect()

      // Restaurar o valor height no css para não dar problema na próxima animação
      await promisify(this.setState, [(prevState: any) => ({
        modalPosition: {
          ...prevState.modalPosition,
          height: modalHeight
        }
      })], this)
    } catch (e) { }

    await sleep(50)

    // Voltar a posição inicial
    await promisify(this.setState, [{
      modalPosition: {
        ...this.initialModalPosition,
        background: '',
        boxShadow: 'initial',
      }
    }], this)

    this.modalRef.current!.classList.remove('opened')

    await sleep( getTransitionDuration(this.modalRef.current!) + 50 )
    
    // Esconder o modal após a animação
    this.setState({
      opened: false,
      modalPosition: {
        visibility: 'hidden'
      }
    })

    this.modalRef.current!.classList.remove('with-animation')
    this.miniItenRef.current!.focus() // Dar foco no mini item
  }

  /**
   * Função que checa se a tecla precionada foi o ESC para fechar o modal.
   * @see http://keycode.info/
   */
  handleKeypress = (e: KeyboardEvent) => {
    if (e.keyCode === 27) this.closeModal()
  }

  /**
   * Função que fecha o modal se o usuário scrollar muito a página.
   */
  handleScroll = () => {
    const deltaY = Math.abs(window.scrollY - this.initialScrollPosistion.y)
    const deltaX = Math.abs(window.scrollX - this.initialScrollPosistion.x)

    if (deltaY >= 250 || deltaX >= 250) this.closeModal()
  }

  render() {
    const { title, subTitle, image, url, description, technologies, totalDevelopmentTime } = this.props
    const { opened, modalPosition } = this.state
    
    const id = 'work-' + title.toLowerCase().replace(/(\s)/g, '')
    const alt = (title === 'Lembretes')
      ? 'Captura de tela da página do Lembretes na Chrome Web Store'
      : 'Captura de tela do site ' + title
    const PortalContainer = typeof document !== 'undefined' && document.getElementById('works')
    
    return (
      <React.Fragment>
        <a
          href={url}
          onClick={this.expandModal}
          className={opened ? 'with-background' : ''}
          target="_blank"
          rel="noopener"
          ref={this.miniItenRef}
          aria-label={`Clique para ver mais informações sobre o ${title}`}
          id={id}
        >
          <img className="list__thumb" src={image} alt={alt} />
          <div className="list__title list__title--centered">
            {title} <span>({subTitle})</span>
          </div>
        </a>

        <Portal node={PortalContainer}>
          {opened && (
            <div className="work__modal__backdrop" onClick={this.closeModal} aria-label="Fechar caixa de diálogo" />
          )}
          <div
            className="work__modal"
            style={modalPosition}
            ref={this.modalRef}
            role="dialog"
            aria-hidden={!opened}
            aria-label={`Mostrando informações sobre o ${title}`}
            tabIndex={0}
          >
            <div className="work__modal__close" onClick={this.closeModal} role="button" aria-label="Fechar caixa de diálogo" title="Clique ou pressione ESC para fechar" tabIndex="0" />
            <img className="list__thumb" src={image} alt={alt} />
            <div className="list__title list__title--centered" role="heading" aria-level={2}>
              {title} <span>({subTitle})</span>
            </div>
            {technologies && <div className="work__additional-infos">
              <b>Tecnologias usadas:</b> {technologies.join(', ')}.
            </div>}
            {totalDevelopmentTime && <div className="work__additional-infos">
              <b>Tempo de desenvolvimento:</b> {totalDevelopmentTime}.
            </div>}
            <p className="work__description">{description}</p>
            {url && (
              <a
                href={url}
                className="work__button"
                target="_blank"
                rel="noopener"
                role="button"
                aria-label={`Ir para o ${title}`}
              >Ir para o site</a>
            )}
          </div>
        </Portal>
      </React.Fragment>
    )
  }
}

export default WorksItem
