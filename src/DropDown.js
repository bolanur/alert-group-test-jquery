export var DropDown = (function () {
	return {
		init: function () {
			this.render()
		},
		render: function () {
			this.event();
		},
		event: function () {
			$('.dropdown__header').on("click",()=> {
				$('.dropdown__header').toggleClass('is-active')

			})

		}
	}
})();
