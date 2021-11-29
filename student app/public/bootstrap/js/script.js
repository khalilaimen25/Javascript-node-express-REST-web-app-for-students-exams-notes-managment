$(document).ready( ()=>{
    $('.delete-student').on('click', (e)=>{
        $target = $(e.target)
        const id = $target.attr('data-id')
        var location = '/students?d=1'

        if (confirm('please confirm to complete the delete !! ')) {

            $.ajax({
                type:'delete',
                url:'/student/' + id,
                success:(res)=>{
                    console.log('ook')
    
                    window.location.href = location
                },
                error:(err)=>{
                    console.log('err')
                    console.log(err)
                }
            })
        }
    })

    $('.update-student').submit( (e)=>{
        e.preventDefault()
        $target = $(e.target)
        var formAction = $target.attr('action')
        var formData = $target.serialize()
        $.ajax({
            url:formAction,
            data:formData,
            type:'put',
            success:(req,res)=>{                
                window.location.href="/students?u=1"
            },
            error:(err)=>{
                console.log(err)
            }
        })
    })

    $('.delete-teacher').on('click', (e) => {
        $target = $(e.target)
        const id = $target.attr('data-id')
        var location = '/teachers?d=1'
        if(confirm('please confirm to complete the delete !! ')){

            $.ajax({
                type: 'delete',
                url: '/teacher/' + id,
                success: (res) => {
                    window.location.href = location
                },
                error: (err) => {
                    console.log(err)
                }
            })
        }
    })

    $('.update-teacher').submit((e) => {
        e.preventDefault()
        $target = $(e.target)
        var formAction = $target.attr('action')
        var formData = $target.serialize()
        $.ajax({
            url: formAction,
            data: formData,
            type: 'put',
            success: (req, res) => {
                window.location.href = "/teachers?u=1"
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

    $('.res-delete-reclamation').on('click', (e) => {
        $target = $(e.target)
        const id = $target.attr('data-id')
        var location = '/reclamations?d=1'

        $.ajax({
            type: 'delete',
            url: '/reclamation/' + id,
            success: (res) => {
                window.location.href = location
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

    $('.te-delete-reclamation').on('click', (e) => {
        $target = $(e.target)
        const id = $target.attr('data-id')
        var location = '/reclamations?d=1'

        $.ajax({
            type: 'delete',
            url: '/reclamation/' + id,
            success: (res) => {
                window.location.href = location
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

    $('.update-note').submit((e) =>{
        e.preventDefault()
        $target = $(e.target)
        var formAction = $target.attr('action')
        var formData = $target.serialize()
        $.ajax({
            url: formAction,
            data: formData,
            type: 'put',
            success: (req, res) => {
                window.location.href = "/students?u=1"
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

    $('.delete-note').on('click', (e)=>{
        $target = $(e.target)
        const id = $target.attr('data-id')
        var location = '/students?d=1'

        $.ajax({
            type: 'delete',
            url: '/student/note/' + id,
            success: (res) => {
                window.location.href = location
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

    $('.delete-actuality').on('click', (e) => {
        $target = $(e.target)
        const id = $target.attr('data-id')
        var location = '/actualities?d=1'

        $.ajax({
            type: 'delete',
            url: '/actuality/' + id,
            success: (res) => {
                window.location.href = location
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

    $('.update-account').submit((e) => {
        e.preventDefault()
        $target = $(e.target)
        var formAction = $target.attr('action')
        var formData = $target.serialize()
        $.ajax({
            url: formAction,
            data: formData,
            type: 'put',
            success: (req, res) => {
                window.location.href = "/dashboard?u=1"
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

    
})