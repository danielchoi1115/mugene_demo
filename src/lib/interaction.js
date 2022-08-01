export function clickOutside(element, callbackFunction) {
    function onClick(event) {
        if (!element.contains(event.target)) {
            callbackFunction();
        }
    }
    
    document.body.addEventListener('click', onClick);
    
    return {
        update(newCallbackFunction) {
            callbackFunction = newCallbackFunction;
        },
        destroy() {
            document.body.removeEventListener('click', onClick);
        }
    }
}


export function onEscape(node, callbackFunction) {
    
  const handleKey = event => {
    if (event.key === 'Escape' && node && typeof node.blur === 'function') {
      callbackFunction();
    }
  }
  
  node.addEventListener('keydown', handleKey)
  
  return {
    destroy() {
      node.removeEventListener('keydown', handleKey)
    }
  }
}

export function getThemeFromLocalStorage() {
    // if user already changed the theme, use it
    if (window.localStorage.getItem('dark')) {
      return JSON.parse(window.localStorage.getItem('dark'))
    }

    // else return their preferences
    return (
      !!window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }

export function setThemeToLocalStorage(value) {
    window.localStorage.setItem('dark', value)
    
}


export function selectTextOnFocus(node, callbackFunction) {
  
    const handleFocus = event => {
      node && typeof node.select === 'function' && node.select()
    }
    
    node.addEventListener('focus', handleFocus)
    
    return {
      destroy() {
        node.removeEventListener('focus', handleFocus)
      }
    }
  }
  
  /** Blurs the node when Escape is pressed */
  export function blurOnEscape(node) {
    
    const handleKey = event => {
      if (event.key === 'Escape' && node && typeof node.blur === 'function') node.blur()
    }
    
    node.addEventListener('keydown', handleKey)
    
    return {
      destroy() {
        node.removeEventListener('keydown', handleKey)
      }
    }
  }

  

export let transConst = {
    delay: 50,
    duration: 300,
    pageDelay: 150,
    pageDuration: 500,
}