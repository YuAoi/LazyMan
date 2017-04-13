function loadScript (url) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}

function loadScriptString (code) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  try {
    script.appendChild(document.createTextNode(code))
  } catch (error) {
    script.text = code
  }
  document.body.appendChild(script)
}

function loadStyles (url) {
  let link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = url
  document.querySelector('head').appendChild(link)
}

function loadStyleString (css) {
  let style = document.createElement('style')
  style.type = 'text/css'
  try {
    style.appendChild(document.createTextNode(css))
  } catch (error) {
    style.styleSheet.cssText = css
  }
  document.querySelector('head').appendChild(style)
}