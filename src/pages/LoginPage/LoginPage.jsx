import './LoginPage.css'
import loginImage from '../../assets/images/login-background.jpg'
import LoginForm from '../../components/auth/LoginForm/LoginForm'

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-left">
        <h1>MedicAR</h1>

        <LoginForm />
      </div>

      <div className="login-right">
        <img src={loginImage} alt="MedicAR" />
      </div>
    </div>
  )
}

export default LoginPage