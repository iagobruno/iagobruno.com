import { useState, useEffect } from 'react'
import { sleep } from '../common/functions'
const scrollReveal = (typeof window !== 'undefined') ? require('scrollreveal').default : () => {}

type ConfigsType = {
  element: string,
  viewFactor?: number,
  always?: boolean,
}

/**
 * Hook para usar o ScrollReveal nos componentes de função.
 * @see https://scrollrevealjs.org/
 */
export default function useReveal(configs: ConfigsType, didAppear: Function): boolean {
  const [visibility, setVisibility] = useState<boolean>(false)
  const [didDisappear, setDidDisappear] = useState<Function>(() => {})

  useEffect(() => {
    const domElement = document.querySelector(configs.element)
    const sr = scrollReveal()

    sr.reveal(domElement, {
      useDelay: (configs.always === true) ? 'always' : 'once',
      viewFactor: configs.viewFactor || 0.2,
      duration: 0,
      distance: '0px',
      opacity: 1,
      scale: 1,
      afterReveal: (domEl: HTMLElement) => domEl.setAttribute('style', ''),

      // O elemento definido apareceu na tela
      beforeReveal: async () => {
        setVisibility(true)

        await sleep(50)

        const callback: Function | undefined = didAppear()

        if (typeof callback !== 'undefined' && typeof callback === 'function') {
          setDidDisappear(callback)
        }
      },
      // O elemento definido sumiu da tela
      beforeReset: () => {
        if (configs.always === false) return

        setVisibility(false)

        didDisappear()
      }
    })

    return () => sr.destroy();
  }, [])

  return visibility
}
