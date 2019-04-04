var express = require("express");
var app = express();
var cors = require('cors');
app.use(cors());

app.listen(4000, () => {
	console.log("Server running on port 4000");
});

app.get("/product", (req, res, next) => {
	res.json([{
		"name": "Apple iPhone X (64GB) - Space Grey",
		"description": "iPhone X features a 5.8-inch Super Retina display with HDR and True Tone. An all-screen design and a surgical-grade stainless steel band. Charges wirelessly. Resists water and dust. 12MP dual cameras with dual optical image stabilization. TrueDepth camera with Portrait mode and Portrait Lighting. Face ID lets you unlock and use Apple Pay with just a glance. Powered by the A11 Bionic chip, iPhone X supports augmented reality experiences in games and apps. And iOS 12—the most advanced mobile operating system—with powerful new tools that make iPhone more personal than ever.",
		"imageURL": "../iphonex.jpg",
		"price": 74999,
		"tags": [
			"IPhone",
			"phone",
			"apple"
		]
	}, {
		"name": "Samsung Galaxy Note 8 (Maple Gold, 6GB RAM, 64GB Storage)",
		"description": "More screen means more space to do great things. Go big with the Galaxy Note8's 16.05cm (6.3) screen. It's the largest ever screen on a Note device and it still fits easily in your hand. Use the S Pen to express yourself in ways that make a difference. Draw your own emojis to show how you feel or write a message on a photo and send it as a handwritten note. Do things that matter with the S Pen",
		"imageURL": "../note8.jpg",
		"price": 36900,
		"tags": [
			"Note8",
			"phone",
			"Samsung"
		]
	}, {
		"name": "Samsung Galaxy S9 (Coral Blue, 4GB RAM, 64GB Storage)",
		"description": "Super Speed Dual Pixel Camera Infinity Display: edge-to-edge immersive screen, enhancing your entertainment experience IP68 rating: withstands splashes, spills, and rain so it can take a dip, worry-free Fast Wireless Charging: Avoid the wires and power up quickly by placing your phone on a Fast Wireless Charger Internal Memory 64 GB. Expandable Storage up to 400GB",
		"imageURL": "../samsungs9.jpg",
		"price": 489000,
		"tags": [
			"S9",
			"phone",
			"Samsung"
		]
	}]);
});

app.post("/product/update", (req, res, next) => {
	console.log(req);
	res.json(JSON.stringify({status: 200}));
});