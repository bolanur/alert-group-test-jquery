import template from "./handdlebars/data.handlebars"
import {globalData} from "./global";

export var ObjectData = (function () {

	var block = '',
		appartament = '',
		constructionAxis = ''

	return {
		init: function () {
			this.render()

		},
		getData: function (url) {

		},
		render: function () {
			this.event();
			globalData.objectData = {block, appartament, constructionAxis}
		},
		event: function () {


			$('.selector').on("change", () => {
				this.methods.dataGenerator()
				this.methods.showData()

			});

		},
		methods: {
			dataGenerator() {
				block = Math.floor(Math.random() * 5 + .5)

				appartament = Math.floor(Math.random() * 100 - .5)

				constructionAxis = charGenerator().toUpperCase() + charGenerator() + charGenerator() +
					'-' + Math.round(Math.random() * 100 - .5)
			},

			showData() {
				$('.info').empty()

				$('.info').append(template({block, appartament, constructionAxis}))

			},

		}

	}
})();

function charGenerator() {
	return String.fromCharCode(Math.floor(Math.random() * (97 - 119)) + 119)
}
