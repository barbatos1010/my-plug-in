var arr = [
        {
            name: '王德发'
        },
        {
            name: '刘德华'
        },
        {
            name: '张学友'
        },
        {
            name: '黎明'
        }
    ]
    var scorecard = 0;
    function traversal(list,id) {
        list.forEach(obj => {
                var str = `<li><input type="checkbox"/> <span>${obj.name}</span></li>`
                $('#'+id+'').append(str)
        })
    }

    $(document).ready(function () {

        $('#refresh').click(function(){
            $('#left').empty()
            traversal(arr,'left')
        })

        $('#rightBtn').click(function () {
            var right = $('#right')
            $("#left li input[type='checkbox']").each(function () {
                var that = $(this)
                if (that.prop('checked')) {
                    
                    that.prop('checked', false)
                    right.append(that.parent())
                }
            })
        })

        $('#searchBtn').click(function () {
            var searchContent = $('#search').val()
            var arr1 = arr.filter(function (item) {
                return item.name.match(searchContent)
            })
            if(arr1.length > 0 ){
                $('#left').empty()
                traversal(arr1,'left')
            }
        })

        $('#leftBtn').click(function () {
            var left = $('#left')
            $("#right li input[type='checkbox']").each(function () {
                var that = $(this)
                if (that.prop('checked')) {
                    scorecard--
                    that.prop('checked', false)
                    left.append(that.parent())
                }

            })
        })

        //
        $("#right").on('change',"li input[type='checkbox']",function(){
            if($(this).prop('checked')){
                $(this).attr('pitchOf','true')
                scorecard++
                if(scorecard === 1){
                    removeDisable('topBtn')
                    removeDisable('bottomBtn')
                }else{
                    disabled('topBtn')
                    disabled('bottomBtn')
                }
            }else{
                $(this).attr('pitchOf','false')
                scorecard--
                if(scorecard === 0){
                    disabled('topBtn')
                    disabled('bottomBtn')
                }else if(scorecard === 1){
                    removeDisable('topBtn')
                    removeDisable('bottomBtn')
                }
            }
            console.log(scorecard)
        })
        
        $('#topBtn').click(function(){
            var cur = $('#right').find("[pitchOf='true']").parent()
            var prev = cur.prev();
            if(prev.length !== 0 ){
                prev.before(cur)
            }else{
                alert('已经是第一个了')
            }
        })

        $('#bottomBtn').click(function(){
            var cur = $('#right').find("[pitchOf='true']").parent()
            var next = cur.next();
            if(next.length !== 0 ){
                next.after(cur)
            }else{
                alert('已经是最后一个了')
            }
        })

        //禁用按钮
        function disabled(id){
            $('#'+id+'').attr('disabled','disabled')
        }
        //解除禁用
        function removeDisable(id){
            $('#'+id+'').removeAttr('disabled')
        }

        traversal(arr,'left')
        traversal(arr,'right')
    })