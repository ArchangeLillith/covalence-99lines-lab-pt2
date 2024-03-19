const friends = ["Dennis", "Kris", "Rackie", "Paul", "Inaki"];
document.addEventListener("DOMContentLoaded", () => {
	button = document.getElementById("btn");
	button.addEventListener("click", () => {
		for (let friend of friends) {
			//Make the scaffolding every output will have
			const friendName = document.createTextNode(friend);
			const div = document.createElement("div");
			const h3 = document.createElement("h3");
			const p = document.createElement("p");
			div.classList.add("friend");
			h3.appendChild(friendName);
			div.appendChild(h3);
			document.body.appendChild(div);
			//Loop through and add things as the loop goes
			for (let i = 99; i >= 1; i--) {
				if (i === 1) {
					const pText = document.createTextNode(
						`1 line of code in the file, 1 line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file`
					);
					p.appendChild(pText);
					div.appendChild(p);
				} else {
					const pText = document.createTextNode(
						`${i} lines of code in the file, ${i} lines of code; ${friend} strikes one out, clears it all out, ${
							i - 1
						} lines of code in the file`
					);
					p.appendChild(pText);
					div.appendChild(p);
				}
			}
		}
	});
});
