import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const navigate = useNavigate();

  // State cho form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State cho errors
  const [errors, setErrors] = useState({});

  // Hàm validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Hàm validate password
  const validatePassword = (password) => {
    // Kiểm tra độ dài tối thiểu 6 ký tự
    if (password.length < 6) {
      return false;
    }

    // Kiểm tra có ít nhất 1 chữ hoa
    const hasUpperCase = /[A-Z]/.test(password);
    // Kiểm tra có ít nhất 1 chữ thường
    const hasLowerCase = /[a-z]/.test(password);
    // Kiểm tra có ít nhất 1 số
    const hasNumber = /[0-9]/.test(password);
    // Kiểm tra có ít nhất 1 ký tự đặc biệt
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  };

  // Hàm validate form
  const validateForm = () => {
    const newErrors = {};

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'Tên đăng nhập không được để trống';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Tên đăng nhập phải có ít nhất 3 ký tự';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email không được để trống';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email không đúng định dạng (vd: user@example.com)';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Mật khẩu không được để trống';
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        'Mật khẩu phải có ít nhất 6 ký tự, bao gồm: chữ hoa, chữ thường, số và ký tự đặc biệt';
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Xác nhận mật khẩu không được để trống';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Hàm handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    // Xóa error khi user bắt đầu nhập
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Hàm handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Nếu validation thành công
      console.log('Form data:', formData);
      
      // TODO: Gọi API đăng ký ở đây
      // Sau khi đăng ký thành công, chuyển hướng đến trang chủ
      navigate('/');
    }
  };

  // Hàm handle cancel
  const handleCancel = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  return (
    <Container className="registration-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="registration-card">
            <h2 className="text-center mb-4">Đăng Ký Tài Khoản</h2>

            <Form onSubmit={handleSubmit}>
              {/* Username Field */}
              <Form.Group className="mb-3">
                <Form.Label>Tên đăng nhập</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Nhập tên đăng nhập"
                  isInvalid={!!errors.username}
                  className="form-input"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Email Field */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email"
                  isInvalid={!!errors.email}
                  className="form-input"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Password Field */}
              <Form.Group className="mb-3">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Nhập mật khẩu"
                  isInvalid={!!errors.password}
                  className="form-input"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
                <Form.Text className="text-muted d-block mt-2">
                  💡 Mật khẩu phải có ít nhất 6 ký tự (chứa chữ hoa, chữ thường, số, ký tự đặc biệt)
                </Form.Text>
              </Form.Group>

              {/* Confirm Password Field */}
              <Form.Group className="mb-4">
                <Form.Label>Xác nhận mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Nhập lại mật khẩu"
                  isInvalid={!!errors.confirmPassword}
                  className="form-input"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Buttons */}
              <div className="button-group d-flex gap-2">
                <Button variant="primary" type="submit" className="flex-grow-1">
                  Đăng Ký
                </Button>
                <Button variant="secondary" onClick={handleCancel} className="flex-grow-1">
                  Hủy
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
