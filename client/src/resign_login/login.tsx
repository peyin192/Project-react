import  { Component } from 'react'
import './resign.css'

export default class resign extends Component {
  render() {
    return (
        <div className='resign'>
            <h1>Đăng nhập</h1>
            <p>Đăng nhập tài khoản để sử dụng hệ thống quản lý</p>
            <div className='form'>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Mật khẩu' />
                <input type="password" placeholder='Xác nhận mật khẩu' />

                <label>
                    <input type="checkbox" className='checkbox' /> Nhớ tài khoản
                    <a href="#">Quên mật khẩu?</a>
                </label>

                <button>Đăng ký</button>
                <p>Bạn chưa có tài khoản? <a href="#">Đăng Ký</a></p>
            </div>
        </div>

    )
  }
}
