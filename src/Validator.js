
export var Validator = (function () {
	return {
		init: function () {
			this.render()
		},
		render() {
			this.event()
		},
		event: function () {
			$(document).on('input', '.text_field', (e) => {
				$(".text_field").each((el) => {
					//$("#contractor-name"+el)
					$("#contractor-name-error" + el).text(() => {
						return $("#contractor-name" + el).val() === '' ? "Введите имя" :
							/[^А-ЯA-Zа-яa-z\sЁё]/.test($("#contractor-name" + el).val()) ? "Недопустимые символы в имени" : ''

					})

					$("#contractor-phone-error" + el).text(() => {
						return $("#contractor-phone" + el).val() === '' ? "Введите номер телефона" :
							/[^\d\s]/.test($("#contractor-phone" + el).val()) ? "Недопустимые символы в номере телефона" :
								!/\b\d{11}\b/.test($("#contractor-phone" + el).val().replace(/\s/g, '')) ? 'В номере телефона должно быть 11 цифр' : ''

					})
				})
			})
		}
	}
})()

