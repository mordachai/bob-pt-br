Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'bob-pt-br',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});
