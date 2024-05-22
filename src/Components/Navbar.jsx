import './Navbar.css'

function Navbar(){
    return(
        <div className="Navbar">
            <div id='logo'>
            </div>
            <div className='opt'>
                <select name="select1" id="select1">
                    <option value="0">Tutorial</option>
                </select>
            </div>
            <div className='opt'>
            <select name="select1" id="select1">
                    <option value="0">Jobs</option>
                </select>
            </div>
            <div className='opt'>
            <select name="select1" id="select1">
                    <option value="0">Practice</option>
                </select>
            </div>
            <div className='opt'>
            <select name="select1" id="select1">
                    <option value="0">Content</option>
                </select>
            </div>
            <input type="text" placeholder='Search...' id='search'/>
            <span className="search-box"></span>
            <span className='theme'></span>
            <div className='setGoal'>
            <span className='goal'></span>
            Set Goal
            </div>
            <div className='code'>
            <span className='codeSpace'></span>
            Spaces
            </div>
            <div className='cart'>
            <span className='shopCart'></span>
            Get Certified
            </div>
            <button className='btn1'>Sign Up</button>
            <button className='btn2'>Log in</button>
        </div>
    )
}
export default Navbar;