Ext.define('CustomApp', {
             extend: 'Rally.app.App',
         
             launch: function() {
                 var cardBoardConfig = {
                     xtype: 'rallycardboard',
                     types: ['User Story'],
                     attribute: "ScheduleState",
					 cardConfig: 'DrilldownCard'
                 };
         
                 this.add(cardBoardConfig);
             }
			 
         });

Ext.define('Rally.ui.cardboard.DrilldownCard', {
	extend: 'Rally.ui.cardboard.ArtifactCard',
	
	buildHeader: function() {
		alert("Marvelous!");
	}
})

         Rally.launchApp('CustomApp', {
             name: 'Cardboard with quick-add'

         });