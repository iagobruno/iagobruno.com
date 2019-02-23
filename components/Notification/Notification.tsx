import * as React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../Utils'
import './Notification.less'

interface NotificationState {
  title: string;
  image: string;
  link: string;
  show: boolean;
}

/**
 * Mostrar a última postagem ao visitante em uma notificação na tela.
 */
class Notification extends React.Component<{}, Partial<NotificationState>> {
  public state = {
    show: false
  }

  async componentDidMount() {
    // Buscar última postagem
    const infos: any = await getAllPosts(1).then(res => res[0])

    // Checar se o user já clicou na notificação
    if (!localStorage.getItem(`notification:${infos.slug}`)) {
      // Mostar noti
      this.setState({
        ...infos,
        link: `/posts/${infos.slug}`,
        show: true
      })
    }
  }

  handleClose = (e: React.MouseEvent) => {
    localStorage.setItem(`notification:${this.state.slug}`, 'clicked')

    this.setState({
      show: false
    })
  }

  render() {
    const { show, link, title, image } = this.state

    if (!show) return null;

    return (
      <div className={`notification ${image && 'notification--width-image'}`}>
        <Link href={link}>
          <a onClick={this.handleClose}>
            {image && (
              <img className="notification__image" src={image} />
            )}
            <div className="notification__infos">
              <div className="notification__mini-title">É disso que eu to falando!</div>
              <p className="notification__title">{title}</p>
            </div>
          </a>
        </Link>
        <div
          className="notification__close"
          onClick={this.handleClose}
          title="Fechar"
          aria-label="Fechar"
          role="button"
        >
          <svg className="feather" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </div>
    )
  }
}

export default Notification
