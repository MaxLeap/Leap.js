define([],function(){
    return {
        'Chart':{
            plotOptions:{
                series: {
                    events:{
                        checkboxClick:function(event){
                            if(event){
                                event.checked?(this.show()):(this.hide());
                            }
                        },
                        legendItemClick:function(){
                            return false;
                        }
                    },
                    showCheckbox: true,
                    selected:true
                }
            },
            chart: {
                type: 'spline',
                height: 300
            },
            title: {
                text: ''
            },
            yAxis: {
                min:0,
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.category} : {point.y}'
            },
            colors:[
                '#4b98dd','#50c282','#fdd976','#ef8757','#a269c6','#3f63ac','#88dcfd','#d4f2fe','#f596b6','#f04c54','#70625a'
                ,'#ccc1ae','#39973f','#fdf66e','#ff7f7c','#9b35c8'
            ]
        },
        'SlickGrid':{
            editable: true,
            headerRowHeight: 30,
            rowHeight: 30,
            autoEdit: false,
            enableCellNavigation: true,
            asyncEditorLoading: false,
            forceFitColumns: true
        },
        'RetentionChart':{
            grid:{
                width:120,
                height:30,
                fontsize:14,
                padding:{
                    left:20
                }
            },
            data:[{
                install_period:"",
                total_install:0,
                retention_rate:[]
            }]
        },
        'Table':{
            display_header:true,
            row_color:true
        }
    }
});