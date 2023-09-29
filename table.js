$(document).ready(function() {
    var i = 1;
    $('#elaveet').click(function() {
        $('li input').val(' ')
        $('#esas').show()
        $('#create').show()
        $('#update').hide()
        $('table').hide()
    })
    $('#create').click(function() {
        i++;
        $('table').append(`<tr>
        <td>${i}</td>
        <td>${$('#ad').val()}</td>
        <td>${$('#soyad').val()}</td>
        <td>${$('#yas').val()}</td>
        <td><button class="edit">Edit</button> <button class="delete">Delete</button></td>
    </tr>`)
        $('table').show()
        $('#esas').hide()

    })

    $("#bagla").click(function() {
        $('table').show()
        $('#esas').hide()
    })
    $("tbody").on("click", '.delete', function() {
        var r = this
        $('#esas2').show()

        $('.he').click(function() {
            $(r).parents('tr').remove()
            var t = $('tbody tr')
            for (let h = t.length - 1; h > -1; h--) {
                $('tbody tr').eq(h).children('td:first-child').text(i - 1)
                i--;
            }
            i = t.length
            $('#esas2').hide()
        })

        $('.yox').click(function() {
            $('#esas2').hide()
        })

    });

    $("tbody").on("click", '.edit', function() {
        $('#create').hide()
        $('#update').show()
        var b = $(this).parents('tr').children('td')
        var c = this
        $('table').hide()
        $('#esas').show()
        for (let z = 0; z < 3; z++) {
            $('li input').eq(z).val(b.eq(z + 1).text())
        }
        $('#update').click(function() {
            $(c).parents('tr').html(`
            <td>${$(c).parents('tr').children('td').eq(0).text()}</td>
            <td>${$('#ad').val()}</td>
            <td>${$('#soyad').val()}</td>
            <td>${$('#yas').val()}</td>
            <td><button class="edit">Edit</button> <button class="delete">Delete</button></td>
        `)
            $('table').show()
            $('#esas').hide()

        })
    });

    $("body").on("keyup", '#axtar', function() {
        $('tbody tr').hide()
        $('tbody td').each(function() {
            if ($(this).text().toLowerCase().includes($('#axtar').val().toLowerCase())) {
                $(this).parents('tr').show()
            }
        })
    })
})