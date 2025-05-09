use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn is_mandelbrot(x: i32, y: i32,x1:f64,y1:f64,scale:f64,max_iter:usize) -> i32 {
    let y0 = scale*2.0 * (y as f64 + y1) / (700.0);
    let x0 = scale*2.0 * (x as f64 + x1) / (700.0);

    let mut x = 0.0;
    let mut y = 0.0;
    let mut iter = 0;
    let mut abs_past:f64 = 0.0;
    let mut out = 0;

    while iter < max_iter  {
            let abs:f64 = x * x + y * y ;
            if abs > 4.0{
                let dist_prev = abs.sqrt() - abs_past.sqrt();
                let dist_next = 2.0 - abs_past.sqrt();
                let con = iter as f64 + dist_next/dist_prev;
                out =  (con*2.55) as i32;
                break;
             }

            let xtemp = x * x - y * y + x0;
            y = 2.0 * x * y + y0;
            abs_past =  abs ;
            x = xtemp;
            iter += 1;
            out = iter as i32;
    }
    if iter >= max_iter {
        return 0;
    }
    
    else{
        return ((out as f64)*2.55) as i32;
    }
    
}

// #[wasm_bindgen]
// pub fn is_julia(x: i32, y: i32,x1:f64,y1:f64,scale:f64,cx:f64,cy:f64) -> i32 {
//     let mut zx = scale*2.0 * (y as f64) / (700.0)+y1;
//     let mut zy = scale*2.0 * (x as f64) / (700.0)+x1;

//     let mut iter = 0;

//     while (iter < MAX_ITER) && zx * zx + zy * zy  < 4.0 {
         
//             let xtemp = zx * zx - zy * zy;
//             zy = 2.0 * zx * zy + cy;
//             zx = xtemp + cx;
//             iter += 1;
//     }
//     if iter == MAX_ITER {
//         return 0;
//     }
    
//     else{
//         return iter*3 as i32;
//     }
    
// }

#[wasm_bindgen]
pub fn generate_mandelbrot(x0:f64,y0:f64,scale:f64,screen_w:i32,screen_h:i32,max_iter:usize) -> Box<[u8]> {
    let (y_min, y_max) = (-screen_h/2, screen_h/2);
    let (x_min, x_max) = (-screen_w/2, screen_w/2);

    let mut out_vec = vec![0; (screen_h*screen_w) as usize];

    for y in y_min..y_max {
        for x in x_min..x_max {
            let state = is_mandelbrot(x as i32, y as i32,x0,y0,scale,max_iter);
            let index = ((y - y_min) * (x_max - x_min) + (x - x_min)) as usize;
            out_vec[index] = state as u8;
        }
    }

    let out_box = out_vec.into_boxed_slice();
    return out_box;
}



// #[wasm_bindgen]
// pub fn generate_julia(x0:f64,y0:f64,scale:f64,cx:f64,cy:f64) -> Box<[u8]> {
//     let (y_min, y_max) = (0, 750);
//     let (x_min, x_max) = (0, 1200);

//     let mut output_array = [0; 750 * 1200];

//     for y in y_min..y_max {
//         for x in x_min..x_max {
//             let state = is_julia(x as i32, y as i32,x0,y0,scale,cx,cy);
//             let index = ((y - y_min) * (x_max - x_min) + (x - x_min)) as usize;
//             output_array[index] = state as u8;
//         }
//     }

//     let out_vec = output_array.to_vec();
//     let out_box = out_vec.into_boxed_slice();
//     return out_box;
// }
