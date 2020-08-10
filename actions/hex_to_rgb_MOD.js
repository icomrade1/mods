module.exports = {
  name: 'Hex to RGB',
  section: 'Other Stuff',
  subtitle (data) {
    return `${data.varName} - Hex to RGB`
},
  },
  fields: ['storage', 'varName', 'hexToConvert'],
  html (isEvent, data) {
    return `Hex to convert (example: #F0F0F0):<br><input id="hexToConvert" class="round" type="text" /><br><br>Store in:<br><select class="round" id="storage">${data.variables[0]}</select><br><br>Variable name:<br><input class="round" id="varName" type="text" />`
    },
    init () {
    },
    action (cache) {
    const data = cache.actions[cache.index];
    const hexToConvert = this.evalMessage(data.hexToConvert, cache);
    const storage = parseInt(data.storage);
    const varName = this.evalMessage(data.varName, cache);
  },
  init () {
  },
  action (cache) {
    const data = cache.actions[cache.index]
    const hexToConvert = this.evalMessage(data.hexToConvert, cache)
    const storage = parseInt(data.storage)
    const varName = this.evalMessage(data.varName, cache)
    function getRGB (color) {
      if (color.length === 7) {
        const r = parseInt(color.substr(1, 2),16)
        const g = parseInt(color.substr(3, 2),16)
        const b = parseInt(color.substr(5, 2),16)
        return '('+r+', '+g+', '+b+')' ;
  } else {