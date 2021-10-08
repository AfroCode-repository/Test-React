import React from 'react' //para usar componente e divs

export default (props) => {

    const {max, min} = props
    const resultado= parseInt(Math.random() * (max -  min) + min)

    return (
        <div>
            { resultado }
        </div>
    )
}