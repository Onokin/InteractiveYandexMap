ymaps.ready(function() {
	
	function RadioResetSchools() {
		globalPlacemarkResetSchools();
	}
	
	function RadioResetChildren() {
		globalPlacemarkResetChilderen();		
	}
    
	$("#radio-schools input").on( "click", function() {
		console.log("hehe");
		RadioResetSchools();
		RadioResetChildren();
		RadioResetRsp();
		if ($("#radio-schools input:checked").val() == "on") {
			if (pick == 'Centralnyj') {
				CentralnyjSchools.options.set('visible', true);
			}
			if (pick == 'Frunzenskij') {
				FrunzenskijSchools.options.set('visible', true);
			}
			if (pick == 'Leninskij') {
				LeninskijSchools.options.set('visible', true);
			}
			if (pick == 'Moskovskij') {
				MoskovskijSchools.options.set('visible', true);
			}
			if (pick == 'Oktyabrskij') {
				OktyabrskijSchools.options.set('visible', true);
			}
			if (pick == 'Partizanskij') {
				PartizanskijSchools.options.set('visible', true);
			}
			if (pick == 'Pervomajskij') {
				PervomajskijSchools.options.set('visible', true);
			}
			if (pick == 'Sovetskij') {
				SovetskijSchools.options.set('visible', true);
			}
			if (pick == 'Zavodskoj') {
				ZavodskojSchools.options.set('visible', true);
			}
		}
	});
				
	$("#radio-children input").on( "click", function() {
		if ($("#radio-children input:checked").val() == "on") {
			RadioResetSchools();
			RadioResetChildren();
			RadioResetRsp();
			if (pick == 'Centralnyj') {
				CentralnyjChildren.options.set('visible', true);
			}
			if (pick == 'Frunzenskij') {
				FrunzenskijChildren.options.set('visible', true);
			}
			if (pick == 'Leninskij') {
				LeninskijChildren.options.set('visible', true);
			}
			if (pick == 'Moskovskij') {
				MoskovskijChildren.options.set('visible', true);
			}
			if (pick == 'Oktyabrskij') {
				OktyabrskijChildren.options.set('visible', true);
			}
			if (pick == 'Partizanskij') {
				PartizanskijChildren.options.set('visible', true);
			}
			if (pick == 'Pervomajskij') {
				PervomajskijChildren.options.set('visible', true);
			}
			if (pick == 'Sovetskij') {
				SovetskijChildren.options.set('visible', true);
			}
			if (pick == 'Zavodskoj') {
				ZavodskojChildren.options.set('visible', true);
			}
		}
	});

	$("#radio-rsp input").on( "click", function() {
		if ($("#radio-rsp input:checked").val() == "on") {
			RadioResetSchools();
			RadioResetChildren();
			RadioResetRsp();
			if (pick == 'Centralnyj') {
				CentralnyjRsp.options.set('visible', true);
			}
			if (pick == 'Frunzenskij') {
				FrunzenskijRsp.options.set('visible', true);
			}
			if (pick == 'Leninskij') {
				LeninskijRsp.options.set('visible', true);
			}
			if (pick == 'Moskovskij') {
				MoskovskijRsp.options.set('visible', true);
			}
			if (pick == 'Oktyabrskij') {
				OktyabrskijRsp.options.set('visible', true);
			}
			if (pick == 'Partizanskij') {
				PartizanskijRsp.options.set('visible', true);
			}
			if (pick == 'Pervomajskij') {
				PervomajskijRsp.options.set('visible', true);
			}
			if (pick == 'Sovetskij') {
				SovetskijRsp.options.set('visible', true);
			}
			if (pick == 'Zavodskoj') {
				ZavodskojRsp.options.set('visible', true);
			}
		}
	});
	
});