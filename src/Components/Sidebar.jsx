import './Sidebar.css'
function Sidebar(props){
    return(
        <div className='Sidebar'>
            <div id='head1'>
                <h1>HTML Tutorial</h1>
            </div>
            <div id="select2">
                <p onClick={()=>{props.click(1)}}>HTML HOME</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click(2)}}>HTML Introduction</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click(3)}}>HTML Editors</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click(4)}}>HTML Basic</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click(5)}}>HTML Elements</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Attributes</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Headings</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Paragraphs</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Styles</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Formatting</p>
            </div>          
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Quotations</p>
            </div>  
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Comments</p>
            </div>  
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Colors</p>
            </div>  
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML CSS</p>
            </div>  
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Links</p>
            </div>  
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Images</p>
            </div>  
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Favicon</p>
            </div>    
            <div id='head2'>
                <h1>HTML Forms</h1>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Forms</p>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Form Attributes</p>
            </div>    
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Form Elements</p>
            </div>    
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Input Types</p>
            </div>    
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Input Attributes</p>
            </div>        
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Form Attributes</p>
            </div>    
            <div id='head3'>
                <h1>HTML Graphics</h1>
            </div>
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML Canvas</p>
            </div>   
            <div id="select2">
            <p onClick={()=>{props.click()}}>HTML SVG</p>
            </div> 
            </div>
    )
}           
export default Sidebar
