 // target the shape area
    const shape_area = document.querySelector('.shape-area')

// target the select input
document.querySelector('.shape-option').addEventListener('change', calculate_area)

function calculate_area(event){
   

    let selected_shape  = event.target.value

    if(selected_shape === "square"){
        let shape = `<div class="square">
                         <h2>Square</h2>
                         <input type="text" placeholder="enter length of square" class="square_length" >

                         <label>select unit</label>
                         <select class="unit">
                               
                              <option value="" selected disabled>select unit</option>
                              <option value="cm">Centimetre</option>
                              <option value="m">meter</option>
                         </select>
                         <button>Find Area</button>
                         <h1>
                               Area = <span class="result">0</span><small class="display-unit">cm</small><sup>2</sup>
                         </h1>
                  </div>`

                shape_area.innerHTML = shape
            

              document.querySelector('button').addEventListener('click', function(){
                       let selected_unit =  document.querySelector('.unit').value

                      let square_length = Number(document.querySelector('.square_length').value)
                      let area = square_length * square_length
                      document.querySelector('.result').innerHTML = area.toFixed(1)
                      document.querySelector('.display-unit').innerHTML = selected_unit
              })



    }else if(selected_shape === "rectangle"){
        let shape = ` <div class="rectangle">
                    <h2>Rectangle</h2>
                    <input type="text" placeholder="enter length of rectangle" class="length">
                    <input type="text" placeholder="enter breadth of rectangle" class="breadth">
                     <label>select unit</label>
                    <select class="unit">
                        <option value="" selected disabled>--</option>
                        <option value="cm">Centimetre</option>
                        <option value="m">meter</option>
                    </select>
                    <button>Find Area</button>
                    <h1>
                        Area = <span class="result">0</span><small class="display-unit">cm</small><sup>2</sup>
                    </h1>
                </div>`
                shape_area.innerHTML = shape
                  document.querySelector('button').addEventListener('click', function(){
                       let selected_unit =  document.querySelector('.unit').value

                      let rect_length = Number(document.querySelector('.length').value)
                      let rect_breadth = Number(document.querySelector('.breadth').value)
                      let area = rect_length * rect_breadth
                      document.querySelector('.result').innerHTML = area.toFixed(1)
                      document.querySelector('.display-unit').innerHTML = selected_unit
              })

    }else if(selected_shape === "triangle"){
              let shape = ` <div class="triangle">
                    <h2>Triangle</h2>
                    <input type="text" placeholder="enter the base of the triangle" class="base">
                    <input type="text" placeholder="enter the height of the triangle" class="height">
                     <label>select unit</label>
                    <select class="unit">
                        <option value="" selected disabled>--</option>
                        <option value="cm">Centimetre</option>
                        <option value="m">meter</option>
                    </select>
                    <button>Find Area</button>
                    <h1>
                        Area = <span class="result">0</span><small class="display-unit">cm</small><sup>2</sup>
                    </h1>
                </div>`
                shape_area.innerHTML = shape

                 document.querySelector('button').addEventListener('click', function(){
                       let selected_unit =  document.querySelector('.unit').value

                      let triangle_base = Number(document.querySelector('.base').value)
                      let triangle_height = Number(document.querySelector('.height').value)
                      let area = 0.5 * triangle_base * triangle_height
                      document.querySelector('.result').innerHTML = area.toFixed(1)
                      document.querySelector('.display-unit').innerHTML = selected_unit
              })



    }else if(selected_shape === "circle"){
          let shape = `<div class="circle">
                    <h2>Circle</h2>
                    <input type="text" placeholder="enter the radius of the circle" class="radius">
                     <label>select unit</label>
                    <select class="unit">
                        <option value="" selected disabled>--</option>
                        <option value="cm">Centimetre</option>
                        <option value="m">meter</option>
                    </select>
                    <button>Find Area</button>
                    <h1>
                        Area = <span class="result">0</span><small class="display-unit">cm</small><sup>2</sup>
                    </h1>
                </div> `
                shape_area.innerHTML = shape
                   document.querySelector('button').addEventListener('click', function(){
                       let selected_unit =  document.querySelector('.unit').value

                      let radius = Number(document.querySelector('.radius').value)
                      let area = 3.142 * radius * radius
                      document.querySelector('.result').innerHTML = area.toFixed(1)
                      document.querySelector('.display-unit').innerHTML = selected_unit
              })

    }else{
            shape_area.innerHTML = `<h1>Ooops! pls select a valid shape</h1>`
    }
}