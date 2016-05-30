$(function () {
 /*var wrap2 = $('#conversation');

    wrap2.pager({
        perPage: 4,
        infinite: true,

        init: function (startnum, totalnum) {
            $('#count2').text(startnum);
            $('#total2').text(totalnum);
        }
    });

    $('.action').click(function () {
        var action = $(this).attr('rel'); // get the appropriate action from the rel attribute
        wrap2.trigger("pager:" + action);
        return false;
    });

    $('select[name=perpage]').change(function () {
        wrap2.trigger('pager:refresh', {
            perPage: this.value
        });
        return false;
    });

    // listen out for events triggered by the plugin to update the counter
    wrap2.bind('pager:finished', function (e, num, isFirst, isLast) {
        $('#count2').text(num);
    });
*/



for (var i = 1; i < 40; i++) {
        $('#conversation').append('<div class="col-md-12 social-feed data"><div class=""><input type="checkbox"></div> <div class=""><i class="fa fa-pinterest" aria-hidden="true"></i></div> <div class="">MY favourite car is Toyta. MY favourite car is Toyta. MY favourite car is Toyta. MY favourite car is Toyta. MY favourite car is Toyta.</div> <div class="pull-right"><i class="fa fa-retweet" aria-hidden="true"></i> </div></div>');
    }

        load = function() {
            window.tp = new Pagination('#Paging', {
                itemsCount: 40,
                onPageSizeChange: function (ps) {
                    console.log('changed to ' + ps);
                },
                onPageChange: function (paging) {
                    //custom paging logic here
                    console.log(paging);
                    var start = paging.pageSize * (paging.currentPage - 1),
                        end = start + paging.pageSize,
                        $rows = $('#conversation').find('.data');

                    $rows.hide();

                    for (var i = start; i < end; i++) {
                        $rows.eq(i).show();
                    }
                }
            });
        }

    load();


    /**** Datepicker Controller ****/

    $( "#from" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
            $( "#to" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
            $( "#from" ).datepicker( "option", "maxDate", selectedDate );
        }
    });

    /**** Multiple Select ****/

    $('#ms, #ms1, #ms2 ').change(function() {
        console.log($(this).val());
    }).multipleSelect({
        width: '80%'
    });
});
