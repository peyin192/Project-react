import { Component } from 'react'
import './resign.css'

export default class resign extends Component {
  render() {
    return (
        <div className='resign'>
            <h1>Đăng ký tài khoản</h1>
            <p>Đăng ký tài khoản để sử dụng dịch vụ</p>
            <div className='form'>
                <div className="name-group">
                    <input type="text_name" placeholder='Họ và tên đệm' />
                    <input type="text_name" placeholder='Tên' />
                </div>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Mật khẩu' />
                <input type="password" placeholder='Xác nhận mật khẩu' />

                <label>
                    <input type="checkbox" className='checkbox' /> 
                    Bạn đồng ý với  <a href="#"> chính sách và điều khoản</a>
                </label>

                <button>Đăng ký</button>
                <p>Bạn đã có tài khoản? <a href="#">Đăng nhập</a></p>
            </div>
        </div>

    )
  }
}
