const nums = ['zero','one','two','three','four','five','six','seven','eight','nine']
const box = document.querySelector('#ice_box')

function getTime() {
  var today = new Date();
  var hour = today.getHours();
  if(hour > 12) {
    hour = hour - 12
  }
  var minute = today.getMinutes();
  var second = today.getSeconds();

  document.querySelectorAll('.digit')[0].className = 'digit '+nums[hour.toString().padStart(2, "0").split('')[0]]
  document.querySelectorAll('.digit')[1].className = 'digit dots '+nums[hour.toString().padStart(2, "0").split('')[1]]
  document.querySelectorAll('.digit')[2].className = 'digit '+nums[minute.toString().padStart(2, "0").split('')[0]]
  document.querySelectorAll('.digit')[3].className = 'digit dots '+nums[minute.toString().padStart(2, "0").split('')[1]]
  document.querySelectorAll('.digit')[4].className = 'digit '+nums[second.toString().padStart(2, "0").split('')[0]]
  document.querySelectorAll('.digit')[5].className = 'digit '+nums[second.toString().padStart(2, "0").split('')[1]]
}

getTime()
setInterval(getTime,1000)

function addColorPicker() {
  const colors = ['red','darkorange','goldenrod','limegreen','dodgerblue','Turquoise','Purple','magenta']
  for(var i=0;i<colors.length;i++) {
    var s = document.createElement('div')
    s.className = 'swatch'
    s.dataset.clr = colors[i]
    s.style.background = colors[i]
    s.style.width = '30px'
    s.style.height = '30px'
    s.style.margin = '.5vw'
    s.style.cursor = 'pointer'
    s.style.borderRadius = '50%'
    s.style.display = 'inline-block'
    s.onclick = function(){
      document.documentElement.style.setProperty("--active-clr", this.dataset.clr);
    }
    document.querySelector('.colorBox').appendChild(s)
  }

  document.documentElement.style.setProperty("--active-clr", colors[Math.floor(Math.random()*colors.length)]);

  var w = document.querySelector('.top').getBoundingClientRect()
  document.querySelector('body').style.width = w.width + 'px'
  box.style.width = w.width + 'px'
}
addColorPicker()

window.addEventListener('resize', function() {
  var w = document.querySelector('.top').getBoundingClientRect()
  document.querySelector('body').style.width = w.width + 'px'
  box.style.width = w.width + 'px'
})


function addFlame() {
  var f = document.createElement('div')
  f.className = 'flame'
  f.style.left = Math.random()*100 + '%'
  f.style.animationDuration = Math.random() < .5 ? '10s' : '4.5s' 
  f.onanimationend = function(){ this.remove() }
  box.appendChild(f)
  
  setTimeout(addFlame, 100)
}
addFlame()
