// write js code here if required
let para = document.getElementById('timer')

function currentTime(){
	let date = new Date()
	let hr = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	let day = date.getDay()
	let month = date.getMonth()+1
	let year = date.getFullYear()

	para.innerText = `${day}/${month}/${year},${hr}:${min}:${sec}`
}
setInterval(currentTime,1000)