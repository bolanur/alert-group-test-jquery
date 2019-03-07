import template from "./handdlebars/table-row.handlebars"
import {globalData} from "./global"

export var Table = (function () {

	var rows = [], randomData = ['Кухня', 'Коридор', 'Балкон', 'Прихожая', 'Санузел']

	return {
		init: function () {
			this.render()
		},
		render: function () {
			this.event();
			globalData.tableRows.push(rows)
		},
		event: function () {

			$('#send').on("click", () => {
				rows = []
				let num = Math.round(Math.random() * 10 + 1)
				for (var i = 0; i < num; i++)
					rows.push(this.methods.rowGeneretor())
				this.methods.showTable()
			})
			$('.selector').on("change", () => {
				rows = []
				let num = Math.round(Math.random() * 10 + 1)
				for (var i = 0; i < num; i++)
					rows.push(this.methods.rowGeneretor())
				this.methods.showTable()
			})


		},
		methods: {
			rowGeneretor() {
				var arr = []
				for (var i = 0; i < 3; i++) {
					arr.push(randomData[
						Math.round(
							Math.random() * (randomData.length - 1)
						)])
				}
				return arr
			},
			showTable() {
				$('tr').empty()
				rows.forEach((row) =>
					$('table').append(template({'col0': row[0], 'col1': row[1], 'col2': row[2]})))

			}
		}

	}
})();
