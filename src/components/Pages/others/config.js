


 var settings = {
	dots: false,
	prevArrow: <></>,
	nextArrow:<></>,
	speed: 800,
	initialSlide: 0,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	cssEase: "linear",
	responsive: [
		{
			breakpoint: 1536,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				autoplaySpeed: 2000,
			}
		}
	]
};

module.exports = settings;
