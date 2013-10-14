jQuery(document).ready(function($) {
	function temporizador(elemento, data_inicio, hora_inicio) {
		var intVals = new Object();
		var id = '' + String(elemento.parent().attr('id')) + '';
		var horario = hora_inicio.split(':');
		var hora = parseInt(horario[0]);
		var min = parseInt(horario[1]);
		var sec = parseInt(horario[2]);
		
		intVals[id] = setInterval(function() {
			
			if (sec === 0) {
				sec = 59;
				
				if (min === 0){
					min = 59;
					
					if (hora === 0) {
						sec = 0;
						min = 0;
						pararTemporizador();
					}
					else{
						hora -= 1;
					}
				}
				else{
					min -= 1;					
				}
			}
			else{
				sec -= 1;
				
				if(sec <= 15 && min === 0 && hora === 0) {
					elemento.parent().addClass('leilao-timer-limite')
							.closest('.item-leilao').find('> div:not(.caixa-item-leilao)').each(function() {
								if ($(this).hasClass('sombra-padrao')) {
									$(this).removeClass('sombra-padrao').addClass('sombra-vermelha');
								}
								else if ($(this).hasClass('sombra-superior-padrao')) {
									$(this).removeClass('sombra-superior-padrao').addClass('sombra-superior-vermelha');
								}
								else if ($(this).hasClass('sombra-inferior-padrao')) {
									$(this).removeClass('sombra-inferior-padrao').addClass('sombra-inferior-vermelha');
								}
							});
				}
			}
			
			var exb = new Object();
				exb['hora'] = (hora < 10 ? "0" + hora : hora);
				exb['min'] = (min < 10 ? "0" + min : min);
				exb['sec'] = (sec < 10 ? "0" + sec : sec);
			
			elemento.html(exb['hora'] + ':' + exb['min'] + ':' + exb['sec']);
		}, 1000);
		
		function pararTemporizador() {
			clearInterval(intVals[id]);
		}
	}
	
	$('.item-leilao').each(function(c) {
		var id = $(this).attr('id');
		var elemento = $(this).find('.leilao-timer > .caixa-timer');
		var data_inicio = $('#data-leilao_' + id).val();
		var hora_inicio = $('#hora-leilao_' + id).val();
		
		temporizador(elemento, data_inicio, hora_inicio);
	});
});