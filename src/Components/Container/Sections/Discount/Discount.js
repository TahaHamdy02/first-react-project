import React, { Component } from 'react';
import './Discount.css'
import Discount01 from '../../../../assets/images/dis/discount.png'
import { MS, SC } from '../compo/ComponentIndex'
class Discount extends Component {
    render() {
        return (
            <MS class='Discount' Uniq='Discount'>
                <SC CCS='Discount__container flex'>
                    <div className="left">
                        <div className="discount__title">
                            <h2>We Have A Discount</h2>
                        </div>
                        <div className="discount__text">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique laborum dicta aperiam odit doloribus corporis.</p>
                        </div>
                        <div className="discount__imgs">
                            <img src={Discount01} alt="discount__img" className='discount__img' />
                        </div>
                    </div>
                    <div className="right">
                        <form action="#" method='get'>
                            <h2>Request A Discount</h2>
                            <div className="label">
                                <input type="text" id='name' name='first name' placeholder='Name' className="name" autoComplete="off" />
                            </div>
                            <div className="label">
                                <input type="email" name="email" id="email" placeholder='Email' className='Email' autoComplete="off" />
                            </div>
                            <div className="label">
                                <input type="text" name='number' id='number' placeholder='Number' className='Number' autoComplete="off" />
                            </div>
                            <div className="label">
                                <textarea name="textera" id="textera" rows="5" placeholder='Tell Us About Your Needs'></textarea>
                            </div>
                            <div className="discount__btns">
                                <button className='discount__btn'>Send</button>
                            </div>

                        </form>
                    </div>
                </SC>
            </MS>
        );
    }
}

export default Discount