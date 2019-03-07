import template from "./handdlebars/contractors.handlebars"
import {globalData} from "./global"

export var Contractors = (function () {
	var contractorId = 0,
		contractors = [{
			id: contractorId,
			name: "",
			phone: "",

		}]
	return {
		init: function () {

			this.render()
		},
		render() {

			this.event()
			globalData.contractors.push(contractors)
		},
		event: function () {

			$('#addContractor').on("click", () => {
				contractors.push({id: contractorId++})

				this.methods.showContractors()

			});
			$('#send').on("click", () => {
					$("#contractors-list").empty()
					let globalContrLength = globalData.contractors.length - 1

					for (let i = 0; i < globalData.contractors[globalContrLength].length; i++) {
						$('#contractors-list').append(template(globalData.contractors[globalContrLength][i]))
						$('.text_field_error').text("")
					}
				}
			);
		},

		methods: {
			showContractors() {
				$('#contractors-list').append(template(contractors[contractorId]))
			}
		}
	}

})();
