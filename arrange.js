const shuffleBtn = document.getElementById("shuffleBtn");
  const sortBtn = document.getElementById("sortBtn");
  let gridContainer = document.getElementById("gridContainer");

  function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [array[i], array[j]] = [array[j], array[i]];
	}
  }

  const colors = [
	"#000000",
	"#2B8EAD",
	"#333333",
	"#6F98A8",
	"#FFFFFF",
	"#BFBFBF",
	"#EFEFEF",
	"#2F454E",
	"#72C3DC",
  ];

  sortBtn.addEventListener("click", () => {
	let divs = "";
	for (let i = 0; i < colors.length; i++) {
	  divs +=
		'<div class="grid-item"><div class="max" style="background-color:' +
		colors[i] +
		'">' +
		(i + 1) +
		'</div><div class="min"><div class="strip" style="background-color:' +
		colors[i] +
		'"></div><div class="number">' +
		(i + 1) +
		"</div></div></div>";
	}
	gridContainer.innerHTML = divs;
  });

  shuffleBtn.addEventListener("click", () => {
	let copyColors = [...colors];
	shuffleArray(copyColors);
	let divs = "";
	for (let i = 0; i < copyColors.length; i++) {
	  divs +=
		'<div class="grid-item"><div class="max" style="background-color:' +
		copyColors[i] +
		'">' +
		(colors.indexOf(copyColors[i]) + 1) +
		'</div><div class="min"><div class="strip" style="background-color:' +
		copyColors[i] +
		'"></div><div class="number">' +
		(colors.indexOf(copyColors[i]) + 1) +
		"</div></div></div>";
	}
	gridContainer.innerHTML = divs;
  });

  sortBtn.click();