import './scss/_vars.scss'
import './scss/contractor.scss'
import './scss/dropdown.scss'
import './scss/main.scss'
import './scss/form.scss'
import './scss/table-rooms.scss'
import './scss/object-data.scss'
import {Table} from "./Table.js"
import {Contractors} from "./Contractors";
import {ObjectData} from "./ObjectData"
import {DropDown} from "./DropDown";
import {globalData} from "./global"
import {Validator} from "./Validator";

var App = (function () {
	return {
		init() {
			this.render()
			Contractors.init();
			Table.init();
			ObjectData.init();
			DropDown.init();
			Validator.init()

		},
		render() {
			this.event()
		},
		event() {
			$('#load').on("click", () => {
				$.post('http://localhost:3000/formdata', globalData, function (data) {
					alert(JSON.stringify(data));
				})

			});
			$('#send').on("click", () => {
				//		globalData.contractors =[]
				globalData.contractors.push(this.methods.dataGenerator())
			});
		},
		methods: {
			dataGenerator() {
				let index = 0,
					contractor = [],
					activeOption = activeOptionGenerator([
						{text: 'Частная', value: 'individual'},
						{text: 'Общественная', value: 'communal'},
						{text: 'Корпоративная', value: 'corporate'}])
					$(".selector").val(activeOption)
				namesGenerator().forEach((item) => {
					contractor.push({name: item, id: index++, phone: phoneGenerator()})
				})
				return contractor
			}
		}
	}
})();

function namesGenerator() {
	var num = Math.floor(Math.random() * 9) + 1,
		nameArr = ["Женя", "Вася", "Петя", "Маша", "Даша", "Саша", "Юля", "Анна", "Игорь"],
		result = []
	for (var i = 0; i < num; i++) {
		result.push(nameArr[Math.floor(Math.random() * 9)])
	}
	return result
}

function phoneGenerator() {
	var phone = '89'
	for (var i = 0; i < 9; i++) {
		phone += Math.floor(Math.random() * 9)
	}
	return phone
}

function activeOptionGenerator(options) {
	return options[Math.floor(Math.random() * 3)].value
}

App.init();
