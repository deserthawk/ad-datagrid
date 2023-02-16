const MaxTextLengthInterpolation = (pMaxTextLength: number, pText: string) => {
  let result = ''
  if (pMaxTextLength > 0 && pText.length > pMaxTextLength) {
    result = `${pText.slice(0, pMaxTextLength)}...`
  } else {
    result = pText
  }
  return result
}

const MaxTextLengthControl = (pMaxTextLength: number, pText: string) => {
  if (pMaxTextLength > 0 && pText.length > pMaxTextLength) {
    return true
  }
  return false
}

const TextService = {
  MaxTextLengthInterpolation,
  MaxTextLengthControl,
}

export default TextService
