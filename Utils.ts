/**
 * Checar o se é um dispositivo móvel (se a tela é pequena)
 */
export const checkIsMobile = (): boolean => (window.innerWidth <= 859)

/**
 * Transformar uma função que usa callback em uma versão compatível com async/await.
 *
 * @param {Function} func
 * @param {Array} args Argumentos da chamada da função
 * @param {Object} context Normalmente pode ser ignorado, porém, se for uma função do React
 *                         deve-se definir o escopo do componente. Veja no exemplo abaixo.
 * @returns {Promise}
 *
 * @example
 * async handleClick() {
  *   await promisify(this.setState, [{ showButton: true }], this)
  * }
  */
export function promisify(func: Function, args: any[], context: any): Promise<any> {
  return new Promise((resolve, reject) => {
    args.push((err: any, data: any) => {
      if (err) return reject(err);

      resolve(data)
    })

    func.apply(context, args);
  })
}

/**
 * Retorna o valor "transition-duration" do css do elemento.
 */
export function getTransitionDuration(element: HTMLElement): number {
  let val = window.getComputedStyle(element)
    .getPropertyValue('transition-duration')

  return Number( val.slice(0, -1) ) * 1000
}

/**
 * setTimeout as a Promise.
 */
export function sleep(delay: number): Promise<any> {
  return new Promise(function(resolve) {
      setTimeout(resolve, delay);
  });
}