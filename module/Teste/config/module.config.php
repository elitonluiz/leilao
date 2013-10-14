<?php
return array(
	'controllers' => array(
		'invokables' => array(
			'TesteController' => 'Teste\Controller\TesteController'
		)
	),
	
	'router' => array(
		'routes' => array(
			'teste' => array(
				'type' => 'Segment',
				'options' => array(
					'route' => '/teste[/][:action]',
					'defaults' => array(
						'controller' => 'TesteController',
						'action' => 'index'
					)
				)
			)
		)
	),
		
	'view_manager' => array(
		'template_path_stack' => array(
			'teste' => __DIR__ . '/../view/'
		)		
	)
);