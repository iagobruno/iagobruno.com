import * as React from 'react'

interface ShareProps {
  mode: 'buttons' | 'icon-only';
}

export default function SharePost({ mode }: ShareProps) {
  const [postInfos, setPostInfos] = React.useState<any>({})

  React.useEffect(() => {
    setPostInfos({
      title: encodeURIComponent(document.querySelector('meta[property="og:title"]')!.content),
      url: encodeURIComponent(location.href)
    })
  })
  
  const { title, url } = postInfos

  return (
    <div className={`share share--${mode}`}>
      <a
        href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
        className="share__icon share__icon--twitter"
        target="_blank"
        title="Compartilhar no Twitter"
        aria-label="Compartilhar no Twitter"
      >
        <svg width="29" height="29"><path d="M22.053 7.54a4.474 4.474 0 0 0-3.31-1.455 4.526 4.526 0 0 0-4.526 4.524c0 .35.04.7.082 1.05a12.9 12.9 0 0 1-9.3-4.77c-.39.69-.61 1.46-.65 2.26.03 1.6.83 2.99 2.02 3.79-.72-.02-1.41-.22-2.02-.57-.01.02-.01.04 0 .08-.01 2.17 1.55 4 3.63 4.44-.39.08-.79.13-1.21.16-.28-.03-.57-.05-.81-.08.54 1.77 2.21 3.08 4.2 3.15a9.564 9.564 0 0 1-5.66 1.94c-.34-.03-.7-.06-1.05-.08 2 1.27 4.38 2.02 6.94 2.02 8.31 0 12.86-6.9 12.84-12.85.02-.24.01-.43 0-.65.89-.62 1.65-1.42 2.26-2.34-.82.38-1.69.62-2.59.72a4.37 4.37 0 0 0 1.94-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>
        {mode === 'buttons' && `Twitter`}
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        className="share__icon share__icon--facebook"
        target="_blank"
        title="Compartilhar no Facebook"
        aria-label="Compartilhar no Facebook"
      >
        <svg width="29" height="29"><path d="M23.209 5H5.792A.792.792 0 0 0 5 5.791V23.21c0 .437.354.791.792.791h9.303v-7.125H12.72v-2.968h2.375v-2.375c0-2.455 1.553-3.662 3.741-3.662 1.049 0 1.95.078 2.213.112v2.565h-1.517c-1.192 0-1.469.567-1.469 1.397v1.963h2.969l-.594 2.968h-2.375L18.11 24h5.099a.791.791 0 0 0 .791-.791V5.79a.791.791 0 0 0-.791-.79"></path></svg>
        {mode === 'buttons' && `Facebook`}
      </a>
      <a
        href={`whatsapp://send?text=${title}%20${url}`}
        className="share__icon share__icon--whatsapp"
        target="_blank"
        title="Compartilhar no Whatsapp"
        aria-label="Compartilhar no Whatsapp"
      >
        <svg width="29" height="29" viewBox="-15 -10 120 120"><g xmlns="http://www.w3.org/2000/svg"><path id="WhatsApp" d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"/></g></svg>
        {mode === 'buttons' && `WhatsApp`}
      </a>
    </div>
  )
}
