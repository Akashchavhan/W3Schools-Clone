import './Content.css'
function Content(props){
    return(
        <div className="Content">
            <h1>{props.heading}</h1>
            <button id='btn3'>Home</button>
            <button id='btn4'>Next</button>
            <div className='box'>
                <p>{props.para}<br />
                   {props.para2}<br />
                   {props.para3}</p>
                   <button id='btn5'>
                    <h4>Study our free HTML Tutorial</h4>
                   </button>
            </div>
            <div className='box2'>
                <h4>{props.easy}</h4>
                <p>With our "Try it Yourself" editor, you can edit the HTML code and view the result</p>
                <div className='innerbox1'>
                    <h3>Example</h3>
                    <div className='innerbox2'>
                       
                        <p>
                        {`<!DOCTYPE html>`} <br />
                        {`<html>`} <br />
                        {`<head>`}<br />
                        {`<title>Page Title</title>`}<br />
                        {`</head>`}<br />
                        {`<body>`}<br /><br />

                        {`<h1>This is a Heading</h1>`}<br />
                        {`<p>This is a paragraph.</p>`}<br /><br />

                        {`</body>`}<br />
                        {`</html>`}
                        </p>
                          
                           <div id='line'></div>
                    </div>
                    <button id='btn6'>Try it Yourself</button>
                </div>
            </div>
        </div>
    )
}
export default Content