Ext.define('CustomApp', {
    extend: 'Rally.app.App',

    launch: function() {
        var cardBoardConfig = {
            xtype: 'rallycardboard',
            types: ['User Story'],
            attribute: "ScheduleState",
            cardConfig: {
                xtype: 'drilldowncard'
            }
        };

        this.add(cardBoardConfig);
    }

});


