import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom';

function Navbar({cartItems}) {

    const rightStyle = "text-[14px] mobile:text-[12px] cursor-pointer ml-[20px] mobile:ml-[5px]";

    return (
        <div className='navbar h-[60px] mobile:h-[50px] shadow-md fixed top-[24px] z-20 w-[100%] bg-white'>
            <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
                <div className='left flex flex-1 items-center'>
                    <div className='mobile:hidden language cursor-pointer text-[16px]'>
                        AZ
                    </div>
                    <div className=" searchInput mobile:w-[90%] mobile:ml-[-15px] m flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] mobile:p-[1px] focus-within:border-[#8a4af3] transition-all">
                        <input className='input outline-none mobile:w-[70%]' type="text" />
                        <Search />
                    </div>
                </div>
                <div className='center text-center flex-1 font-bold text-lg mobile:text-sm ' ><Link to="/">SESAW</Link> </div>
                <div className='right flex flex-1 items-center justify-end mobile:justify-between'>
                    <div className={rightStyle}><Link to="/register">Register</Link></div>
                    <div className={rightStyle}><Link to="/login">Sign in</Link></div>
                    <div>
                        <Badge badgeContent={cartItems} overlap="rectangular" color="primary">
                            <Link to="/cart"><ShoppingCartOutlined className={rightStyle} /></Link>
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar